import  "../singinPage/singinPage.css";
import {Link} from "react-router-dom";
import axios from "axios";
import React, {useState, useEffect}from 'react';
import swal from "sweetalert";


const SinginPage = (props) => {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [id, setId] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [address, setAddress] = useState('');
    const [birthday, setBirthday] = useState('');
    const [gender, setGender] = useState('0');
    const [university, setUniversity] = useState('0');
    const [province, setProvince] = useState('1');
    const [canton, setCanton] = useState('1');
    const [district, setDistrict] = useState('1');
    const [image, setImage] = useState();

    const [genders, setGenders] = useState([]);
    const [universities, setUniversities] = useState([]);
    const [provinces, setProvinces] = useState([]);
    const [cantons, setCantons] = useState([]);
    const [districts, setDistricts] = useState([]);

    const url = "http://localhost:4000";

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
    }

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
                setCanton(can)
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
                setDistrict(dis)
                setDistricts(response.data[0]);
            }).catch(err => {
                console.log(err)
            });
    };

    const selectProvince = (event) => {
        const value = event.target.value
        setProvince(value)
        getCantons(value)

    };

    const selectCanton= (event) => {
        const value = event.target.value
        setCanton(value)
        getDistricts(value)
    };


    useEffect(() => {
        getGenders();
        getUniversities();
        getProvinces();

    }, []);

    async function onSubmit() {

        const values = {
            id_person: id,
            email: email,
            password: pass,
            first_name: name,
            last_name: lastname,
            image :image,
            //photo: "CAMBIAR",
            birth_day: birthday,
            direction: address,
            phone: phone,
            gender_id: gender,
            province_id: province,
            university_id: university,
            fec_creation: "2022/11/12",
            user_creation: name,
            editor: 0
        }
        console.log(values)

        await axios.post(url + '/person/new', values,{
            headers:{
                "Content-Type": "multipart/form-data",
            },
        })
            .then(response => {
                console.log("RESPUESTA")
                console.log(response)
                if(response.status === 200){
                    swal("Registro completado","" ,"success").then((value) => {
                        window.location.href="/";
                    })
                }else{
                    swal("Error al registrar","" ,"warning")
                }
            })

            .catch(error =>{
                swal("Error al registrar","" ,"warning")
                console.log(error);
            })
    }

    return (

        <div>
            <div className='header2'>

            </div>
            <h2 align="center">REGISTRARSE</h2>
            <div className="sing-in-container">
                <div className="sign-in-subContainer" >
                    <div className="auth-form-container" onSubmit={handleSubmit}>
                        <label htmlFor="name">Nombre</label>
                        <input value={name} onChange={(e) => setName(e.target.value)}type="name" id="name" name="name" />
                        <label htmlFor="lastname">Apellidos</label>
                        <input value={lastname} onChange={(e) => setLastname(e.target.value)}type="lastname" id="lastname" name="lastname" />
                        <label htmlFor="id">Cédula</label>
                        <input value={id} onChange={(e) => setId(e.target.value)} type="id" id="id" name="id" />
                        <label htmlFor="phone">Teléfono</label>
                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="phone" id="phone" name="phone" />
                        <label htmlFor="email">Correo Electrónico</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" id="email" name="email" />
                        <label htmlFor="password">Contraseña</label>
                        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" id="password" name="password" />
                        <label htmlFor="genre">Género</label>
                        <form className="combo-forms">
                            <select onChange={(e) => setGender(e.target.value)} value={gender}>
                                {genders.length === 0 && console.log("Cargando")}
                                {genders.map((options) => (
                                    <option key={options.description} value={options.gender_id}>
                                        {options.description}
                                    </option>
                                ))}
                            </select>
                        </form>
                    </div>
                </div>


                <div className="sign-in-subContainer" >
                    <form className="auth-form-container" onSubmit={handleSubmit}>
                        <label htmlFor="university">Universidad</label>
                        <form className="combo-forms">
                            <select onChange={(e) => setUniversity(e.target.value)} value={university}>
                                {universities.length === 0 && console.log("Cargando")}
                                {universities.map((options) => (
                                    <option key={options.acronym} value={options.university_id}>
                                        {`${options.name} (${options.acronym})`}
                                    </option>
                                ))}
                            </select>
                        </form>
                        <label htmlFor="province">Provincia</label>
                        <form className="combo-forms">
                            <select  onChange={selectProvince} value={province} >
                                {provinces.length === 0 && console.log("Cargando")}
                                {provinces.map((options) => (
                                    <option key={options.province_name} value={options.province_id}>
                                        {options.province_name}
                                    </option>
                                ))}
                            </select>
                        </form>
                        <label htmlFor="canton">Cantón</label>
                        <form className="combo-forms">
                            <select  onChange={selectCanton} value={canton} >
                                {cantons.length === 0 && console.log("Cargando")}
                                {cantons.map((options) => (
                                    <option key={options.canton_name} value={options.canton_id}>
                                        {options.canton_name}
                                    </option>
                                ))}
                            </select>
                        </form>
                        <label htmlFor="district">Distrito</label>
                        <form className="combo-forms">
                            <select onChange={(e) => setDistrict(e.target.value)} value={district}>
                                {districts.length === 0 && console.log("Cargando")}
                                {districts.map((options) => (
                                    <option key={options.distric_name} value={options.distric_id}>
                                        {options.distric_name}
                                    </option>
                                ))}
                            </select>
                        </form>
                        <label htmlFor="address">Dirección</label>
                        <input value={address} onChange={(e) => setAddress(e.target.value)} type="address" id="address" name="address" />
                        <label htmlFor="date">Fecha de Nacimiento</label>
                        <input value={birthday} onChange={(e) => setBirthday(e.target.value)} type="date" id="date" name="date" />
                        <label htmlFor="address">Imagen</label>
                        <input name ="photo" type="file" id="image" onChange={(e) => setImage(e.target.files[0])}/>
                    </form>
                </div>

            </div>
            <div className="sing-in-container">
                <div className="sign-in-button">
                    <button onClick={onSubmit} type="submit">REGISTRARSE</button>
                </div>
            </div>

        </div>

    )
}

export default SinginPage;