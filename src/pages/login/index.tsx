import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import Button from "../../components/button";
import { Input } from "../../components/input";
import { UserContext } from "../../context/UserContext";
import { IUserLogin } from "../../interfaces/user";
import { PageLoginStyled } from "./styled";
import { LoginSchema } from "../../schema/Users";

export const Login = () => {
  const { userlogin } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {
      errors: { email, userPassword },
    },
  } = useForm<IUserLogin>({
    resolver: yupResolver(LoginSchema),
  });

  const navigate = useNavigate();

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
              errors={email?.message}
              placeholder="Digitar email"
            />

            <Input
              id="userPassword"
              label="Senha"
              type="password"
              register={register}
              errors={userPassword?.message}
              placeholder="Digitar senha"
            />

            <p className="esqueci" onClick={() => navigate("/forgot-password")}>
              Esqueci minha senha
            </p>
            <Button
              background="brand1"
              size="5"
              hover="hover1"
              text="Entrar"
              border="none"
              color="grey8"
            />
          </form>
        </section>
      </PageLoginStyled>
      <Footer />
    </>
  );
};
