import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useForm } from "react-hook-form";
import { IUserUpdateRequest } from "../../interfaces/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { UpdateUserSchema } from "../../schema/Users";
import Modal from "../Modal";
import { Input, Textarea } from "../input";
import Button from "../button";

interface Iprops {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const FormUpdateUser = ({ setIsOpen, isOpen }: Iprops) => {
  const { userUpdateProfile, userDeleteProfile, loading, user } = useContext(UserContext);

  const {
    handleSubmit,
    register,
  } = useForm<IUserUpdateRequest>({ resolver: yupResolver(UpdateUserSchema) });

  return (
    <Modal headerTitle="Editar de perfil" setIsOpen={setIsOpen} isOpen={isOpen}>
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
        <div className="buttons">
          <Button
            size={"2"}
            hover={"hover2"}
            background={""}
            color={""}
            onClick={() => {
              setIsOpen(false);
            }}
            border={"none"}
            type={"button"}
            text={"Cancelar"}
          />
          <Button
            size={"2"}
            hover={"hover2"}
            background={""}
            color={""}
            onClick={() => {
              userDeleteProfile();
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
        </div>
      </form>
    </Modal>
  );
};