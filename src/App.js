import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Cryptocurrencies from "./pages/cryptocurrencies/Cryptocurrencies";
import Exchanges from "./pages/exchanges/Exchanges";
import Home from "./pages/home/Home";
import News from "./pages/news/News";
import { useGlobalContext } from "./context/context";
import CryptoDetails from "./pages/cryptoDetails/CryptoDetails";

function App() {
  const { setActiveNavLink }= useGlobalContext();
  return (
    <div className="app">
      <Navbar />
      <div className="routes">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />}/>
          <Route exact path="/exchanges" element={<Exchanges />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/cryptodetails/:coinId" element={<CryptoDetails/>}/>
        </Routes>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
