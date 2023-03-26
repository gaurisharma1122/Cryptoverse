import moment from 'moment/moment'
import React from 'react'
import "./NewsItem.css"

const demoImage = 'https://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg'

const NewsItem = ({ url, name, image, description, provider, datePublished }) => {
  return (
    <article className='news-item'>
      <a href={url} target="_blank">
        <div className='news-item-container'>
          <div className="news-item-title">
            <h3>{name}</h3>
            <img src={image?.thumbnail?.contentUrl || demoImage} alt="image" />
          </div>
          <div className="news-item-info">
            <p>{description}</p>
          </div>
          <div className="news-item-footer">
            <h5>{provider[0]?.name}</h5>
            <p>{moment(datePublished).startOf('ss').fromNow()}</p>
          </div>
        </div>
      </a>
    </article>
  )
}

export default NewsItem
