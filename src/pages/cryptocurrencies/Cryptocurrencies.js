import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CryptocurrenciesCard from '../../components/cryptocurrenciesCard/CryptocurrenciesCard'
import PageHeader from '../../components/pageHeader/PageHeader'
import { useGlobalContext } from '../../context/context'
import Loader from '../../components/loader/Loader'
import "./Cryptocurrencies.css"

const Cryptocurrencies = () => {

  const { state, fetchCryptocurrencies, setActiveNavLink } = useGlobalContext();
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    fetchCryptocurrencies();
    setIsLoading(false);
    setActiveNavLink(2);
  }, []);

  if (isLoading === true) {
    return <Loader />
  }
  else {
    return (
      <section className='cryptocurrencies'>
        <PageHeader title="Cryptocurrencies" />
        <div className="container crypto-container">
          {
            state.cryptocurrencies.map((item) => {
              return (
                <CryptocurrenciesCard key={item.uuid}
                  uuid={item.uuid}
                  name={item.name}
                  rank={item.rank}
                  iconUrl={item.iconUrl}
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
}

export default Cryptocurrencies
