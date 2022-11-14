import './SeeInfo.css';
import React, {useState, useEffect}from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
function SeeInfo(){
  const url = "http://localhost:4000";
  
  const getGenders = async () =>{
    await axios.get(url + "/genders")
                    .then(response => {
                      setGenders(response.data[0]);
                    }).catch(err => {
                      console.log(err)
                    });
  };

  const getUniversities = async () =>{
    await axios.get(url + "/universities")
                    .then(response => {
                      setUniversities(response.data[0]);
                    }).catch(err => {
                      console.log(err)
                    });
  };

  const getProvinces = async () =>{
    await axios.get(url + "/provinces")
                    .then(response => {
                      setProvinces(response.data[0]);
                    }).catch(err => {
                      console.log(err)
                    });
  };

  const [genders, setGenders] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [provinces, setProvinces] = useState([]);

  useEffect(() => {
    getGenders();
    getUniversities();
    // getProvinces();
  }, []);

  const[info, setInfo]=useState({
    name: cookies.get('first_name'),
    lastName: cookies.get('last_name'),
    email: cookies.get('email'),
    dni: cookies.get('id_person'),
    editor: cookies.get('editor'),
    gender: cookies.get('gender_id'),
    personType: cookies.get('personType_id'),
    univesity: cookies.get('university_id'),
    province: cookies.get('province_id'),
    points: cookies.get('points'),
    phone: cookies.get('phone'),
    birthDay: cookies.get('birth_day'),
    direction: cookies.get('direction'),
    photo: cookies.get('photo')
  });

  // <input name ="photo" type="file" id="image" onChange={(e) => setFieldValue('photo',e.target.files[0])}/> 

  function getGender(){
    if(genders.length !== 0){
      const result = genders.find(({gender_id}) => gender_id == info.gender);
    
      return result.description;
      

    }
    
    return '';
  }

  function getUniversity(){
    if(universities.length !== 0){
      const result = universities.find(({university_id}) => university_id == info.univesity);
      console.log(result);
      return `${result.name}(${result.acronym})`;
    }
    return '';
  }

  return (
    <div className="containerSee">
        <div className='nav'>
                <Link className="linkfilters" to={`/news`}>
                    <img src='https://res.cloudinary.com/dy7ksc08o/image/upload/v1668335019/VisionAP/Captura_desde_2022-11-13_04-21-46_y8cgsx.png' alt='Logo de la página'></img>
                    </Link>
                </div>

        <div className='top'>
          <label className="styleFontTitle">Perfil</label>
          <img className="imageSee" src={info.photo}/>
          <div className="name">
            <label className="styleFont">{info.name} {info.lastName}</label>
            <br/>
            {info.editor==0
            ?<label className="styleFont2">Autor</label>:<label className="styleFont2"></label> }
          </div>

          <div className = "point">
            <label className="styleFont">Puntos</label>
            <label className="styleFont pos">{info.points}</label>
          </div>

          <div className = "buttonDiv">
            <Link to = "/UpdateInfo"><button className="button button1">EDITAR PERFIL</button></Link>
            <br/>
            <button className="button button2">NOTICIA FAVORITAS</button>
            <br/>
            <Link to = "/personCart"><button className="button button3">PRODUCTOS CANJEADOS</button></Link>
          </div>
          

        </div>

        <div className='medium'>
          <div className="rightTop">
            <i class="fa-solid fa-person-half-dress"></i>
            <label className="styleFont mediumPos">{getGender()}</label>
          </div>

          <div className="rightMedium">
            <i class="fa-solid fa-building-columns"></i>
            <label className="styleFont mediumPos">{getUniversity()}</label>
          </div>

          <div className="rightBottom">
            <i class="fa-solid fa-location-pin"></i>
            <label className="styleFont mediumPos">{info.direction}</label>
          </div>


          <div className="leftTop informationPos">
            <i class="fa-solid fa-id-card"></i>
            <label className="styleFont mediumPos">{info.dni}</label>
          </div>
          <div className="leftMedium informationPos">
            <i class="fa-solid fa-square-phone"></i>
            <label className="styleFont mediumPos">{info.phone}</label>
          </div>
          <div className="leftBottom informationPos">
            <i class="fa-solid fa-envelope"></i>
            <label className="styleFont mediumPos">{info.email}</label>
          </div>
        </div>

        <div className="bottom">
          <i class="fa-solid fa-left-long posRight"></i>
        </div>
    </div>
  );
}

export default SeeInfo;
