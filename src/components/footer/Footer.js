import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import { navLinks } from '../../data'

const Footer = () => {
    return (
        <footer className='footer'>
            <h4>Cryptoverse <br /> All rights reserved</h4>
            <ul>
                {
                    navLinks.map((item)=>{
                        return (
                            <Link key={item.id} to={item.link}>
                                <li>{item.title}</li>
                            </Link>
                        )
                    })
                }
            </ul>
        </footer>
    )
}

export default Footer
