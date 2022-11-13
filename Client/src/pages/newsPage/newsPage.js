import { useState } from 'react';
import {Link} from 'react-router-dom'
import './newsPage.css'



const NewsPage = ()=>{
    const [news, setNews] = useState([]);

    const loadNews = ()=>{
        fetch('http://localhost:4000/gnews').then(res => res.json()).then(rows => setNews(rows));
    }

    function changeDateFormat(date){
        let newDate = new Date(date);
        return newDate.toDateString();    
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
                if (news.indexOf(eachNews)== 0){
                    return (
                        <Link className='cardsLink' to={`/new/${eachNews.news_id}`}>
                        <div className="bcard">
                            <div className='bcimageContainer'>
                                    <img src={eachNews.photo} alt={eachNews.title} />
                            </div>
                            
                            <div className="bctitle">
                                <div className='bctitleContainer'>
                                    <h2>{eachNews.title}</h2>
                                </div>
                                <div className='bctagsContainer'>
                                    <h3 className='bcacronym'>{eachNews.acronym}</h3>
                                    <h3 className='bctgs'>{eachNews.name}</h3>
                                </div>
                            </div>

                            <div className="bcbody">
                                <div className='bctextContainer'>
                                    <h2>Cuerpo</h2>
                                </div>
                            </div>

                            <div className="bcfooter">
                                <h3>Fecha de publicación: {changeDateFormat(eachNews.release_date)} </h3>
                            </div>
                        </div>
                        </Link>
                    )
                }else{
                    return (
                        <Link className='cardsLink' to={`/new/${eachNews.news_id}`}>
                        <div className="card">
                            <div className="title">
                                <h2>{eachNews.title}</h2>
                            </div>
                            <div className="body">
                                <div className='imageContainer'>
                                    <img src={eachNews.photo} alt={eachNews.title} />
                                </div>
                                <div className='tagsContainer'>
                                    <h3 className='acronym'>{eachNews.acronym}</h3>
                                    <h3 className='tgs'>{eachNews.name}</h3>
                                </div>
                            </div>

                            <div className="footer">
                                <h3>Fecha de publicación: {changeDateFormat(eachNews.release_date)} </h3>
                            </div>
                        </div>
                        </Link>
                    )
                }
                })
                }
            </div>
        </div>
    </div>
    )
}

export default NewsPage;
