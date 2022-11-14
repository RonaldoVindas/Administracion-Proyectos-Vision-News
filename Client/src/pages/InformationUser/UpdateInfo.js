import './UpdateInfo.css';
import React, {useState, useEffect}from 'react';
import {useNavigate } from 'react-router-dom'
import axios from "axios";
import {Link} from "react-router-dom";
import swal from "sweetalert";
import Cookies from "universal-cookie";

const cookies = new Cookies();
function App() {

  const url = "http://localhost:4000";
  const navigate = useNavigate(); 


  const getGenders = async () =>{
    await axios.get(url + "/genders")
                    .then(response => {
                      setGenders(response.data[0])
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
    getProvinces();
  }, []);

  async function updateInfo() {
    const values = {
      
      email: info.email,
      first_name: info.name,
      last_name: info.lastName,
      direction: info.direction,
      phone: info.phone,
      gender_id: info.gender,
      province_id: info.province,
      university_id: info.university

  }
    await axios.put(`http://localhost:4000/person/${info.dni}`, values)
        .then(response => {
            if(response.status === 200){
                swal("Informacion Actualizada","" ,"success").then((value) => {
                  cookies.set('first_name',       info.name,       {path: "/"});
                  cookies.set('last_name',       info.lastName  ,       {path: "/"});
                  cookies.set('email',        info.email,       {path: "/"});
                  cookies.set('genre_id',        info.gender ,        {path: "/"});
                  cookies.set('university_id',         info.university,        {path: "/"});
                  cookies.set('province_id',         info.province,        {path: "/"});
                  cookies.set('phone',         info.phone,        {path: "/"});
                  cookies.set('direction',         info.direction,        {path: "/"});
                    
                })
            }else{
                swal("Error al actualizar","" ,"warning")
            }
        }).catch(error =>{
            swal("Error al actualizar","" ,"warning")
            console.log(error);
            })
}
  //Informacion del usuario
  const[info, setInfo]=useState({
    name: cookies.get('first_name'),
    lastName: cookies.get('last_name'),
    email: cookies.get('email'),
    dni: cookies.get('id_person'),
    editor: cookies.get('editor'),
    gender: cookies.get('genre_id'),
    personType: cookies.get('personType_id'),
    university: cookies.get('university_id'),
    province: cookies.get('province_id'),
    points: cookies.get('points'),
    phone: cookies.get('phone'),
    birthDay: cookies.get('birth_day'),
    direction: cookies.get('direction'),
    photo: cookies.get('photo')
  });

  const selectGender = (event) => {
    const value = event.target.value;
    setInfo({... info,
            gender: Number(value)});
  };

  const selectUniversity = (event) => {
    const value = event.target.value;
    setInfo({... info,
      university: Number(value)});
  };

  function guardar(){
    //Codigo para actualizar
    updateInfo();
    navigate("/news");

  }

  const changeHandler = (event) => {
    setInfo({ ...info, [event.target.name]: event.target.value });
  }


  return (
    <div className="containerUpdate">
        <div className='nav'>
                <Link className="linkfilters" to={`/news`}>
                    <img src='https://res.cloudinary.com/dy7ksc08o/image/upload/v1668335019/VisionAP/Captura_desde_2022-11-13_04-21-46_y8cgsx.png' alt='Logo de la página'></img>
                    </Link>
                </div>

        <div className='topUpdate'>
          <label className="styleFontTitle">Editar Perfil</label>
          <img className="imageSee" src={info.photo}/>
          {/* <div className="name">
            <input type="text" className="" id="" name="" />
            <input type="text" className="input2" id="" name=""  />
            <input type="text" className="input2" id="" name=""  />
          </div> */}

          <div className = "point">
            <label className="styleFont">Puntos</label>
            <label className="styleFont pos">{info.points}</label>
          </div>
          

        </div>

        <div className='mediumUpdate'>
          <div className="leftTop informationPos">
            <label className="styleFont">Nombre</label><br/>
            <input onChange={changeHandler} type="text" id="name" name="name" value={info.name}/>
          </div>

          <div className="leftMedium informationPos">
            <label className="styleFont">Primer Apellido</label><br/>
            <input onChange={changeHandler} type="text" id="lastName" name="lastName" value={info.lastName}/>
          </div>

          <div className="leftBottom informationPos">
          <label className="styleFont">Género</label><br/>
            <select className='select'  onChange={selectGender} value={info.gender}>
              {genders.length === 0 && console.log("Cargando")}
              {genders.map((options) => (
                <option style = {{color: 'black', fontWeight: 'bold'}} key={options.description}value={options.gender_id}>
                {options.description}
                </option>
              ))} 
            </select>
          </div>


          <div className="centerTop">
          <label className="styleFont">Universidad</label><br/>
            <select className='select' onChange={selectUniversity} value={info.university}>
            {universities.length === 0 && console.log("Cargando")}
              {universities.map((options) => (
                <option style = {{color: 'black', fontWeight: 'bold'}} key={options.acronym} value={options.university_id}>
                  {`${options.name}(${options.acronym})`}
                </option>
              ))} 
            </select>
          </div>

          <div className="centerMedium">
          <label className="styleFont">Dirección</label><br/>
            <select className='select2'>
            {provinces.length === 0 && console.log("Cargando")}
              {provinces.map((options) => (
                <option style = {{color: 'black', fontWeight: 'bold'}} key={options.province_name} value={options.province_id}>
                  {options.province_name}
                </option>
              ))}
            </select>
            <select className='select2 selectPos'>
              <option value = '1'>Montes De Oca</option>
            </select>
            <select className='select2 selectPos'>
              <option value = '1'>Sabanilla</option>
            </select>
          </div>

          <div className="centerBottom">
          <label className="styleFont">Dirección exacta</label><br/>
            <textarea onChange={changeHandler} id="direction" name="direction" type="textarea" rows="5" cols="50"  >{info.direction}</textarea>
          </div>

          <div className="rightTop">
            <label className="styleFont">Teléfono</label><br/>
            <input onChange={changeHandler} type="text" id="phone" name="phone" value={info.phone}/>
          </div>
          <div className="rightMedium">
            <label className="styleFont">Correo Electrónico</label><br/>
            <input onChange={changeHandler} type="text" id="email" name="email" value={info.email}/>
          </div>
        </div>

        <div className="bottomUpdate">
          <button onClick={guardar} className='button1 buttonG2'>Guardar Cambios</button>
        </div>
    </div>
  );
}

export default App;
