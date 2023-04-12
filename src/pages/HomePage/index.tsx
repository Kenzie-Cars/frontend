import { carsInfo } from "../../data.mocks";
import { StyledCarsContainer } from "../../styles/CarsContainer";
import { CarCard } from "./CarCard";

export const HomePage = () => {
  return (
<div className="cardContainer">
  <StyledCarsContainer>
    {
      carsInfo.map((car)=> (<CarCard key={car.model} car={car}/>))
    }
  </StyledCarsContainer>
</div>
  );
};
