import './filternewsPage.css';
import {Link, useParams} from 'react-router-dom';
import { useState } from 'react';


const FilternewsPage = ()=>{
    const [news, setNews] = useState([]);
    console.log(news)

    const { filtro,f_id } = useParams();
    console.log(filtro,f_id)

    
    const loadNews = ()=>{
        fetch(`http://localhost:4000/${filtro}/${f_id}`).then(res => res.json()).then(rows => setNews(rows));
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
                        <Link to={`/new/${eachNews.news_id}`}>
                        <div className="card">
                            <div className="title">
                                <h1>{eachNews.title}</h1>

                            </div>
                            <div className="body">
                                <div>
                                    <img src={eachNews.photo} alt={eachNews.title} />
                                </div>
                                <div>
                                    <h2>{eachNews.acronym}</h2>
                                    <h2>{eachNews.name}</h2>
                                </div>
                            </div>

                            <div className="footer">
                                <h2>{eachNews.release_date} </h2>
                            </div>
                        </div>
                        </Link>
                    )
                })
                }
            </div>
        </div>
    </div>
    )
}

export default FilternewsPage;
