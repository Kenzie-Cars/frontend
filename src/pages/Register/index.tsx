import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import Button from "../../components/button";
import { Input, Textarea } from "../../components/input";
import { IUserRequest } from "../../interfaces/user";
import { CreateUserSchema } from "../../schema/Users";
import { Api } from "../../service";
import { PageRegisterStyled } from "./style";

const Register = () => {
  const [is_seller, setIs_seller] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState<IUserRequest | null>(null);

  const {
    register,
    handleSubmit,
    formState: {
      errors: {
        name,
        email,
        cpf,
        birthDate,
        phone,
        confirmPassword,
        password,
        address,
      },
    },
  } = useForm<IUserRequest>({
    resolver: yupResolver(CreateUserSchema),
  });

  const userRegister = async (data: IUserRequest) => {
    await Api.post("/users", data)
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const sendData = async (data: IUserRequest) => {
    data.is_seller = is_seller;
    console.log(data);
    userRegister(data);
  };

  return (
    <>
      <Navbar />
      <PageRegisterStyled>
        <div className="container">
          <form onSubmit={handleSubmit(sendData)}>
            <h1>Cadastro</h1>
            <p className="info">Informações Pessoais</p>
            <Input
              label={"nome:"}
              type={"text"}
              id={"name"}
              placeholder="Digite seu nome"
              register={register}
              error={name?.message}
            />

            <Input
              label={"email:"}
              type={"email"}
              id={"email"}
              placeholder="Digite seu email"
              register={register}
              error={email?.message}
            />

            <Input
              label={"cpf:"}
              type={"text"}
              id={"cpf"}
              placeholder="123.456.789-10"
              register={register}
              error={cpf?.message}
            />
            <Input
              label={"celular:"}
              type={"text"}
              id={"phone"}
              placeholder="(DDD) 99999-9999"
              register={register}
              error={phone?.message}
            />
            <Input
              label={"data de nascimento:"}
              type={"text"}
              id={"birthDate"}
              register={register}
              error={birthDate?.message}
            />
            <Textarea
              id="description"
              placeHolder="digite aqui sua descrição"
              key={1}
              length={500}
              label={"descrição:"}
              row={4}
              register={register}
            />

            <p className="info">informações de ndereço</p>

            <Input
              label={"cep:"}
              type={"text"}
              id={"address.cep"}
              placeholder={"12345-678"}
              register={register}
              error={address?.cep?.message}
            />

            <Input
              label={"estado:"}
              type={"text"}
              id={"address.state"}
              placeholder="Digite seu estado"
              register={register}
              error={address?.state?.message}
            />

            <Input
              label={"cidade:"}
              type={"text"}
              id={"address.city"}
              placeholder="Digite sua cidade"
              register={register}
              error={address?.city?.message}
            />

            <Input
              label={"rua:"}
              type={"text"}
              id={"address.street"}
              placeholder="Digite o nome da rua"
              register={register}
              error={address?.street?.message}
            />

            <Input
              label={"número:"}
              type={"text"}
              id={"address.number"}
              placeholder="Digite o número"
              register={register}
              error={address?.number?.message}
            />

            <Input
              label={"complemento:"}
              type={"text"}
              id={"address.complement"}
              placeholder="Digite o número"
              register={register}
              error={address?.complement?.message}
            />
            <div className="div--buttons">
              <Button
                size={"2"}
                hover={"hover2"}
                background={""}
                color={""}
                onClick={() => {
                  setIs_seller(false);
                }}
                border={"none"}
                type={"button"}
                text={"Comprador"}
              />

              <Button
                size={"2"}
                hover={"hover1"}
                background={"whiteFixed"}
                color={"grey0"}
                border={"1px solid grey7"}
                onClick={() => {
                  setIs_seller(true);
                }}
                type={"button"}
                text={"Anunciante"}
              />
            </div>

            <Input
              label={"senha:"}
              type={"password"}
              id={"password"}
              placeholder="Digitar senha"
              register={register}
              error={password?.message}
            />

            <Input
              label={"confirmar senha:"}
              type={"password"}
              id={"confirmPassword"}
              placeholder="Digitar senha"
              register={register}
              error={confirmPassword?.message}
            />

            <div className="div--buttonSubmit">
              <Button
                size={"4"}
                hover={"hover1"}
                background={""}
                color={""}
                border={""}
                text={"Finalizar Cadastro"}
                type={"submit"}
              />
            </div>
          </form>
        </div>
      </PageRegisterStyled>
      <Footer />
    </>
  );
};

export default Register;
