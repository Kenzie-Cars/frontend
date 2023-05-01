import Modal from "../Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../input";
import { ButtonContainerStyle } from "../FormCreateAdvertise/style";
import Button from "../button";
import { FormUpdate } from "./style";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { IUserUpdateRequest } from "../../interfaces/user";
import { UpdateUserSchema } from "../../schema/Users";

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpenAddress: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FormUpdateAdress = ({
  isOpen,
  setIsOpen,
  setIsOpenAddress,
}: IProps) => {
  const { user, userUpdateProfile } = useContext(UserContext);

  const { register, handleSubmit } = useForm<IUserUpdateRequest>({
    resolver: yupResolver(UpdateUserSchema),
  });

  const sendData = async (data: IUserUpdateRequest) => {
    userUpdateProfile(data);
  };

  return (
    <Modal
      headerTitle="Editar endereço"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      setIsOpenAddress={setIsOpenAddress}
    >
      <FormUpdate onSubmit={handleSubmit(sendData)}>
        <Input
          label={"CEP"}
          type={"text"}
          id={"address.cep"}
          placeholder={"12345-678"}
          register={register}
          defaultValue={user?.address?.cep}
        />
        <div className="inputContainer">
          <Input
            label={"Estado"}
            type={"text"}
            id={"address.state"}
            placeholder="Digite seu estado"
            register={register}
            defaultValue={user?.address?.state}
          />

          <Input
            label={"Cidade"}
            type={"text"}
            id={"address.city"}
            placeholder="Digite sua cidade"
            register={register}
            defaultValue={user?.address?.city}
          />
        </div>

        <div className="inputContainer">
          <Input
            label={"Rua"}
            type={"text"}
            id={"address.street"}
            placeholder="Digite o nome da rua"
            register={register}
            defaultValue={user?.address?.street}
          />

          <Input
            label={"Número"}
            type={"text"}
            id={"address.number"}
            placeholder="Digite o número"
            register={register}
            defaultValue={user?.address?.number}
          />
        </div>

        <Input
          label={"Complemento"}
          type={"text"}
          id={"address.complement"}
          placeholder="Digite o complemento"
          register={register}
          defaultValue={user?.address?.complement}
        />
        <ButtonContainerStyle>
          <Button
            size="3"
            background="grey6"
            hover="hover2"
            text="Cancelar"
            color={"grey2"}
            onClick={() => {
              setIsOpenAddress(false);
            }}
            type="button"
          />

          <Button
            type="submit"
            size="4"
            background="brand3"
            hover="hover2"
            text="Salvar alterações"
            color={"brand4"}
          />
        </ButtonContainerStyle>
      </FormUpdate>
    </Modal>
  );
};
