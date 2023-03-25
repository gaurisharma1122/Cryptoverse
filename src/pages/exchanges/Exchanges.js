import React, { useEffect } from 'react'
import PageHeader from '../../components/pageHeader/PageHeader'
import { useGlobalContext } from '../../context/context'
import "./Exchanges.css"

const Exchanges = () => {
  const { setActiveNavLink }= useGlobalContext();

  useEffect(()=>{
    setActiveNavLink(3);
  }, []);
  
  return (
    <div>
      <PageHeader title="Exchanges"/>
    </div>
  )
}

export default Exchanges
