import { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { mockUser } from "../../mocks/productCard";
import { HeaderStyle, LinkStyle, NavbarStyle, UlStyle } from "./style";
import { UserContext } from "../../context/UserContext";
import { FormUpdateAdress } from "../FormUpdateAdress";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(UserContext);

  const acronym = user?.name.includes(" ")
    ? (
        user?.name.split(" ")[0][0] +
        "" +
        user?.name.split(" ")[1][0]
      ).toUpperCase()
    : (
        user?.name.split(" ")[0][0] +
        "" +
        user?.name.split(" ")[0][1]
      ).toUpperCase();

  const token = localStorage.getItem("@userTokenKenzieKars");

  const navigate = useNavigate();

  const hidden = () => {
    setActive(!active);
  };

  const home = () => {
    navigate("/");
  };

  const userId = localStorage.getItem("@userIdKenzieKars");

  const editAdress = () => {
    return <FormUpdateAdress isOpen={isOpen} setIsOpen={setIsOpen} />;
  };

  const myAdvertises = () => {
    navigate(`/profile/${userId}`);
  };

  const logout = () => {
    localStorage.removeItem("@userTokenKenzieKars");
    localStorage.removeItem("@userIdKenzieKars");
    setIsOpen(!open);
  };

  return (
    <>
      <HeaderStyle id="header" is_active={active}>
        <div>
          <img
            onClick={() => home()}
            src="./src/assets/Logo Header.png"
            alt="Logo Motors Shop"
          />
          <GiHamburgerMenu
            className={active ? "open" : "close"}
            onClick={() => hidden()}
          />
          <GrFormClose
            className={active ? "close" : "open"}
            onClick={() => hidden()}
          />
        </div>
        <NavbarStyle is_active={active} is_token={token}>
          {token ? (
            <>
              <div className="logged" onClick={() => setIsOpen(!isOpen)}>
                <div className="acronym">
                  <p>{acronym && acronym}</p>
                </div>
                <p>{user?.name}</p>
              </div>
            </>
          ) : (
            <>
              <a>
                {" "}
                <Link to={"/login"} className="link1">
                  Fazer login
                </Link>{" "}
              </a>
              <LinkStyle>
                {" "}
                <Link to={"/register"} className="link">
                  Cadastrar
                </Link>{" "}
              </LinkStyle>
            </>
          )}
          {isOpen && mockUser.is_seller ? (
            <UlStyle is_open={isOpen}>
              <li>Editar Perfil</li>
              <li>Editar Endereço</li>
              <li onClick={() => myAdvertises()}>Meus Anúncios</li>
              <li onClick={() => logout()}>Sair</li>
            </UlStyle>
          ) : (
            <UlStyle is_open={isOpen}>
              <li>Editar Perfil</li>
              <li onClick={() => editAdress()}>Editar Endereço</li>
              <li onClick={() => logout()}>Sair</li>
            </UlStyle>
          )}
        </NavbarStyle>
      </HeaderStyle>
    </>
  );
};
