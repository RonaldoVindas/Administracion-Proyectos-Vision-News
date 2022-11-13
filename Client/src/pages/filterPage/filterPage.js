
import {Link} from 'react-router-dom'
import './filterPage.css'
const  FilterPages = ()=>{

return (
<div className="App">
        <div className='container2'>
            <div className='header2'>
            <div className='header'>
                <img src='https://res.cloudinary.com/dy7ksc08o/image/upload/v1668335019/VisionAP/Captura_desde_2022-11-13_04-21-46_y8cgsx.png' alt='Logo de la página'></img>
            </div>
            </div>
         
            <div className='content2'>
            
                        <div
                        > <h1> Flitros:</h1>
                        </div>

                        <div className="card2">
                            <div className="Autor">
                            <div className="title">
                                <h1>Autores:</h1>
                                <ul>
                                    <li>
                                        Mejor Valorados
                                        
                                    </li>
                                    
                                </ul>
                             
                             </div>
                             <div className="body">
                                 
                                 
                             </div>
                            </div>
                            <div className="Pdate">
                            <div className="title">
                                <h1>Fecha:</h1>
                             
                             </div>
                             <div className="body">
                                <ul>
                                    <li>
                                        Esta semana
                                        
                                    </li>
                                    <li> Este mes </li>
                                </ul>
                                 
                                 
                             </div>
                                

                            </div>
                            <div className="university">
                            <div className="title">
                                <h1>Universidad:</h1>
                             
                             </div>
                             <div className="body">
                             <ul>  <Link className="linkfilters" to={`/filternewsPage/filterNewsUniversity_id/${1}`}>
                                    <li>
                                        UCR
                                        
                                    </li></Link>
                                    <Link className="linkfilters" to={`/filternewsPage/filterNewsUniversity_id/${0}`}>
                                    <li>
                                        TEC
                                        
                                    </li></Link>
                                    <Link className="linkfilters" to={`/filternewsPage/filterNewsUniversity_id/${2}`}>
                                    <li>
                                        UNA
                                        
                                    </li></Link>
                                </ul>
                                 
                                 
                             </div>
                            </div>
                            <div className="tags">
                            <div className="title">
                                <h1>Etiquetas:</h1>
                             
                             </div>
                             <div className="body">
                             <ul>  <Link className="linkfilters" to={`/filternewsPage/filterNewstype_id/${3}`}>
                                    <li>
                                        Titular
                                        
                                    </li></Link>
                                    <Link className="linkfilters" to={`/filternewsPage/filterNewstype_id/${4}`}>
                                    <li> Entrevista</li></Link>
                                    <Link className="linkfilters" to={`/filternewsPage/filterNewstype_id/${5}`}>
                                    <li>Salud</li></Link>
                                    <Link className="linkfilters" to={`/filternewsPage/filterNewstype_id/${6}`}>
                                    <li>Comunal</li></Link>
                                    <Link className="linkfilters" to={`/filternewsPage/filterNewstype_id/${7}`}>
                                    <li>Anuncio</li></Link>
                                    <Link className="linkfilters" to={`/filternewsPage/filterNewstype_id/${8}`}>
                                    <li>Evento</li></Link>
                                    <Link className="linkfilters" to={`/filternewsPage/filterNewstype_id/${9}`}>
                                    <li>Deportes</li></Link>
                                </ul>
                                 
                             </div>
                            </div>
                           
                        </div>
                       
               
            </div>
        </div>
    </div>)


}
 

export default FilterPages;
