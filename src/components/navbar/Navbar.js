import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/cryptocurrency.png";
import {AiOutlineHome, AiOutlineFund, AiOutlineMoneyCollect, AiOutlineBulb} from "react-icons/ai";
import "./Navbar.css"
import { navLinks } from '../../data';


const Navbar = () => {
  return (
    < nav className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt={logo} />
        <h2>Cryptoverse</h2>
      </div>
      <div className="nav-menu">
        <ul>
          {
            navLinks.map((item)=>{
              return (
                <Link key={item.id} to={item.link}>
                  <li>
                    {item.icon}
                    <span>{item.title}</span>
                  </li>
                </Link>
              )
            })
          }
        </ul>
      </div>
      
    </nav>
  )
}

export default Navbar
