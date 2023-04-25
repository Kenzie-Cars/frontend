import { ReactNode, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IUserLogin } from "../interfaces/components";
import { IUserRequest } from "../interfaces/user";
import { Api } from "../service";

export const UserContext = createContext({} as IUserContext);

interface IUserContext {
  user: IUserRequest | null;
  setUser: React.Dispatch<React.SetStateAction<IUserRequest | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  userRegister: (
    data: IUserRequest,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  userlogin: (
    userData: IUserLogin,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
}

interface IUserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUserRequest | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const userRegister = async (
    data: IUserRequest,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {git 
    try {
      setLoading(true);
      const res = await Api.post("/users", data);
      toast.success("Usuário criado com sucesso!", {
        autoClose: 1500,
      }),
        navigate("/login");
      setUser(res.data);
    } catch (error) {
      toast.error("Usuário já cadastrado", {
        autoClose: 1500,
      });
    } finally {
      setLoading(false);
    }
  };

  const userlogin = async (
    userData: IUserLogin) => {
    console.log(userData);

    try {
      setLoading(true);
      const res = await Api.post("/login", userData);
      toast.success("Login feito sucesso", {
        autoClose: 1500,
      });
      localStorage.setItem("@TOKEN", res.data.token);
      localStorage.setItem("@user_id", res.data.user.id);
      setUser(res.data.user);
      navigate("/");
    } catch (error) {
      toast.error("Email ou senha incorretos", {
        autoClose: 1500,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        userRegister,
        userlogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
