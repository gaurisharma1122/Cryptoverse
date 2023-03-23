import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/cryptocurrency.png";
import {AiOutlineHome, AiOutlineFund, AiOutlineMoneyCollect, AiOutlineBulb} from "react-icons/ai";
import "./Navbar.css"


const Navbar = () => {
  return (
    < nav className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt={logo} />
        <h2>Cryptoverse</h2>
      </div>
      <div className="nav-menu">
        <ul>
          <Link to="/"><li><AiOutlineHome/> <span>Home</span></li></Link>
          <Link to="/cryptocurrencies"><li><AiOutlineFund/> <span>Cryptocurrencies</span></li></Link>
          <Link to="/exchanges"><li><AiOutlineMoneyCollect/> <span>Exchanges</span></li></Link>
          <Link to="/news"><li><AiOutlineBulb/> <span>News</span></li></Link>
        </ul>
      </div>
      
    </nav>
  )
}

export default Navbar
