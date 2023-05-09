import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { RequestApiKenzieKars } from "../../Requests/RequestApiKenzieKars";
import { Footer } from "../../components/Footer";
import Modal from "../../components/Modal";
import { Navbar } from "../../components/Navbar";
import Button from "../../components/button";
import { Textarea } from "../../components/input";
import { AdvertisementContext } from "../../context/AdvertisementContext";
import { UserContext } from "../../context/UserContext";
import { IAdvertisementResponse } from "../../interfaces/advertisement";
import { ICommentRequest, ICommentsResponse } from "../../interfaces/comments";
import { CreateCommentSchema } from "../../schema/CreateCommentSchema";
import { AdvertiseContainer } from "./style";

export const Advertise = () => {
  const { user, defineAcronym } = useContext(UserContext);
  const { advertisements } = useContext(AdvertisementContext);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [images, setImages] = useState<string[][]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const advertisement: IAdvertisementResponse | undefined = advertisements.find(
    (car) => car.id === id,
  );
  const [currentImg, setCurrentImg] = useState(0);
  const [comments, setComments] = useState<ICommentsResponse[]>([]);
  const [valueComments, setValueComments] = useState("");
  const navigate = useNavigate();

  const changeLink = () => {
    const token = localStorage.getItem("@userTokenKenzieKars");
    if (token) {
      return `https://api.whatsapp.com/send?phone=55${advertisement?.user.phone}&text=Ol%C3%A1%20gostaria%20de%20obter%20informa%C3%A7%C3%B5es%20sobre%20o%20an%C3%BAncio%20  ${advertisement?.model}%20`;
    }
    return navigate("/login");
  };

  const openModal = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const getImages = advertisement?.images?.map((image) =>
      Object.values(image).slice(1).flat(1),
    );
    setImages(getImages!);
  }, [advertisement]);

  useEffect(() => {
    const loadComments = async () => {
      RequestApiKenzieKars.get(`advertisements/${id}`).then((res) =>
        setComments(res.data.userAdvertisements),
      );
    };
    loadComments();
  }, [loading]);

  const {
    register,
    handleSubmit,
    formState: {
      errors: { comment },
    },
  } = useForm<ICommentRequest>({
    resolver: yupResolver(CreateCommentSchema),
  });

  const createComment = async (
    valueComments: ICommentRequest,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    const token = localStorage.getItem("@userTokenKenzieKars");
    if (token) {
      try {
        setLoading(true);
        RequestApiKenzieKars.defaults.headers.common.Authorization = `Bearer ${token}`;
        const response = await RequestApiKenzieKars.post(
          `advertisements/comments/${id}`,
          valueComments,
        );
        toast.success("Comentário criado", {
          autoClose: 1500,
        });
        setComments([response.data]);
        setValueComments("");
      } catch (error) {
        toast.error("Erro ao comentar");
        console.log(error);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    }
  };

  const sendComment = async (data: ICommentRequest) => {
    createComment(data, setLoading);
  };

  const increaseImages = () => {
    const newIndex = currentImg + 1;
    if (newIndex < images[0].length) {
      setCurrentImg(newIndex);
    }
  };

  const decreaseImages = () => {
    const newIndex = currentImg - 1;
    if (newIndex <= images[0].length) {
      setCurrentImg(newIndex);
    }
  };

  const noImg =
    "https://img.freepik.com/vetores-gratis/carro-realista-coberto-com-seda-vermelha-isolado-no-fundo-branco_1441-2576.jpg";

  const calcDate = (data: { created_at: Date }) => {
    const currentDate: any | number | bigint = new Date(data.created_at);
    const now: any | number | bigint = new Date();
    const minutes: any | number | bigint =
      now.getMinutes() - currentDate.getMinutes();
    const hours: any | number | bigint =
      now.getHours() - currentDate.getHours();
    const days: any | number | bigint = now.getDate() - currentDate.getDate();
    const months: any | number | bigint =
      now.getMonth() - currentDate.getMonth();
    const year: any | number | bigint =
      now.getFullYear() - currentDate.getFullYear();

    if (now - currentDate < 60 * 60 * 1000) {
      return `há ${minutes} minutos`;
    }
    if (now - currentDate < 24 * 60 * 60 * 1000) {
      if (hours == 1) {
        return `há ${hours} hora`;
      } else {
        return `há ${hours} horas`;
      }
    } else if (now - currentDate < 30 * 24 * 60 * 60 * 1000) {
      if (days == 1) {
        return `há ${days} dia`;
      } else {
        return `há ${days} dias`;
      }
    } else if (now - currentDate < 12 * 30 * 24 * 60 * 60 * 1000) {
      if (months == 1) {
        return `há ${months} mês`;
      } else {
        return `há ${months} meses`;
      }
    } else {
      return `há ${year} anos`;
    }
  };

  return (
    <AdvertiseContainer>
      <Navbar />
      {images ? (
        <>
          <div className="background"></div>
          <div className="container">
            <div className="default imgContainer">
              <img src={advertisement?.cover_img} alt={advertisement?.model} />
            </div>
            <div className="default carAdvertiseInfo">
              <h3>
                {advertisement?.brand} {advertisement?.model}
              </h3>
              <div className="carInfo">
                <div>
                  <p>{advertisement?.year}</p>
                  <p>{advertisement?.km} KM</p>
                </div>
                <h3>R$ {advertisement?.price} </h3>
              </div>
              {user ? (
                <a
                  href={`https://api.whatsapp.com/send?phone=55${advertisement?.user.phone}&text=Ol%C3%A1%20gostaria%20de%20obter%20informa%C3%A7%C3%B5es%20sobre%20o%20an%C3%BAncio%20  ${advertisement?.model}%20`}
                  target="blank"
                >
                  Comprar
                </a>
              ) : (
                <a href={"/login"}>Comprar</a>
              )}
            </div>
            <div className="default carDescription">
              <h3>Descrição</h3>
              <p>{advertisement?.description}</p>
            </div>
            <div className="default carGallery">
              <h3>Fotos</h3>
              <ul>
                {images[0]?.map((image, index) => (
                  <li key={index} onClick={openModal}>
                    <img
                      src={image ? image : noImg}
                      alt={advertisement?.model}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className="default advertiserInfo">
              <div className="info">
                <h2>{defineAcronym(advertisement?.user?.name!)}</h2>
                <h3>{advertisement?.user.name}</h3>
                <p>{advertisement?.user.description}</p>
              </div>
              <a>
                {" "}
                <Link
                  to={`/profile/${advertisement?.user.id}`}
                  className="link1"
                >
                  ver todos os anuncios
                </Link>{" "}
              </a>
            </div>
            <div className="default comments">
              <h3>Comentários</h3>
              <ul className="comments-list">
                {comments?.map((comment: ICommentsResponse) => (
                  <li key={comment.id}>
                    <div className="userInfo">
                      <p>{defineAcronym(comment.user?.name)}</p>
                      <h3>{comment.user?.name}</h3>{" "}
                      <span> - {calcDate(comment)}</span>
                    </div>
                    <p className="commentBody">{comment.comment}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="default newComment">
              <div className="userInfo">
                <p>{defineAcronym(!user ? "un" : user?.name)}</p>
                <h3>{user && user?.name}</h3>
              </div>
              <form className="newComment" onSubmit={handleSubmit(sendComment)}>
                <Textarea
                  id="comment"
                  placeHolder="Digite aqui seu comentário"
                  key={1}
                  length={500}
                  row={4}
                  label={""}
                  value={valueComments}
                  register={register}
                  onChange={setValueComments}
                />
                {user ? (
                  <Button
                    size={"1"}
                    text={"Comentar"}
                    type={"submit"}
                    hover={""}
                    background={""}
                  />
                ) : (
                  <Button
                    size={"1"}
                    text={"Comentar"}
                    type={"button"}
                    hover={""}
                    background={""}
                    onClick={() => navigate("/login")}
                  />
                )}

                <div className="fastComment">
                  <span onClick={() => setValueComments("Gostei muito")}>
                    Gostei muito
                  </span>
                  <span onClick={() => setValueComments("Incrível")}>
                    Incrível
                  </span>
                  <span
                    onClick={() =>
                      setValueComments("Recomendarei para meus amigos!")
                    }
                  >
                    Recomendarei para meus amigos!
                  </span>
                </div>
              </form>
            </div>
          </div>
          {isOpen && (
            <Modal
              headerTitle="Fotos do carro"
              setIsOpen={setIsOpen}
              isOpen={isOpen}
            >
              <div>
                {images[0][currentImg] ? (
                  <img src={images[0][currentImg]} alt={advertisement?.model} />
                ) : (
                  <img src={noImg} alt={advertisement?.model} />
                )}
                <div className="buttonBox">
                  <button onClick={decreaseImages}>Anterior</button>
                  <button onClick={increaseImages}>Próximo</button>
                </div>
              </div>
            </Modal>
          )}
        </>
      ) : (
        <h1>loading</h1>
      )}
      <Footer />
    </AdvertiseContainer>
  );
};
