import { StyledCard } from "../../../styles/CarsContainer";

export const CarCard = ({ car }: any) => {
  return (
    <StyledCard>
      <div className="imgContainer">
        <img src={car.images[0]} alt={car.model} />
      </div>
      <h2>
        {car.brand} - {car.model}
      </h2>
      <p className="cardDescription">{car.description}</p>
      <div className="advertiserInfo">
        <p>SL</p>Samuel Leão
      </div>
      <div className="carInfo">
        <div >
          <p>{car.km} KM</p>
          <p>{car.year}</p>
        </div>
        <h3>R$ {car.price}</h3>
      </div>
    </StyledCard>
  );
};
