import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../context/UserContext";
import { IUserUpdateRequest } from "../../interfaces/user";
import { UpdateUserSchema } from "../../schema/Users";
import Modal from "../Modal";
import Button from "../button";
import { Input, Textarea } from "../input";
import { ButtonContainerStyle } from "../FormCreateAdvertise/style";
import { StyledUpdateUserContainer } from "./style";

interface Iprops {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const FormUpdateUser = ({ setIsOpen, isOpen }: Iprops) => {
  const { userUpdateProfile, loading, user, setIsOpenConfirm } =
    useContext(UserContext);

  const { handleSubmit, register } = useForm<IUserUpdateRequest>({
    resolver: yupResolver(UpdateUserSchema),
  });

  const openModalConfirm = () => {
    setIsOpenConfirm(true);
    setIsOpen(false);
  };

  return (
    <Modal headerTitle="Editar de perfil" setIsOpen={setIsOpen} isOpen={isOpen}>
      <StyledUpdateUserContainer>
        <p>informações pessoais</p>
        <form onSubmit={handleSubmit(userUpdateProfile)}>
          <Input
            type="text"
            register={register}
            id="name"
            label="Nome"
            defaultValue={user?.name}
          />
          <Input
            type="text"
            register={register}
            id="email"
            label="E-mail"
            defaultValue={user?.email}
          />
          <Input
            type="text"
            register={register}
            id="cpf"
            label="CPF"
            defaultValue={user?.cpf}
          />
          <Input
            type="text"
            register={register}
            id="phone"
            label="Celular"
            defaultValue={user?.phone}
          />
          <Input
            type="text"
            register={register}
            id="birthDate"
            label="Data de nascimento"
            defaultValue={user?.birthDate}
          />
          <Textarea
            id="description"
            defaultValue={user?.description}
            key={1}
            length={500}
            label={"Descrição"}
            row={4}
            register={register}
          />
          <ButtonContainerStyle>
            <Button
              size={"2"}
              hover={"hover6"}
              background={"grey6"}
              color={"grey2"}
              onClick={() => {
                setIsOpen(false);
              }}
              border={"none"}
              type={"button"}
              text={"Cancelar"}
            />
            <Button
              size={"2"}
              hover={"hover9"}
              background={"alert2"}
              color={"alert1"}
              onClick={() => {
                openModalConfirm();
              }}
              border={"none"}
              type={"button"}
              text={loading ? "Excluindo..." : "Excluir"}
            />
            <Button
              size={"2"}
              hover={"hover2"}
              background={""}
              color={""}
              border={"none"}
              type={"submit"}
              text={loading ? "Salvando..." : "Salvar alterações"}
            />
          </ButtonContainerStyle>
        </form>
      </StyledUpdateUserContainer>
    </Modal>
  );
};
