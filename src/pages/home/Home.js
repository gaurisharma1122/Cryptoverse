import React, { useEffect } from 'react'
import PageHeader from '../../components/pageHeader/PageHeader';
import { useGlobalContext } from '../../context/context';
import "./Home.css";

const Home = () => {
  const { setActiveNavLink }= useGlobalContext();

  useEffect(()=>{
    setActiveNavLink(1);
  }, []);
  
  return (
    <div>
      <PageHeader title="Home"/>
    </div>
  )
}

export default Home
