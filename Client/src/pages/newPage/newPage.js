import { Link, useParams } from 'react-router-dom'
import { useState } from 'react';
import { Form, Formik } from 'formik'
import axios from 'axios';
import './newPage.css'

const NewPage = () => {

  const [news, setNews] = useState({});
  const [comments, setComments] = useState([]);
  const [calification, setCalifications] = useState([]);

  const { new_id } = useParams();

  const loadNew = () => {
    fetch(`http://localhost:4000/gnewsID/${new_id}`).then(response => response.json()).then(news => setNews(news));
  }

  const loadComments = () => {
    fetch(`http://localhost:4000/gnewsComments/${new_id}`).then(response => response.json()).then(comments => setComments(comments));
  }

  const loadCalifications = () => {
    fetch(`http://localhost:4000/gnewsCalification/${new_id}`).then(response => response.json()).then(calification => setCalifications(calification));
  }

  function getCalification() {
    let newCalification = 0;
    calification.map(eachComment => {
      newCalification = newCalification + eachComment.value;
    })
    newCalification = newCalification / calification.length;
    return newCalification;
  }

  loadNew();
  loadComments();
  loadCalifications();

  return (
    <div className='container'>

      <div className='header'>
        <Link className="linkfilters" to={`/news`}>
          <img src='https://res.cloudinary.com/dy7ksc08o/image/upload/v1668335019/VisionAP/Captura_desde_2022-11-13_04-21-46_y8cgsx.png' alt='Logo de la página'></img>
        </Link>
      </div>

      <div className='navbar'>
        <div className='newviewnavbar'>
          <div className='navbarNewView'>
            <div className='porfileautorphoto'>
              <img className='PAphoto' src={news.pphoto}></img>
            </div>
            <div className='autorNameNewView'>
              <p>{news.first_name} {news.last_name} </p>
            </div>
            <div className='autorEmailNewView'>
              <p>{news.email}</p>
            </div>
            <div className='autorTypeNewView'>
              <p>{news.persontype_name} {news.acronym}</p>
            </div>
            <div className='releaseDateNewView'>
              <p>Publicado el {news.release_date}</p>
            </div>
            <div className='autorCalificatiónNewView'>
              <p>calificación: {news.average_calification}</p>
            </div>
          </div>
        </div>
      </div>

      <div className='contentNewView'>

        <div className="cardNewView">

          <div className="imgNewView">
            <img className="postimg" src={news.photo} alt={news.title} />
          </div>

          <div className="titleNewView">
            <h1>{news.title}</h1>
          </div>

          <div className="bodyNewView">
            <h2>{news.news_body}</h2>
          </div>

          <div className="calificationAndLikeBarNewView">
            <div className='cali'>
              <h2>Calificación: {getCalification()} de 5 estrellas</h2>
              <button type="">Calificar</button>
            </div>
            <div className='likebutton'>
              <button type="">Like</button>
            </div>
          </div>

          <div className="commentsNewView">
            <div className='innercommentsNewView'>


              <b>Sección de comentarios</b>
              <div className='commentsForm'>
                <Formik
                  initialValues={{
                    newsId: news.news_id,
                    body: "",
                    user_id: "",

                  }}

                  onSubmit={async (values) => {
                    try {
                      await axios.post('http://localhost:4000/crtcomment', values);
                    } catch (error) {
                      console.log(error);
                    }
                  }}
                >
                  {({ handleChange, handleSubmit }) => (
                    <Form className="commentFormikForm" onSubmit={handleSubmit}>
                      <input name="body" type="text" placeholder='Titulo de la noticia' onChange={handleChange} />
                      <button type="submit">Comentar</button>
                    </Form>
                  )}
                </Formik>
              </div>

              <div className='commentsGroup'>
                {comments.map(eachComment => {
                  return (
                    <div className='commentBody'>
                      <div className='imgComment'>
                        <img className='comPhoto' src={eachComment.photo}></img>
                      </div>
                      <div className='commentContent'>
                        <p>{eachComment.body}</p>
                      </div>
                    </div>
                  )
                })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPage;