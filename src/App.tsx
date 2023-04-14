import { useState } from "react";
import Modal from "./components/Modal";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <GlobalStyle />
       <button onClick={()=>{setIsOpen(true)}}>Abrir modal</button>
      {isOpen && <Modal setIsOpen={setIsOpen} children={undefined}/>}
    </>
  );
}

export default App;
