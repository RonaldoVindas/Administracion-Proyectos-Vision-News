import {Link, useParams} from 'react-router-dom'
import { useState } from 'react';

const NewPage = ()=>{

    const [news, setNews] = useState({});

    const { new_id } = useParams(); 

    const loadNew = ()=>{
        fetch(`http://localhost:4000/gnewsID/${new_id}`).then(response => response.json()).then(news => setNews(news));
    }

    loadNew();

    return(
      <div className='container'>
      <div className='header'>
        header
      </div>
      <div className='navbar'>
        navbar
      </div>
      <div className='content'>
        <div className="card">
            <div className="titulo">
                <h1>{news.title}</h1>

            </div>
            <div className="cuerpo">
              
              <img src={news.photo} ></img>
                <h2>{news.news_body}</h2>
                <h2>{news.university_id}</h2>
                <h2>{news.newstype_id}</h2>
            </div>

            <div className="pie">
                <h2>{news.release_date} </h2>
            </div>
            </div>
      </div>
    </div>
    );
}

export default NewPage;