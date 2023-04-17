import { useState } from "react";
import { HeaderStyle, LinkStyle, NavbarStyle, UlStyle } from "./style";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import { mockUser } from "../../mocks/productCard";
import { useNavigate } from "react-router-dom";

interface INavbarProps {
  user?: string;
  userAcronym?: string;
}

export const Navbar = ({ user, userAcronym }: INavbarProps) => {
  const [active, setActive] = useState(false);
  const [token, setToken] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const hidden = () => {
    setActive(!active);
  };

  const home = () => {
    navigate("/");
  };

  const logout = () => {
    setToken(!token);
    setOpen(!open);
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
              <div className="logged" onClick={() => setOpen(!open)}>
                <div className="acronym">
                  <p>SL</p>
                </div>
                <p>{mockUser.name}</p>
              </div>
            </>
          ) : (
            <>
              <a onClick={() => setToken(!token)}>Fazer Login</a>
              <LinkStyle>Cadastrar</LinkStyle>
            </>
          )}
          {open && mockUser.is_seller ? (
            <UlStyle is_open={open}>
              <li>Editar Perfil</li>
              <li>Editar Endereço</li>
              <li>Meus Anúncios</li>
              <li onClick={() => logout()}>Sair</li>
            </UlStyle>
          ) : (
            <UlStyle is_open={open}>
              <li>Editar Perfil</li>
              <li>Editar Endereço</li>
              <li onClick={() => logout()}>Sair</li>
            </UlStyle>
          )}
        </NavbarStyle>
      </HeaderStyle>
    </>
  );
};
