import React, {useState} from "react";
import "../storePage/CreateProduct.css";
import axios from "axios";
import swal from "sweetalert";

import Cookies from "universal-cookie";
const CreateProduct = (props) => {
  
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [cost, setCost] = useState('');
    const [image, setImage] = useState('');

    




    function handleSubmit(e) {
        e.preventDefault();
        console.log(name);
    }


    async function onSubmit() {
        const values = {
            product_id: id,
            name: name,// no --
            cost: cost,// no --
           // timesclimed: timesclimed,
           // cuantity: cuantity,
            description: description, 
            fec_creation: "2022/11/12",// no
            user_creation: "Glori" ,// no
           // fecmodification:fecmodification,
           // usermodification: usermodification,
            photo: image// --

        }
        await axios.post(`http://localhost:4000/CreateProduct`, values)
            .then(response => {
                if(response.status === 200){
                    swal("Registro completado","" ,"success").then((value) => {
                        
                    })
                }else{
                    swal("Error al registrar","" ,"warning")
                }
            }).catch(error =>{
                swal("Error al registrar","" ,"warning")
                console.log(values);
                })
    }
    return (

        <div>
            <div className='header2'>

            </div>
            <div className="auth-form-container">
                <h2>Crear producto</h2>

                <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="id"># PRODUCTO</label>
                    <input value = {id} onChange={(e) => setId(e.target.value)}type="id" id="id" name="id"/>           
                    <label htmlFor="name">NOMBRE</label>
                    <input value = {name} onChange={(e) => setName(e.target.value)}type="name" id="name" name="name"/>
                    <label htmlFor="description">DESCRIPCIÓN</label>
                    <input value = {description} onChange={(e) => setDescription(e.target.value)}type="description" id="description" name="description"/>
                    <label htmlFor="cost">COSTO</label>
                    <input value = {cost} onChange={(e) => setCost(e.target.value)}type="cost" id="cost" name="cost"/>

                    <label htmlFor="image"> IMAGEN </label>
                    <input value = {image} onChange={(e) => setImage(e.target.value)}type="text" id="image" name="image"/>
                </form>
                <div>
                    <button onClick={onSubmit}> Crear </button>
                </div>
            </div>
        </div>

    )
}

export default CreateProduct;