import React, { useEffect } from 'react'
import PageHeader from '../../components/pageHeader/PageHeader'
import { useGlobalContext } from '../../context/context'
import "./News.css"

const News = () => {
  const { setActiveNavLink }= useGlobalContext();

  useEffect(()=>{
    setActiveNavLink(4);
  }, []);
  
  return (
    <div>
      <PageHeader title="News"/>
    </div>
  )
}

export default News
