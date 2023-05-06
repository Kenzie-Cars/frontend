import { ReactNode, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RequestApiKenzieKars } from "../Requests/RequestApiKenzieKars";
import {
  IUserLogin,
  IUserRequest,
  IUserResponse,
  IUserUpdateRequest,
} from "../interfaces/user";

export const UserContext = createContext({} as IUserContext);

interface IUserContext {
  user: IUserResponse | null;
  setUser: React.Dispatch<React.SetStateAction<IUserResponse | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  userRegister: (
    data: IUserRequest,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  userlogin: (
    userData: IUserLogin,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  ) => void;
  userUpdateProfile: (userData: IUserUpdateRequest) => Promise<void>;
  userDeleteProfile: () => Promise<void>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenMenu: boolean;
  isOpenAddress: boolean;
  setIsOpenAddress: React.Dispatch<React.SetStateAction<boolean>>;
  defineAcronym: (username: string) => string;
}

interface IUserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUserResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenAddress, setIsOpenAddress] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@userTokenKenzieKars");
      const id = localStorage.getItem("@userIdKenzieKars");
      if (token) {
        try {
          setLoading(true);
          RequestApiKenzieKars.defaults.headers.common.Authorization = `Bearer ${token}`;

          const { data } = await RequestApiKenzieKars.get(`users/${id}`);
          setUser(data);
        } catch (error) {
          console.log(error);
          localStorage.removeItem("@userTokenKenzieKars");
          localStorage.removeItem("@userIdKenzieKars");
        }
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  const defineAcronym = (username: string) => {
    const acronym = username.includes(" ")
      ? (
          username.split(" ")[0][0] +
          "" +
          username.split(" ")[1][0]
        ).toUpperCase()
      : (
          username.split(" ")[0][0] +
          "" +
          username.split(" ")[0][1]
        ).toUpperCase();

    return acronym;
  };

  const userRegister = async (
    data: IUserRequest,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const res = await RequestApiKenzieKars.post("users", data);
      toast.success("Usuário criado com sucesso!", {
        autoClose: 1500,
      }),
        navigate("/login");
      setUser(res.data);
    } catch (error) {
      toast.error("Erro ao cadastrar", {
        autoClose: 1500,
      });
    } finally {
      setLoading(false);
    }
  };

  const userlogin = async (userData: IUserLogin) => {
    try {
      setLoading(true);
      const res = await RequestApiKenzieKars.post("login", userData);
      toast.success("Login feito sucesso", {
        autoClose: 1500,
      });

      localStorage.setItem("@userTokenKenzieKars", res.data.token);
      localStorage.setItem("@userIdKenzieKars", res.data.user.id);
      localStorage.setItem("@userKenzieKars", res.data.user.is_seller);

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

  const token = localStorage.getItem("@userTokenKenzieKars");
  const userId = localStorage.getItem("@userIdKenzieKars");
  const userUpdateProfile = async (userData: IUserUpdateRequest) => {
    try {
      setLoading(true);
      const res = await RequestApiKenzieKars.patch(
        `users/${userId}`,
        userData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Dados atualizados com sucesso", {
        autoClose: 1500,
      });
      console.log(res.data);
      setUser(res.data);
    } catch (error) {
      toast.error("Não foi possível alterar os dados", {
        autoClose: 1500,
      });
    } finally {
      setLoading(false);
      setIsOpen(false);
    }
  };
  const userDeleteProfile = async () => {
    try {
      setLoading(true);
      await RequestApiKenzieKars.delete(`users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Usuário deletado com sucesso", {
        autoClose: 1500,
      });
      localStorage.removeItem("@userTokenKenzieKars");
      localStorage.removeItem("@userIdKenzieKars");
      setUser(null);
      setIsOpen(false);
    } catch (error) {
      toast.error("Não foi possível deletar o perfil", {
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
        defineAcronym,
        userRegister,
        userlogin,
        userUpdateProfile,
        userDeleteProfile,
        isOpen,
        setIsOpen,
        setIsOpenMenu,
        isOpenAddress,
        setIsOpenAddress,
        isOpenMenu,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
