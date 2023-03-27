import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/cryptocurrency.png";
import "./Navbar.css"
import { navLinks } from '../../data';
import { useGlobalContext } from '../../context/context';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";


const Navbar = () => {

  const { state, setActiveNavLink, setOpenNavbar} = useGlobalContext();

  return (
    < nav className='navbar'>
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt={logo} />
          <h2>Cryptoverse</h2>
        </div>
        <div className="nav-toggle">
          {
            state.openNavbar?
            <AiOutlineCloseCircle onClick={()=> setOpenNavbar(!state.openNavbar)}/>:
            <GiHamburgerMenu onClick={()=> setOpenNavbar(!state.openNavbar)}/>
          }
          
        </div>
        <div className={state.openNavbar?'nav-menu active-menu':'nav-menu'}>
          <ul>
            {
              navLinks.map((item) => {
                return (
                  <Link key={item.id} to={item.link}>
                    <li onClick={() => setActiveNavLink(item.id)}
                      className={item.id === state.activeNavLink ? 'active' : undefined}>
                      {item.icon}
                      <span>{item.title}</span>
                    </li>
                  </Link>
                )
              })
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
