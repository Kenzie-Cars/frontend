import { PageLoginStyled } from "./styled";
import { Input } from "../../components/input";
import Button from "../../components/button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { RequestApiKenzieKars } from "../../Requests/RequestApiKenzieKars";

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
  const {
    register,
    handleSubmit,
    formState: {
      errors: { email, password },
    },
  } = useForm<IUserLogin>({
    resolver: yupResolver(schema),
  });

  const print = (data: IUserLogin) => {
    console.log(data);
  };

  // Importa para o context
  //============================\\
  const navigate = useNavigate();

  const login = async (userData: IUserLogin) => {
    console.log(userData);
    await RequestApiKenzieKars.post("login", userData)
      .then((response) => {
        localStorage.setItem("@userTokenKenzieKars", response.data.token);
        localStorage.setItem("@userIdKenzieKars", response.data.user.id);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // ===========================\\

  return (
    <>
      <Navbar />
      <PageLoginStyled>
        <section className="container">
          <form onSubmit={handleSubmit(login)}>
            <h1>Login</h1>
            <Input
              id="email"
              label="Usuário"
              type="email"
              register={register}
              errors={email?.message}
              placeholder="Email"
            />

            <Input
              id="password"
              label="Senha"
              type="password"
              register={register}
              errors={password?.message}
              placeholder="Password"
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
