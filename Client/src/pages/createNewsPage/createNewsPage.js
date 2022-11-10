import { useState } from 'react';
import {Link} from 'react-router-dom'
import './createNewsPage.css'



const CreateNews = () => {
    const [newst, setNewst] = useState([]);

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

            <form className='formContainer'>
                
            <div className='inputnameCN'>
                <input type="text" placeholder='Titulo de la noticia'/>
            </div>

            <div className='itypeCN'>
                <label for="ntype">Tipo de Noticia:</label>
                <select name="ntype" id="type">
                {newst.map(eachNews =>{
                    return (
                        <option value={eachNews.newsType_id}>{eachNews.name}</option>
                    )
                })
                }
                </select>
            </div>

            <div className='inpfileCN'>
                    <input type="file" id="image"/> 
            </div>

            <div className='itxtareaCN'>
                    <textarea type="textarea" rows="10" cols="120" placeholder='Cuerpo de la noticia' />
            </div>

            <div className='ibtnCN'>    
                    <input type="submit"/>
            </div>
        </form>
        </div>

    )
}

export default CreateNews;
