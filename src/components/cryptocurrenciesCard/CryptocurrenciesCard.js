import React from 'react'
import "./CryptocurrenciesCard.css"
import millify from 'millify'

const CryptocurrenciesCard = ({ name, rank, iconUrl, price, marketCap, change }) => {
  return (
    <article className='crypto-card'>
        <div className="crypto-card-title">
            <h3>{rank}. {name}</h3>
            <img src={iconUrl} alt={name} />
        </div>
        <div className="crypto-card-info">
            <p>Price: {millify(price)}</p>
            <p>Market Cap: {millify(marketCap)}</p>
            <p>Daily Change: <span className={change>0?'profit':'loss'}>{millify(change)}%</span></p>
        </div>  
    </article>
  )
}

export default CryptocurrenciesCard
