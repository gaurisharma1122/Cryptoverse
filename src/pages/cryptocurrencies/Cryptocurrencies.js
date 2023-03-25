import React, { useEffect } from 'react'
import PageHeader from '../../components/pageHeader/PageHeader'
import { useGlobalContext } from '../../context/context'
import "./Cryptocurrencies.css"

const Cryptocurrencies = () => {

  const { state, fetchCryptocurrencies, setActiveNavLink } = useGlobalContext();

  useEffect(()=>{
    fetchCryptocurrencies()
    setActiveNavLink(2)
  }, []);

  console.log("cryptoData:", state.cryptoData);
  return (
    <div>
      <PageHeader title="Cryptocurrencies"/>
    </div>
  )
}

export default Cryptocurrencies
