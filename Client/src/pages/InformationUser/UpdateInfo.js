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
            const pro = response.data[0][0].province_id;
            setProvinces(response.data[0]);
            getCantons(pro)
        }).catch(err => {
            console.log(err)
        });
};

const getCantons = async (value) =>{
    await axios.get(url + "/cantons",{params:{provinceId:value}})
        .then(response => {
            const can = response.data[0][0].canton_id;
            //setCanton(can)
            setCantons(response.data[0]);
            getDistricts(can)
        }).catch(err => {
            console.log(err)
        });

};

const getDistricts = async (value) =>{
    await axios.get(url + "/districts",{params:{cantonId:value}})
        .then(response => {
            const dis = response.data[0][0].distric_id
            //setDistrict(dis)
            setDistricts(response.data[0]);
        }).catch(err => {
            console.log(err)
        });
};

const selectProvince = (event) => {
    const value = event.target.value
    setInfo({... info,
      province: Number(value)});
    getCantons(value)

};

const selectCanton= (event) => {
    const value = event.target.value
    setInfo({... info,
      canton: Number(value)});
    getDistricts(value)
};

  const [genders, setGenders] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [cantons, setCantons] = useState([]);
  const [districts, setDistricts] = useState([]);

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
    gender: cookies.get('gender_id'),
    personType: cookies.get('personType_id'),
    university: cookies.get('university_id'),
    province: cookies.get('province_id'),
    cantons: 0,
    distric: 0,
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
            <select className='select2' onChange={selectProvince} value={info.province}>
            {provinces.length === 0 && console.log("Cargando")}
              {provinces.map((options) => (
                <option style = {{color: 'black', fontWeight: 'bold'}} key={options.province_name} value={options.province_id}>
                  {options.province_name}
                </option>
              ))}
            </select>
            <select className='select2 selectPos' onChange={selectCanton} value={info.canton}>
                  {cantons.length === 0 && console.log("Cargando")}
                  {cantons.map((options) => (
                      <option key={options.canton_name} value={options.canton_id}>
                          {options.canton_name}
                      </option>
                  ))}
            </select>
            <select className='select2 selectPos' onChange={(e) => setInfo(...info,e.target.value)} value={info.district}>
                  {districts.length === 0 && console.log("Cargando")}
                  {districts.map((options) => (
                      <option key={options.distric_name} value={options.distric_id}>
                          {options.distric_name}
                      </option>
                  ))}
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
