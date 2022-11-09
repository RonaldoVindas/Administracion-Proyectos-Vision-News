import './SeeInfo.css';
import React, {useState, useEffect}from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

function SeeInfo(){

  const[info, setInfo]=useState({
    name: "Ford",
    lastName: "Mustang",
    secondSurname: "red",
    points: 0,
    dni: 117870341,
    phone: 86784841,
    email: "h@gmail.com",
    gender: "Hombre",
    Univesity: "TEC",
    Direccion: "SBD"
  });

  const url = "http://localhost:4000/";

  const [datos, setDatos] = useState(null);

  

  return (
    <div className="general">
        <nav className="nav">Barra general</nav>

        <div className='top'>
          <label className="styleFontTitle">Perfil</label>
          <i className="fa-solid fa-user imageP"></i>
          <div className="name">
            <label className="styleFont">{info.name} {info.lastName} {info.secondSurname}</label>
            <br/>
            <label className="styleFont2">Autor</label>
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
            <button className="button button3">PRODUCTOS CANJEADOS</button>
          </div>
          

        </div>

        <div className='medium'>
          <div className="rightTop">
            <i class="fa-solid fa-person-half-dress"></i>
            <label className="styleFont mediumPos">{info.gender}</label>
          </div>

          <div className="rightMedium">
            <i class="fa-solid fa-building-columns"></i>
            <label className="styleFont mediumPos">{info.Univesity}</label>
          </div>

          <div className="rightBottom">
            <i class="fa-solid fa-location-pin"></i>
            <label className="styleFont mediumPos">{info.Direccion}</label>
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
