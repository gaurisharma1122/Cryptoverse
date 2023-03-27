import React from 'react'
import "./ExchangesItem.css"
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import millify from 'millify'

const ExchangesItem = ({ name, iconUrl, numberOfMarkets, price, coinrankingUrl }) => {
  return (
    <article className='exchanges-item'>
      <div className="exchanges-item-name">
        <img src={iconUrl} alt={name} />
        <p>{name}</p>
      </div>
      <p>{numberOfMarkets}</p>
      <p>{millify(price)}</p>
      <a href={coinrankingUrl} target="_blank">View More <BsFillArrowRightCircleFill className='icon'/></a>
    </article>
  )
}

export default ExchangesItem
