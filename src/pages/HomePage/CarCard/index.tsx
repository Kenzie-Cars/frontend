import { useState } from "react";
import Modal from "../../../components/Modal";
import { CarImg } from "../../../components/Modal/style";
import { StyledCard } from "../../../styles/CarsContainer";
import { useNavigate } from "react-router-dom";

export const CarCard = ({ advertisement }: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // const acronym = advertisement.user.name.includes(" ")
  //   ? (
  //       advertisement.user.name.split(" ")[0][0] +
  //       "" +
  //       advertisement.user.name.split(" ")[1][0]
  //     ).toUpperCase()
  //   : (
  //       advertisement.user.name.split(" ")[0][0] +
  //       "" +
  //       advertisement.user.name.split(" ")[0][1]
  //     ).toUpperCase();

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
        <img
          src={advertisement.images[0]}
          alt={advertisement.model}
          onClick={openModal}
        />
      </div>
      <h2>
        {advertisement.brand} - {advertisement.model}
      </h2>
      <p className="cardDescription">{advertisement.description}</p>
      <div className="advertiserInfo">
        <p>{acronym}</p>
        {advertisement.user.name}
      </div>
      <div className="carInfo">
        <div>
          <p>{advertisement.km} KM</p>
          <p>{advertisement.year}</p>
        </div>
        <h3>R$ {advertisement.price}</h3>
      </div>

      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          headerTitle={"Detalhe do Carro"}
          isOpen={false}
        >
          <CarImg>
            <img src={advertisement.images[0]} alt={advertisement.model} />
          </CarImg>
        </Modal>
      )}
    </StyledCard>
  );
};
