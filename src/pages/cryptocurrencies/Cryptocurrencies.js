import React, { useEffect } from 'react'
import CryptocurrenciesCard from '../../components/cryptocurrenciesCard/CryptocurrenciesCard'
import PageHeader from '../../components/pageHeader/PageHeader'
import { useGlobalContext } from '../../context/context'
import "./Cryptocurrencies.css"

const Cryptocurrencies = () => {

  const { state, fetchCryptocurrencies, setActiveNavLink } = useGlobalContext();

  useEffect(()=>{
    fetchCryptocurrencies();
    setActiveNavLink(2);
  }, []);

  console.log(state.cryptocurrencies)

  return (
    <section className='cryptocurrencies'>
      <PageHeader title="Cryptocurrencies"/>
      <div className="container crypto-container">
        {
          state.cryptocurrencies.map((item)=>{
            return(
              <CryptocurrenciesCard key={item.uuid}
                name={item.name}
                rank={item.rank}
                iconUrl= {item.iconUrl}
                price={item.price}
                marketCap={item.marketCap}
                change={item.change}
                />
            )
          })
        }
      </div>
    </section>
  )
}

export default Cryptocurrencies
