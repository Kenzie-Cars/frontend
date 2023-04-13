import { useState } from "react";
import { ButtonStyle, HeaderStyle, NavbarStyle } from "./style";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const hidden = () => {
    setActive(!active);
  };

  return (
    <>
      <HeaderStyle id="header" is_active={active}>
        <div>
          <img src="./src/assets/Logo Header.png" alt="Logo Motors Shop" />
          <GiHamburgerMenu
            className={active ? "open" : "close"}
            onClick={() => hidden()}
          />
          <GrFormClose
            className={active ? "close" : "open"}
            onClick={() => hidden()}
          />
        </div>
        <NavbarStyle is_active={active}>
          <p>Fazer Login</p>
          <ButtonStyle>Cadastrar</ButtonStyle>
        </NavbarStyle>
      </HeaderStyle>
    </>
  );
};
