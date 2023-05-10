import { DeleteCarModalStyled } from "./styled";
import Button from "../button";
import { useContext, useState } from "react";
import { AdvertisementContext } from "../../context/AdvertisementContext";
import { IoIosClose } from "react-icons/io";
import { UserContext } from "../../context/UserContext";

interface IProps {
  isOpenConfirm: boolean;
  setIsOpenConfirm: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DeleteUserModal = ({ setIsOpenConfirm }: IProps) => {
  const { setIsOpen, userDeleteProfile } = useContext(UserContext);

  const closeModalConfirm = () => {
    setIsOpenConfirm(false);
    setIsOpen(true);
  };

  const deleteProfile = () => {
    userDeleteProfile();
    setIsOpenConfirm(false);
  };

  return (
    <DeleteCarModalStyled>
      <div className="container">
        <div className="containerHeader">
          <h4>Excluir anúncio</h4>
          <button onClick={() => closeModalConfirm()}>
            <IoIosClose />
          </button>
        </div>
        <div className="text">
          <b>Tem certeza que deseja excluir sua conta?</b>
          <p>
            Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
            conta e removerá seus dados de nossos servidores.
          </p>
        </div>
        <div className="buttons">
          <Button
            background="grey6"
            hover="hover4"
            size="3"
            text="Cancelar"
            border="solid 2px transparent"
            color="grey2"
            type="button"
            onClick={() => closeModalConfirm()}
          />
          <Button
            background="alert2"
            hover="hover9"
            size="5"
            text="Sim, excluir conta"
            border="solid 2px transparent"
            color="alert1"
            type="button"
            onClick={() => deleteProfile()}
          />
        </div>
      </div>
    </DeleteCarModalStyled>
  );
};
