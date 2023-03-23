import React from 'react'
import { Link } from 'react-router-dom'
import "./PageHeader.css"

const PageHeader = ({ title }) => {
    return (
        <header className='pageheader'>
            {
                title === "Home" ?
                    <h3>Home</h3> :
                    <h3>
                        <Link to="/">Home </Link>
                        / {title}
                    </h3>
            }
            
        </header>
    )
}

export default PageHeader
