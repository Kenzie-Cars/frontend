import { AiOutlineUp } from "react-icons/ai";
import { animateScroll as scroll } from "react-scroll";
import logoFooter from "../../assets/Logo.png";
import { FooterStyle } from "./style";

export const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const currentYear = new Date().getFullYear();

  return (
    <FooterStyle>
      <img src={logoFooter} alt="Logo Motors shop" />
      <p>© {currentYear} - Todos os direitos reservados.</p>
      <button onClick={scrollToTop} className="btnTop">
        <AiOutlineUp />
      </button>
    </FooterStyle>
  );
};
