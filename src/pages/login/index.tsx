import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import Button from "../../components/button";
import { Input } from "../../components/input";
import { UserContext } from "../../context/UserContext";
import { PageLoginStyled } from "./styled";

interface IUserLogin {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup
    .string()
    .email("Deve ser um email valido")
    .required("Insira seu email"),
  password: yup.string().required("Insira sua senha"),
});

export const Login = () => {
  const { userlogin } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {
      errors: { email, password },
    },
  } = useForm<IUserLogin>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IUserLogin) => {
    userlogin(data, setLoading);
  };

  return (
    <>
      <Navbar />
      <PageLoginStyled>
        <section className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Login</h1>
            <Input
              id="email"
              label="Usuário"
              type="email"
              register={register}
              error={email?.message}
              placeholder="Digitar email"
            />

            <Input
              id="password"
              label="Senha"
              type="password"
              register={register}
              error={password?.message}
              placeholder="Digitar senha"
            />

            <p className="esqueci">Esqueci minha senha</p>
            <Button
              background="brand1"
              size="5"
              hover="hover1"
              text="Entrar"
              border="none"
              color="grey8"
            />
            <p className="text2">Esqueci minha senha</p>
            <Button
              background="grey8"
              size="5"
              hover="hover2"
              text="Entrar"
              border="solid 2px var(--grey5)"
              color="grey2"
            />
          </form>
        </section>
      </PageLoginStyled>
      <Footer />
    </>
  );
};
