import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
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
      <ToastContainer />
    </>
  );
}

export default App;
