import { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { HeaderStyle, LinkStyle, NavbarStyle, UlStyle } from "./style";
import { UserContext } from "../../context/UserContext";
import { FormUpdateUser } from "../FormEditUser";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const { user, isOpen, setIsOpen, isOpenMenu, setIsOpenMenu, defineAcronym } =
    useContext(UserContext);

  const token = localStorage.getItem("@userTokenKenzieKars");

  const navigate = useNavigate();

  const hidden = () => {
    setActive(!active);
  };

  const home = () => {
    navigate("/");
    setIsOpenMenu(false);
  };

  const editProfile = () =>{
    setIsOpen(true)
    setIsOpenMenu(false)
  }

  const userId = localStorage.getItem("@userIdKenzieKars");

  const myAdvertises = () => {
    navigate(`/profile/${userId}`);
    setIsOpenMenu(!isOpenMenu);
  };

  const logout = () => {
    localStorage.removeItem("@userTokenKenzieKars");
    localStorage.removeItem("@userIdKenzieKars");
    setIsOpenMenu(!isOpenMenu);
    navigate("/");
  };

  return (
    <>
      <HeaderStyle id="header" is_active={active}>
        <div>
          <img
            onClick={() => home()}
            src="http://127.0.0.1:5173/src/assets/Logo%20Header.png"
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
              <div
                className="logged"
                onClick={() => setIsOpenMenu(!isOpenMenu)}
              >
                <div className="acronym">
                  <p>{user?.name && defineAcronym(user?.name)}</p>
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
          <UlStyle is_open={isOpenMenu}>
            <li onClick={() => editProfile()}>Editar Perfil</li>
            <li>Editar Endereço</li>
            {user?.is_seller && (
              <li onClick={() => myAdvertises()}>Meus Anúncios</li>
            )}
            <li onClick={() => logout()}>Sair</li>
          </UlStyle>
        </NavbarStyle>
      </HeaderStyle>
      {isOpen && <FormUpdateUser setIsOpen={setIsOpen} isOpen={isOpen} />}
    </>
  );
};
