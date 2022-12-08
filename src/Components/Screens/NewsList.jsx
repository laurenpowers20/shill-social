import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem.jsx'

const NewsList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
          const response = await axios.get(`https://newsapi.org/v2/everything?q=finance&apiKey=695ae6cb7de647c1801f4549a8178faf`)
            setArticles(response.data.articles)
            console.log(response)
        }

        getArticles()
    }, [])
    return (
        <div>
            {articles.map(article => {
                return(
                    <NewsItem 
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage} 
                    />
                )
            })}
        </div>
    )
}

export default NewsList
