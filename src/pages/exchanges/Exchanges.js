import React, { useEffect, useState } from 'react'
import ExchangesItem from '../../components/exchangesItem/ExchangesItem'
import PageHeader from '../../components/pageHeader/PageHeader'
import { useGlobalContext } from '../../context/context'
import { cryptocurrenciesHeader } from '../../headers'
import "./Exchanges.css"

const Exchanges = () => {
  const { state, setActiveNavLink, fetchCryptocurrencies } = useGlobalContext();
  const [coinExchanges, setCoinExchanges] = useState([]);

  const fetchCoinExchanges = (id) => {
    fetch(`https://coinranking1.p.rapidapi.com/coin/${id}/exchanges?referenceCurrencyUuid=yhjMzLPhuIDl&limit=50`, {
      method: 'GET',
      headers: cryptocurrenciesHeader
    })
      .then(response => response.json())
      .then(respData => {
        setCoinExchanges(respData.data.exchanges);
      });
  };

  useEffect(() => {
    setActiveNavLink(3);
    fetchCryptocurrencies();
  }, []);

  return (
    <section className='exchanges'>
      <PageHeader title="Exchanges" />
      <div className="container exchanges-container">
        <h2>Find exchanges where a specific coin can be traded.</h2>
        <form >
          <label>Select a Cryptocurrency: </label>
          <select onChange={(e) => fetchCoinExchanges(e.target.value)}>
            {
              state.cryptocurrencies.map((item) => {
                return <option key={item.uuid} value={item.uuid} name={item.name}>{item.name}</option>
              })
            }
          </select>
        </form>

        <div className="exchanges-info">
          <div className="exchanges-info-heading">
            <p>Name</p>
            <p>Number of Markets</p>
            <p>Price</p>
            <p></p>
          </div>
            {
                coinExchanges.map((item) => {
                  return (
                    <ExchangesItem key={item.uuid}
                      name={item.name}
                      iconUrl={item.iconUrl}
                      numberOfMarkets={item.numberOfMarkets}
                      price={item.price}
                      coinrankingUrl={item.coinrankingUrl}/>
                  )
                })
              }
          
        </div>
        
      </div>


    </section>
  )
}

export default Exchanges
