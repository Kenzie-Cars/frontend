import { ReactNode } from "react"
import { Container, Header, MainContainer, Overlay } from "./style"

interface IModal {
  children: ReactNode
  setIsOpen:  React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = ({setIsOpen, children}: IModal) => {
   
    return(
    <Overlay>
        <Container>
          <Header>
            <h3>Imagem do veículo</h3> 
            <button onClick={()=>{setIsOpen(false)}}>X</button>
          </Header>
          <MainContainer>
            <div>
              <img src="src\assets\EXTERIOR-frontSidePilotNear-1653845164710-removebg-preview 1.png" alt="" />
            </div>
          </MainContainer>
        </Container>
    </Overlay>
    )
}
export default Modal

// exemplo para usar  no modal para abir
  // <button onClick={()=>{setIsOpen(true)}}>Abrir modal</button>
  // {isOpen && <Modal setIsOpen={setIsOpen} children={undefined}/>}