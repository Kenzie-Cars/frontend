import { carsInfo } from "../../data.mocks";
import { StyledCarsContainer } from "../../styles/CarsContainer";
import { CarCard } from "./CarCard";
import { StyledBackgroundImg, StyledHomeContainer } from "./style";

export const HomePage = () => {
  return (
    <StyledHomeContainer>
      <StyledBackgroundImg>
        <div className="textBackgroundImg">
          <p className="coverTitle">Motors Shop</p>
          <p className="coverDescription">
            A melhor plataforma de anúncios de carro do país
          </p>
        </div>
        <img
          src="https://www.caetanobavierabmw.pt/wp-content/uploads/2021/12/BMW-Serie-4.png"
          alt="background cars"
        />
      </StyledBackgroundImg>
      <div className="cardContainer">
        <StyledCarsContainer>
          {carsInfo.map((car) => (
            <CarCard key={car.model} car={car} />
          ))}
        </StyledCarsContainer>
      </div>
      <button>Filtros</button>
    </StyledHomeContainer>
  );
};
