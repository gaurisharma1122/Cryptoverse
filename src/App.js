import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Cryptocurrencies from "./pages/cryptocurrencies/Cryptocurrencies";
import Exchanges from "./pages/exchanges/Exchanges";
import Home from "./pages/home/Home";
import News from "./pages/news/News";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="routes">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/news" element={<News />} />
        </Routes>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
