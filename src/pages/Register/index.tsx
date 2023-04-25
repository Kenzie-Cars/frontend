import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import Button from "../../components/button";
import { Input, Textarea } from "../../components/input";
import { UserContext } from "../../context/UserContext";
import { IUserRequest } from "../../interfaces/user";
import { CreateUserSchema } from "../../schema/Users";
import { PageRegisterStyled } from "./style";
import { RequestApiKenzieKars } from "../../Requests/RequestApiKenzieKars";

const Register = () => {
  const { userRegister } = useContext(UserContext);

  const [is_seller, setIs_seller] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const sendData = async (data: IUserRequest) => {
    data.is_seller = is_seller;
    data.is_adm = false;
    console.log(data);
    userRegister(data, setLoading);
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
              errors={name?.message}
            />

            <Input
              label={"email:"}
              type={"email"}
              id={"email"}
              placeholder="Digite seu email"
              register={register}
              errors={email?.message}
            />

            <Input
              label={"cpf:"}
              type={"text"}
              id={"cpf"}
              placeholder="000.000.00-00"
              register={register}
              errors={cpf?.message}
            />
            <Input
              label={"celular:"}
              type={"text"}
              id={"phone"}
              placeholder="(DDD) 90000-0000"
              register={register}
              errors={phone?.message}
            />
            <Input
              label={"data de nascimento:"}
              type={"text"}
              id={"birthDate"}
              register={register}
              placeholder="20/12/2000"
              errors={birthDate?.message}
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

            <p className="info">Informações de Endereço</p>

            <Input
              label={"cep:"}
              type={"text"}
              id={"address.cep"}
              placeholder={"12345-678"}
              register={register}
              errors={address?.cep?.message}
            />

            <Input
              label={"estado:"}
              type={"text"}
              id={"address.state"}
              placeholder="Digite seu estado"
              register={register}
              errors={address?.state?.message}
            />

            <Input
              label={"cidade:"}
              type={"text"}
              id={"address.city"}
              placeholder="Digite sua cidade"
              register={register}
              errors={address?.city?.message}
            />

            <Input
              label={"rua:"}
              type={"text"}
              id={"address.street"}
              placeholder="Digite o nome da rua"
              register={register}
              errors={address?.street?.message}
            />

            <Input
              label={"número:"}
              type={"text"}
              id={"address.number"}
              placeholder="Digite o número"
              register={register}
              errors={address?.number?.message}
            />

            <Input
              label={"complemento:"}
              type={"text"}
              id={"address.complement"}
              placeholder="Digite o número"
              register={register}
              errors={address?.complement?.message}
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
              errors={password?.message}
            />

            <Input
              label={"confirmar senha:"}
              type={"password"}
              id={"confirmPassword"}
              placeholder="Digitar senha"
              register={register}
              errors={confirmPassword?.message}
            />

            <div className="div--buttonSubmit">
              <Button
                size={"5"}
                hover={"hover1"}
                background={""}
                color={""}
                border={""}
                type={"submit"}
                disabled={loading}
                text={loading ? "Cadastrando..." : "Cadastrar"}
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
