import { ReactNode } from "react";
import {
  CloseButton,
  Container,
  Header,
  HeaderTitle,
  MainContainer,
  Overlay,
} from "./style";

interface IModal {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  headerTitle: string;
}

const Modal = ({ children, headerTitle, setIsOpen }: IModal) => {

  const closeModal = () =>{
    setIsOpen(false)
  }

  return (
    <Overlay>
      <Container>
        <Header>
          <HeaderTitle>{headerTitle}</HeaderTitle>
          <CloseButton
            onClick={closeModal}
          >
            X
          </CloseButton>
        </Header>
        <MainContainer>{children}</MainContainer>
      </Container>
    </Overlay>
  );
};

export default Modal;
