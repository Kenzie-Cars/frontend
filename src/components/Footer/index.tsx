import { AiOutlineUp } from "react-icons/ai";
import { animateScroll as scroll } from "react-scroll";
import { FooterStyle } from "./style";

export const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterStyle>
      <img
        src="http://127.0.0.1:5173/src/assets/Logo.png"
        alt="Logo Motors shop"
      />
      <p>© 2022 - Todos os direitos reservados.</p>
      <button onClick={scrollToTop} className="btnTop">
        <AiOutlineUp />
      </button>
    </FooterStyle>
  );
};
