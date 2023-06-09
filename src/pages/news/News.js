import React, { useEffect, useState } from 'react'
import Loader from '../../components/loader/Loader'
import NewsItem from '../../components/newsItem/NewsItem'
import PageHeader from '../../components/pageHeader/PageHeader'
import { useGlobalContext } from '../../context/context'
import "./News.css"

const News = () => {
  const { state, setActiveNavLink, fetchNews, setIsLoading } = useGlobalContext();

  useEffect(() => {
    setIsLoading(true);
    fetchNews();
    setActiveNavLink(4);
  }, []);

  if (state.isLoading === true) {
    return <Loader/>
  }
  else {
    return (
      <section className='news'>
        <PageHeader title="News" />
        <div className="container news-container">
          {
            state.news.map((item, index) => {
              return (
                <NewsItem key={index}
                  url={item.url}
                  name={item.name}
                  image={item.image}
                  description={item.description}
                  provider={item.provider}
                  datePublished={item.datePublished}
                />
              )
            })
          }
        </div>
      </section>
    )
  }
}

export default News
