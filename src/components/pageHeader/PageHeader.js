import React from 'react'
import "./PageHeader.css"

const PageHeader = ({ title }) => {
  return (
    <header className='pageheader'> 
      <h3>{title}</h3>
    </header>
  )
}

export default PageHeader
