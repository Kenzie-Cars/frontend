import { Input, Select, Textarea } from "./components/input"
import Button from "./components/button"
import GlobalStyle from "./styles/GlobalStyle"

function App() {

  return (
    <div >
      <GlobalStyle />
      <Button
        background="brand1"
        hover="hover 1"
        size="3"
        text="Entrar"
      />

      <Input
        id="name"
        label="Nome"
        type="text"
      />

      <Textarea
        id="teste"
        label="Label"
        length={50}
        placeHolder="Escreva algo aqui"
        row={4}
      />

      <Select
        id="select"
        options={["Valor 1", "Valor 2", "Valor 3", "Valor 4", "Valor 5"]}
      />

    </div>
  )
}

export default App
