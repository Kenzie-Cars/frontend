import Modal from "../Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UpdateAddressSchema } from "../../schema/UpdateAddressSchema";
import { IAddressUpdateResquest } from "../../interfaces/address";
import { Input } from "../input";
import { ButtonContainerStyle } from "../FormCreateAdvertise/style";
import Button from "../button";
import { FormUpdate } from "./style";

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FormUpdateAdress = ({ isOpen, setIsOpen }: IProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddressUpdateResquest>({
    resolver: yupResolver(UpdateAddressSchema),
  });

  const sendData = async (data: IAddressUpdateResquest) => {
    console.log({ address: data });
  };

  return (
    <Modal headerTitle="Editar endereço" isOpen={isOpen} setIsOpen={setIsOpen}>
      <FormUpdate onSubmit={handleSubmit(sendData)}>
        <Input
          label={"CEP"}
          type={"text"}
          id={"cep"}
          placeholder={"12345-678"}
          register={register}
          errors={errors?.address?.cep?.message}
        />

        <Input
          label={"Estado"}
          type={"text"}
          id={"state"}
          placeholder="Digite seu estado"
          register={register}
          errors={errors?.address?.state?.message}
        />

        <Input
          label={"Cidade"}
          type={"text"}
          id={"city"}
          placeholder="Digite sua cidade"
          register={register}
          errors={errors?.address?.city?.message}
        />

        <Input
          label={"Rua"}
          type={"text"}
          id={"street"}
          placeholder="Digite o nome da rua"
          register={register}
          errors={errors?.address?.street?.message}
        />

        <Input
          label={"Número"}
          type={"text"}
          id={"number"}
          placeholder="Digite o número"
          register={register}
          errors={errors?.address?.number?.message}
        />

        <Input
          label={"Complemento"}
          type={"text"}
          id={"complement"}
          placeholder="Digite o complemento"
          register={register}
          errors={errors?.address?.complement?.message}
        />
        <ButtonContainerStyle>
          <Button
            size="3"
            background="grey6"
            hover="hover2"
            text="Cancelar"
            color={"grey2"}
            onClick={() => {
              setIsOpen(false);
            }}
            type="button"
          />

          <Button
            type="submit"
            size="3"
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
