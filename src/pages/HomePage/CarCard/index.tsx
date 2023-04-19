import { useState } from "react";
import Modal from "../../../components/Modal";
import { CarImg } from "../../../components/Modal/style";
import { StyledCard } from "../../../styles/CarsContainer";
import { useNavigate } from "react-router-dom";

export const CarCard = ({ car }: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const openModal = () => {
    setIsOpen(true);
  };

  const advertise = () => {
    navigate("/advertise");
  };

  return (
    <StyledCard onClick={() => advertise()}>
      <div className="imgContainer">
        <img src={car.images[0]} alt={car.model} onClick={openModal} />
      </div>
      <h2>
        {car.brand} - {car.model}
      </h2>
      <p className="cardDescription">{car.description}</p>
      <div className="advertiserInfo">
        <p>SL</p>Samuel Leão
      </div>
      <div className="carInfo">
        <div>
          <p>{car.km} KM</p>
          <p>{car.year}</p>
        </div>
        <h3>R$ {car.price}</h3>
      </div>

      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          headerTitle={"Detalhe do Carro"}
          isOpen={false}
        >
          <CarImg>
            <img src={car.images[0]} alt={car.model} />
          </CarImg>
        </Modal>
      )}
    </StyledCard>
  );
};
