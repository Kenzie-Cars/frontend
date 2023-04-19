import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { carsInfo } from "../../data.mocks";
import { Comments } from "./Comments";
import { AdvertiseContainer } from "./style";

export const Advertise = () => {
  return (
    <AdvertiseContainer>
      <Navbar />
      <div className="background"></div>
      <div className="container">
        <div className="default imgContainer">
          <img src={carsInfo[1].images[0]} alt={carsInfo[1].model} />
        </div>
        <div className="default carAdvertiseInfo">
          <h3>
            {carsInfo[1].brand} {carsInfo[1].model}
          </h3>
          <div className="carInfo">
            <div>
              <p>{carsInfo[1].year}</p>
              <p>{carsInfo[1].km} KM</p>
            </div>
            <h3>R$ {carsInfo[1].price} </h3>
          </div>
          <button>Comprar</button>
        </div>
        <div className="default carDescription">
          <h3>Descrição</h3>
          <p>{carsInfo[1].description}</p>
        </div>
        <div className="default carGallery">
          <h3>Fotos</h3>
          <ul>
            {carsInfo[1].images.map((img, index) => (
              <li key={index}>
                <img src={img} alt="" />
              </li>
            ))}
          </ul>
        </div>
        <div className="default advertiserInfo">
          <div className="info">
            <h2>SL</h2>
            <h3>Samuel Leão</h3>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam et
            ipsa quam voluptates delectus rem error, iste at ducimus ab hic
            fugit placeat a voluptatibus nihil temporibus provident odio ut.
          </p>
          <button>Ver todos os anúncios</button>
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
      <Footer />
    </AdvertiseContainer>
  );
};
