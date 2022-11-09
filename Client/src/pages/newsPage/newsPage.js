import { useState } from 'react';
import {Link} from 'react-router-dom'
import './newsPage.css'



const NewsPage = ()=>{
    const [news, setNews] = useState([]);

    const loadNews = ()=>{
        fetch('http://localhost:4000/gnews').then(res => res.json()).then(rows => setNews(rows));
    }

    loadNews();
    return (
    <div className="App">
        <div className='container'>
            <div className='header'>
                header
            </div>
            <div className='navbar'>
                navbar
            </div>
            <div className='content'>
            {news.map(eachNews =>{
                    return (
                        <div className="card">
                        <div className="titulo">
                            <h1>{eachNews.title}</h1>

                        </div>
                        <div className="cuerpo">
                            <h1>{eachNews.photo}</h1>
                            <h2>{eachNews.news_body}</h2>
                            <h2>{eachNews.university_id}</h2>
                            <h2>{eachNews.newstype_id}</h2>
                        </div>

                        <div className="pie">
                            <h2>{eachNews.release_date} </h2>
                        </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    </div>
    )
}

export default NewsPage;
