import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { AllRoutes } from "./routes";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <AllRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
