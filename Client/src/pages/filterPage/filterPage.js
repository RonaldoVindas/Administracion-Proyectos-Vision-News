
import {Link} from 'react-router-dom'
import './filterPage.css'
const  FilterPages = ()=>{

return (
<div className="App">
        <div className='container2'>
            <div className='header2'>
                header
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
                             <ul>  <Link to={`/filternewsPage/filterNewsUniversity_id/${1}`}>
                                    <li>
                                        UCR
                                        
                                    </li></Link>
                                    <Link to={`/filternewsPage/filterNewsUniversity_id/${0}`}>
                                    <li>
                                        TEC
                                        
                                    </li></Link>
                                    <Link to={`/filternewsPage/filterNewsUniversity_id/${2}`}>
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
                             <ul>  <Link to={`/filternewsPage/filterNewstype_id/${3}`}>
                                    <li>
                                        Titular
                                        
                                    </li></Link>
                                    <Link to={`/filternewsPage/filterNewstype_id/${4}`}>
                                    <li> Entrevista</li></Link>
                                    <Link to={`/filternewsPage/filterNewstype_id/${5}`}>
                                    <li>Salud</li></Link>
                                    <Link to={`/filternewsPage/filterNewstype_id/${6}`}>
                                    <li>Comunal</li></Link>
                                    <Link to={`/filternewsPage/filterNewstype_id/${7}`}>
                                    <li>Anuncio</li></Link>
                                    <Link to={`/filternewsPage/filterNewstype_id/${8}`}>
                                    <li>Evento</li></Link>
                                    <Link to={`/filternewsPage/filterNewstype_id/${9}`}>
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
