import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { Navbar } from "./components/Navbar";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
