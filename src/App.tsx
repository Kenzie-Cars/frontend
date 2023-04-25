import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { UserProvider } from "./context/UserContext";
import { AllRoutes } from "./routes";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      
        <BrowserRouter>

          <UserProvider>

            <AllRoutes />

          </UserProvider>
          
        </BrowserRouter> 
      
      <ToastContainer />
    </>
  );
}

export default App;
