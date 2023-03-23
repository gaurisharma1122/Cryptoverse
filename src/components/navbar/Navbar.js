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
          <li><Link to="/"><AiOutlineHome/> <span>Home</span></Link></li>
          <li><Link to="/cryptocurrencies"><AiOutlineFund/> <span>Cryptocurrencies</span></Link></li>
          <li><Link to="/exchanges"><AiOutlineMoneyCollect/> <span>Exchanges</span></Link></li>
          <li><Link to="/news"><AiOutlineBulb/> <span>News</span></Link></li>
        </ul>
      </div>
      
    </nav>
  )
}

export default Navbar
