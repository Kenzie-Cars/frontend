import { AiOutlineUp } from "react-icons/ai";
import { animateScroll as scroll } from "react-scroll";
import { FooterStyle } from "./style";
import logoFooter from "../../assets/Logo.png";

export const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterStyle>
      <img src={logoFooter} alt="Logo Motors shop" />
      <p>© 2022 - Todos os direitos reservados.</p>
      <button onClick={scrollToTop} className="btnTop">
        <AiOutlineUp />
      </button>
    </FooterStyle>
  );
};
