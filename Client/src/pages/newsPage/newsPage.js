import { useState } from 'react';
import { Link } from 'react-router-dom'
import './newsPage.css'
import Cookies from "universal-cookie/es6";


let cookies = new Cookies()

const NewsPage = () => {
    const [news, setNews] = useState([]);
    const [id, setid]= useState(cookies.get("id_person"));

    const loadNews = async() => {
        await fetch('http://localhost:4000/gnews').then(res => res.json()).then(rows => setNews(rows));
    }

    function changeDateFormat(date) {
        let newDate = new Date(date);
        return newDate.toDateString();
    }

    function extracTextPiece(text) {
        if (text.length <= 150) {
            return text;
        } else {
            let newText = text.substring(0, 150);
            return newText;
        }
    }
    function logout (){
        cookies.remove('first_name');
         cookies.remove('last_name' );
         cookies.remove('email' );
         cookies.remove('id_person');
         cookies.remove('editor');
         cookies.remove('genre_id');
         cookies.remove('persontype_id');
         cookies.remove('university_id');
         cookies.remove('province_id');
         cookies.remove('points');
         cookies.remove('phone');
         cookies.remove('birth_day');
         cookies.remove('direction');
    }
    loadNews();
    return (
        <div className="App">
            <div className='container'>
                <div className='header'>
                {id==""
                ?<Link className="linkfilters" to={`/`}>
                    <img src='https://res.cloudinary.com/dy7ksc08o/image/upload/v1668335019/VisionAP/Captura_desde_2022-11-13_04-21-46_y8cgsx.png' alt='Logo de la página'></img>
                    </Link>
                    :<img src='https://res.cloudinary.com/dy7ksc08o/image/upload/v1668335019/VisionAP/Captura_desde_2022-11-13_04-21-46_y8cgsx.png' alt='Logo de la página'></img>}
                </div>
                <div className='navbar'>
                    
                    <ul> {id!=""&& <Link className="linkfilters" to={`/SeeInfo`}>
                        <li>
                            
                            Informacion Personal

                        </li></Link>}
                        <Link className="linkfilters" to={`/filterpage`}>
                            <li>
                                Filtros

                            </li></Link>
                            {id!=""&&<Link className="linkfilters" to={`/createNews`}>
                            <li>
                                Nueva noticia

                            </li></Link>}
                            {id!=""&&<Link className="linkfilters" to={`/storePage`}>
                            <li>
                                Tienda

                            </li></Link>}
                            {id!=""&&<Link className="linkfilters" to={`/news`}>
                            <li>
                                Estadisticas

                            </li></Link>}
                            {id!=""&&<Link className="linkfilters" to={`/`}>
                            <li onClick={logout}>
                                logout

                            </li></Link>}
                    </ul>
                </div>
                <div className='content'>

                    {news.map(eachNews => {
                        if (news.indexOf(eachNews) === 0) {
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
                                                <h2>{extracTextPiece(eachNews.news_body)}...</h2>
                                            </div>
                                        </div>

                                        <div className="bcfooter">
                                            <h3>Fecha de publicación: {changeDateFormat(eachNews.release_date)} </h3>
                                        </div>
                                    </div>
                                </Link>
                            )
                        } else {
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
