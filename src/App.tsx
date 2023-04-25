import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { UserProvider } from "./context/UserContext";
import { AllRoutes } from "./routes";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <UserProvider>
        <AllRoutes />
      </UserProvider>
      <ToastContainer />
    </>
  );
}

export default App;
