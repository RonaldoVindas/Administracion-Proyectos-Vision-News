import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './createNewsPage.css'
import {Form, Formik, Field} from 'formik'
import axios from 'axios';



const CreateNews = () => {
    const [newst, setNewst] = useState([]);
    const navigate = useNavigate();
    const loadTypes = ()=>{
        fetch('http://localhost:4000/ntypes').then(res => res.json()).then(rows => setNewst(rows));
    }

    loadTypes();

    return (

        <div className='containerCN'>
            <div className='headerCN'>
                header
            </div>

            <div className='titleCN'>
                <h1>Crear Noticia</h1>
            </div>
            <Formik className="formikform" initialValues={{
                title: "",
                newstype_id: "",
                photo: null,
                news_body: "",

            }}
            onSubmit={async (values) => {
                try {
                    const form = new FormData();

                    for (let key in values){
                        form.append(key, values[key]);
                    }
                    await axios.post('http://localhost:4000/cnew', form, {
                        headers:{
                            "Content-Type": "multipart/form-data", 
                        },
                    });

                    navigate('/news');

                } catch (error) {
                    console.log(error);
                }
            }}
            >
            {({handleChange, handleSubmit, setFieldValue}) =>(

                <Form className="formnews" onSubmit={handleSubmit}>
                <div className='inputnameCN'>
                    <input name ="title" type="text" placeholder='Titulo de la noticia' onChange={handleChange}/>
                </div>
    
                <div className='itypeCN'>
                    <label htmlFor="location">Tipo de Noticia: </label>
                    <Field
                        component="select"
                        id="location"
                        name="newstype_id"
                        multiple={false}
                    >
                    {newst.map(eachNews =>{
                        return (
                            <option value={eachNews.newsType_id}>{eachNews.name}</option>
                        )
                    })
                    }
                    </Field>
                </div>
    
                <div className='inpfileCN'>
                    <label>Foto: </label>
                        <input name ="photo" type="file" id="image" onChange={(e) => setFieldValue('photo',e.target.files[0])}/> 
                </div>
    
                <div className='itxtareaCN'>
                        <textarea name ="news_body" type="textarea" rows="10" cols="120" placeholder='Cuerpo de la noticia' onChange={handleChange} />
                </div>
    
                <div className='ibtnCN'>    
                        <button type="submit">Enviar</button>
                </div>
            </Form>

            )}
            </Formik>
        </div>

    )
}

export default CreateNews;
