import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import PageHeader from '../../components/pageHeader/PageHeader';
import { useGlobalContext } from '../../context/context';
import Cryptocurrencies from '../cryptocurrencies/Cryptocurrencies';
import CryptocurrenciesCard from '../../components/cryptocurrenciesCard/CryptocurrenciesCard';
import "./Home.css";
import millify from 'millify';

const Home = () => {
  const { state, setActiveNavLink, fetchCryptocurrencies } = useGlobalContext();

  useEffect(() => {
    fetchCryptocurrencies();
    setActiveNavLink(1);
  }, []);

  return (
    <section className='home'>
      <PageHeader title="Home" />
      
      <div className="container">

        <div className="global-crypto-stats">
          <h2>Global Crypto Stats</h2>
          <div className="home-subcontent global-crypto-subcontent">
            <div className="global-crypto-item">
              <h5>Total Cryptocurrencies</h5>
              <p>{state.cryptoData.totalCoins}</p>
            </div>
            <div className="global-crypto-item">
              <h5>Total Markets</h5>
              <p>{millify(state.cryptoData.totalMarkets)}</p>
            </div>
            <div className="global-crypto-item">
              <h5>Total Exchanges</h5>
              <p>{state.cryptoData.totalExchanges}</p>
            </div>
            <div className="global-crypto-item">
              <h5>Total Market Cap</h5>
              <p>{millify(state.cryptoData.totalMarketCap)}</p>
            </div>
            <div className="global-crypto-item">
              <h5>Total 24h Volume</h5>
              <p>{millify(state.cryptoData.total24hVolume)}</p>
            </div>
          </div>
        </div>

        <div className="top-crypto">
          <div className="home-subtitle">
            <h2>Top 10 Cryptocurrencies in the world</h2>
            <h3><Link to="/cryptocurrencies">Show More</Link></h3>
          </div>
          <div className="home-subcontent top-crypto-subcontent">
            {
              state.cryptocurrencies.slice(0, 10).map((item) => {
                return (
                  <CryptocurrenciesCard key={item.uuid}
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
        </div>

        <div className="latest-crypto-news">
          <div className="home-subtitle">
            <h2>Latest Crypto News</h2>
            <h3><Link to="/news">Show More</Link></h3>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Home
