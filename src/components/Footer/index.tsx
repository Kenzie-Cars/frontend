import { Link } from "react-router-dom";
import { FooterStyle } from "./style";
import { AiOutlineUp } from "react-icons/ai";

export const Footer = () => {
  return (
    <FooterStyle>
      <img src="./src/assets/Logo.png" alt="Logo Motors shop" />
      <p>© 2022 - Todos os direitos reservados.</p>
      <Link to={"#header"}>
        <AiOutlineUp />
      </Link>
    </FooterStyle>
  );
};
