import './UpdateInfo.css';
import React, {useState, useEffect}from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import axios from "axios";

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

  //Informacion del usuario
  const[info, setInfo]=useState({
    name: "Ford",
    lastName: "Mustang",
    secondSurname: "red",
    points: 0,
    dni: 117870341,
    phone: 86784841,
    email: "h@gmail.com",
    direction: 'Palo de mangos',
    provinces: 0,
    canton: 0,
    distric:0,
    gender: 1,
    Univesity: 2,
    Direccion: "SBD"
  });

  const selectGender = (event) => {
    const value = event.target.value;
    setInfo({... info,
            gender: value});
  };

  const selectUniversity = (event) => {
    const value = event.target.value;
    setInfo({... info,
            Univesity: value});
  };

  function guardar(){
    //Codigo para actualizar
    navigate("/SeeInfo");
    console.log(info)

  }

  const changeHandler = (event) => {
    setInfo({ ...info, [event.target.name]: event.target.value });
  }


  return (
    <div className="general">
        <nav className="nav">Barra general</nav>

        <div className='top'>
          <label className="styleFontTitle">Editar Perfil</label>
          <i className="fa-solid fa-user imageP"></i>

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
          <div className="firstColumn firstRow">
            <label className="styleFont">Nombre</label><br/>
            <input onChange={changeHandler} type="text" id="name" name="name" value={info.name}/>
          </div>

          <div className="firstColumn secondRow">
            <label className="styleFont">Primer Apellido</label><br/>
            <input onChange={changeHandler} type="text" id="lastName" name="lastName" value={info.lastName}/>
          </div>

          <div className="firstColumn thirdRow">
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


          <div className="secondColumn firstRow">
          <label className="styleFont">Universidad</label><br/>
            <select className='select' onChange={selectUniversity} value={info.Univesity}>
            {universities.length === 0 && console.log("Cargando")}
              {universities.map((options) => (
                <option style = {{color: 'black', fontWeight: 'bold'}} key={options.acronym} value={options.university_id}>
                  {`${options.name}(${options.acronym})`}
                </option>
              ))} 
            </select>
          </div>

          <div className="secondColumn secondRow">
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

          <div className="secondColumn thirdRow">
            <textarea onChange={changeHandler} id="direction" name="direction" type="textarea" rows="5" cols="50"  >{info.direction}</textarea>
          </div>

          <div className="thirdColumn firstRow">
            <label className="styleFont">Cédula</label><br/>
            <input onChange={changeHandler} type="text" id="dni" name="dni" value={info.dni}/>
          </div>
          <div className="thirdColumn secondRow">
            <label className="styleFont">Teléfono</label><br/>
            <input onChange={changeHandler} type="text" id="phone" name="phone" value={info.phone}/>
          </div>
          <div className="thirdColumn thirdRow">
            <label className="styleFont">Correo Electrónico</label><br/>
            <input onChange={changeHandler} type="text" id="email" name="email" value={info.email}/>
          </div>
        </div>

        <div className="bottom">
          <button onClick={guardar} className='button1 buttonG2'>Guardar Cambios</button>
        </div>
    </div>
  );
}

export default App;
