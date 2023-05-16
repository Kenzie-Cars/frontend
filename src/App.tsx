import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { AdvProvider } from "./context/AdvertisementContext";
import { UserProvider } from "./context/UserContext";
import { AllRoutes } from "./routes";
import GlobalStyle from "./styles/GlobalStyle";
import { CurrentProductCardProvider } from "./context/productCardContext";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <UserProvider>
          <AdvProvider>
            <CurrentProductCardProvider>
              <AllRoutes />
            </CurrentProductCardProvider>
          </AdvProvider>
        </UserProvider>
      </BrowserRouter>

      <ToastContainer />
    </>
  );
}

export default App;
