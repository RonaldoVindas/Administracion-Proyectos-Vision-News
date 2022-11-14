
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';




const FilternewsPage = () => {
    const [news, setNews] = useState([]);

    const { filtro, f_id } = useParams();



    const loadNews = () => {
        fetch(`http://localhost:4000/${filtro}/${f_id}`).then(res => res.json()).then(rows => setNews(rows));
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

    loadNews();
    loadNews();
    return (
        <div className="App">
            <div className='container'>
                <div className='header'>
                    <Link to={`/news`}>
                        <img src='https://res.cloudinary.com/dy7ksc08o/image/upload/v1668335019/VisionAP/Captura_desde_2022-11-13_04-21-46_y8cgsx.png' alt='Logo de la página'></img>
                    </Link>
                </div>
                <div className='navbar'>
                    navbar
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
export default FilternewsPage;
