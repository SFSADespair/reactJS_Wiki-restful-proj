import { data } from 'autoprefixer'
import React, { useState, useEffect} from 'react'
import Arts from './arts'

const Articles = () => {
    const [art, setArticles] = useState([])

    const getArticles = async () => {
        const res = await fetch('http://localhost:5000/articles')
        const articles = await res.json()
        setArticles(articles)
    }

    useEffect(() => {
        getArticles()
    }, [])
    return (
        <>
            <div>
                <h1>Definitions</h1>

            </div>
            {art.map(article => (
                <>
                    <Arts key={article._id} article={article.title} id={article._id} />
                    <hr />
                </>
            ))}
        </>
    )
}

export default Articles