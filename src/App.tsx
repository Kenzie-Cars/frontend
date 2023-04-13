import { Footer } from "./components/Footer";
import { Advertise } from "./pages/Advertise";
import { HomePage } from "./pages/HomePage";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Advertise/>
      <Footer />
    </>
  );
}

export default App;
