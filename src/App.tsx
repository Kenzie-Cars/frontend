import { AllRoutes } from "./routes";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
