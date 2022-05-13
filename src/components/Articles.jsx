import { data } from 'autoprefixer'
import React, { useState, useEffect} from 'react'
import Art from './art'

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
                <Art key={article._id} article={article.title} />
            ))}
        </>
    )
}

export default Articles