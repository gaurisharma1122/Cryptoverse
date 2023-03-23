import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='footer'>
            <h4>Cryptoverse <br /> All rights reserved</h4>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/cryptocurrencies"><li>Cryptocurrencies</li></Link>
                <Link to="/exchanges"><li>Exchanges</li></Link>
                <Link to="/news"><li>News</li></Link>
            </ul>
        </footer>
    )
}

export default Footer
