import React,{useState} from "react";
import "../loginPage/loginPage.css";
import {Link} from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie/es6";
import swal from "sweetalert";


const cookies = new Cookies();
const LoginPage = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    async function onSubmit() {
        await axios.get('http://localhost:4000/person/login', {params: {email: email, password: pass} })
            .then(response => {
                return response.data[0];
            })
                .then(response=>{
                    if(response.length>0){
                        let respuesta=response[0];
                        console.log(respuesta)
                        cookies.set('first_name',        respuesta.first_name,       {path: "/"});
                        cookies.set('last_name',        respuesta.last_name,       {path: "/"});
                        cookies.set('email',        respuesta.email,       {path: "/"});
                        cookies.set('id_person',   respuesta.id_person,  {path: "/"});
                        cookies.set('editor',         respuesta.editor,        {path: "/"});
                        cookies.set('gender_id',         respuesta.gender_id,        {path: "/"});
                        cookies.set('persontype_id',         respuesta.persontype_id,        {path: "/"});
                        cookies.set('university_id',         respuesta.university_id,        {path: "/"});
                        cookies.set('province_id',         respuesta.province_id,        {path: "/"});
                        cookies.set('points',         respuesta.points,        {path: "/"});
                        cookies.set('phone',         respuesta.phone,        {path: "/"});
                        cookies.set('birth_day',         respuesta.birth_day,        {path: "/"});
                        cookies.set('direction',         respuesta.direction,        {path: "/"});

                        swal("Usuario encontrado","" ,"success").then((value) => {
                            window.location.href="/news";
                        })
                    }else{
                        swal("Usuario no encontrado","" ,"warning")
                    }
                })
                .catch(error =>{
                    console.log(error);
                })
    }

    async function continuar(){
        cookies.set('first_name',       "",       {path: "/"});
        cookies.set('last_name',       "",       {path: "/"});
        cookies.set('email',        "",       {path: "/"});
        cookies.set('id_person',   "",  {path: "/"});
        cookies.set('editor',         "",        {path: "/"});
        cookies.set('genre_id',         "",        {path: "/"});
        cookies.set('persontype_id',         "",        {path: "/"});
        cookies.set('university_id',         "",        {path: "/"});
        cookies.set('province_id',         "",        {path: "/"});
        cookies.set('points',         "",        {path: "/"});
        cookies.set('phone',         "",        {path: "/"});
        cookies.set('birth_day',         "",        {path: "/"});
        cookies.set('direction',         "",        {path: "/"});
        window.location.href="/news";
    }

    return (

        <div>
            <div className='header2'>

            </div>
            <div className="auth-form-container">
                <h2>INICIO DE SESIÓN</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Correo Electrónico</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" id="email" name="email" />
                    <label htmlFor="password">Contraseña</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" id="password" name="password" />
                    <button type="submit"onClick={onSubmit} >INICIAR SESIÓN</button>
                </form>
                <div>
                    <Link to = '/signIn'><button className="link-btn">CREAR CUENTA</button></Link>
                    <button className="link-btn" onClick={continuar}>CONTINUAR</button>

                </div>
            </div>
        </div>

    )
}

export default LoginPage;