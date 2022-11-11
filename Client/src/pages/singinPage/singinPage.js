import React,{useState} from "react";
import  "../singinPage/singinPage.css";
import {Link} from "react-router-dom";


const SinginPage = (props) => {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [id, setId] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [address, setAddress] = useState('');
    const [birthday, setBirthday] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
    }

    return (

        <div>
            <h2 align="center">REGISTRARSE</h2>

            <div className="sing-in-container">
                <div className="sign-in-subContainer" >
                    <form className="auth-form-container" onSubmit={handleSubmit}>
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
                            <select id="job" name="user_job">
                                <optgroup label="Web">
                                    <option value="frontend_developer">Front-End Developer</option>
                                    <option value="php_developor">PHP Developer</option>
                                    <option value="python_developer">Python Developer</option>
                                    <option value="rails_developer"> Rails Developer</option>
                                    <option value="web_designer">Web Designer</option>
                                    <option value="WordPress_developer">WordPress Developer</option>
                                </optgroup>
                            </select>
                        </form>
                    </form>
                </div>


                <div className="sign-in-subContainer" >
                    <form className="auth-form-container" onSubmit={handleSubmit}>
                        <label htmlFor="university">Universidad</label>
                        <form className="combo-forms">
                            <select id="job" name="user_job">
                                <optgroup label="Web">
                                    <option value="frontend_developer">Front-End Developer</option>
                                    <option value="php_developor">PHP Developer</option>
                                    <option value="python_developer">Python Developer</option>
                                    <option value="rails_developer"> Rails Developer</option>
                                    <option value="web_designer">Web Designer</option>
                                    <option value="WordPress_developer">WordPress Developer</option>
                                </optgroup>
                            </select>
                        </form>
                        <label htmlFor="province">Provincia</label>
                        <form className="combo-forms">
                            <select id="job" name="user_job">
                                <optgroup label="Web">
                                    <option value="frontend_developer">Front-End Developer</option>
                                    <option value="php_developor">PHP Developer</option>
                                    <option value="python_developer">Python Developer</option>
                                    <option value="rails_developer"> Rails Developer</option>
                                    <option value="web_designer">Web Designer</option>
                                    <option value="WordPress_developer">WordPress Developer</option>
                                </optgroup>
                            </select>
                        </form>
                        <label htmlFor="canton">Cantón</label>
                        <form className="combo-forms">
                            <select id="job" name="user_job">
                                <optgroup label="Web">
                                    <option value="frontend_developer">Front-End Developer</option>
                                    <option value="php_developor">PHP Developer</option>
                                    <option value="python_developer">Python Developer</option>
                                    <option value="rails_developer"> Rails Developer</option>
                                    <option value="web_designer">Web Designer</option>
                                    <option value="WordPress_developer">WordPress Developer</option>
                                </optgroup>
                            </select>
                        </form>
                        <label htmlFor="district">Distrito</label>
                        <form className="combo-forms">
                            <select id="job" name="user_job">
                                <optgroup label="Web">
                                    <option value="frontend_developer">Front-End Developer</option>
                                    <option value="php_developor">PHP Developer</option>
                                    <option value="python_developer">Python Developer</option>
                                    <option value="rails_developer"> Rails Developer</option>
                                    <option value="web_designer">Web Designer</option>
                                    <option value="WordPress_developer">WordPress Developer</option>
                                </optgroup>
                            </select>
                        </form>
                        <label htmlFor="address">Dirección</label>
                        <input value={address} onChange={(e) => setAddress(e.target.value)} type="address" id="address" name="address" />
                        <label htmlFor="date">Fecha de Nacimiento</label>
                        <input value={birthday} onChange={(e) => setBirthday(e.target.value)} type="date" id="date" name="date" />
                        <label htmlFor="address">Imagen</label>
                        <input value={address} onChange={(e) => setAddress(e.target.value)} type="address" id="address" name="address" />
                    </form>
                </div>

            </div>
            <div className="sing-in-container">
                <div className="sign-in-button">
                    <button type="submit">REGISTRARSE</button>
                </div>
            </div>

        </div>

    )
}

export default SinginPage;