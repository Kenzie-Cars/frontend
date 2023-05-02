import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import Modal from "../../components/Modal";
import { Navbar } from "../../components/Navbar";
import { AdvertisementContext } from "../../context/AdvertisementContext";
import { Comments } from "./Comments";
import { AdvertiseContainer } from "./style";

export const Advertise = () => {
  const { advertisements } = useContext(AdvertisementContext);
  const { id } = useParams();
  const [images, setImages] = useState<string[][]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const advertisement = advertisements.find((car) => car.id === id);
  const [currentImg, setCurrentImg] = useState(0);

  const openModal = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const getImages = advertisement?.images?.map((image) =>
      Object.values(image).slice(1).flat(1)
    );
    setImages(getImages!);
  }, [advertisement]);

  const increaseImages = () => {
    const newIndex = currentImg + 1;
    if (newIndex < images[0].length) {
      setCurrentImg(newIndex);
    }
  };

  const discreaseImages = () => {
    const newIndex = currentImg - 1;
    if (newIndex <= images[0].length) {
      setCurrentImg(newIndex);
    }
  };

  const noImg =
    "data:image/jpeg;base64,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";

  const acronym = advertisement?.user?.name.includes(" ")
    ? advertisement?.user?.name.split(" ")[0][0] +
      "" +
      advertisement?.user?.name.split(" ")[1][0]
    : (
        advertisement?.user?.name.split(" ")[0][0] +
        "" +
        advertisement?.user?.name.split(" ")[0][1]
      ).toUpperCase();

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
              <button>Comprar</button>
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
                      src={!image ? noImg : image}
                      alt={advertisement?.model}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className="default advertiserInfo">
              <div className="info">
                <h2>{acronym}</h2>
                <h3>{advertisement?.user.name}</h3>
              </div>
              <p>{advertisement?.user.description}</p>
              <a>
                {" "}
                <Link to={"/"} className="link1">
                  ver todos os anuncios
                </Link>{" "}
              </a>
            </div>
            <div className="default comments">
              <h3>Comentários</h3>
              <ul>
                {/* rodar um map na requisição/state de comentários */}
                <Comments />
                <Comments />
                <Comments />
              </ul>
            </div>
            <div className="default newComment">
              <div className="userInfo">
                <p>JS</p>
                <h3>João Sena</h3>
              </div>
              <textarea name="" id=""></textarea>
              <button>Comentar</button>
              <div className="fastComment">
                <span>Gostei muito</span>
                <span>Incrível</span>
                <span>Recomendarei para meus amigos!</span>
              </div>
            </div>
          </div>
          {isOpen && (
            <Modal
              headerTitle="Fotos do carro"
              setIsOpen={setIsOpen}
              isOpen={isOpen}
            >
              <div>
                <img
                  src={!images ? noImg : images[0][currentImg]}
                  alt={advertisement?.model}
                />
                <div className="buttonBox">
                  <button onClick={discreaseImages}>Anterior</button>
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
