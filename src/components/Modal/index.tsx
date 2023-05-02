import { ReactNode } from "react";
import {
  CloseButton,
  Container,
  Header,
  HeaderTitle,
  MainContainer,
  Overlay,
} from "./style";
import { IoIosClose } from "react-icons/io";

interface IModal {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpenAddress?: React.Dispatch<React.SetStateAction<boolean>>;
  headerTitle: string;
}

const Modal = ({
  children,
  headerTitle,
  setIsOpen,
  setIsOpenAddress,
}: IModal) => {
  const closeModal = () => {
    setIsOpen(false);
    if (setIsOpenAddress) {
      setIsOpenAddress(false);
    }
  };

  return (
    <Overlay>
      <Container>
        <Header>
          <HeaderTitle>{headerTitle}</HeaderTitle>
          <CloseButton onClick={closeModal}>
            <IoIosClose />
          </CloseButton>
        </Header>
        <MainContainer>{children}</MainContainer>
      </Container>
    </Overlay>
  );
};

export default Modal;
