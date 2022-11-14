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
   // const [productid, setproductid] = useState('');
    //const [fec_creation, setfec_creation] = useState('');
    //const [userCreation, usercreation] = useState('');
    




    function handleSubmit(e) {
        e.preventDefault();
        console.log(name);
    }

    async function onSearch(){
        await axios.get(`http://localhost:4000/search/${id}`)
            .then(response => {
                setName(response.data[0][0].name);
                setDescription(response.data[0][0].description);
                setCost(response.data[0][0].cost);
                setImage(response.data[0][0].image);
              //  setproductid(response.data[0][0].productid);
              //  setfeccreation(response.data[0][0].productid);
             //   usercreation(response.data[0][0].user_creation);

            }).catch(error =>{
                swal("Error al registrar","" ,"warning")
                console.log(error);
                })
    }

    async function onSubmit() {
        const values = {
           // productid: productid,// no
            name: name,// no --
            cost: cost,// no --
           // timesclimed: timesclimed,
           // cuantity: cuantity,
            description: description, 
            //fec_creation:fec_creation,// no
           // userCreation: usercreation,// no
           // fecmodification:fecmodification,
           // usermodification: usermodification,
            image: image// --

        }
        await axios.put(`http://localhost:4000/store/${id}`, values)
            .then(response => {
                if(response.status === 200){
                    swal("Registro completado","" ,"success").then((value) => {
                        
                    })
                }else{
                    swal("Error al registrar","" ,"warning")
                }
            }).catch(error =>{
                swal("Error al registrar","" ,"warning")
                console.log(error);
                })
    }
    return (

        <div>
            <div className='header2'>

            </div>
            <div className="auth-form-container">
                <h2>Crear producto</h2>

                <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Nombre</label>
                    <input value = {name} onChange={(e) => setName(e.target.value)}type="name" id="name" name="name"/>
                    <label htmlFor="description">Descripción</label>
                    <input value = {description} onChange={(e) => setDescription(e.target.value)}type="description" id="description" name="description"/>
                    <label htmlFor="cost">Costo</label>
                    <input value = {cost} onChange={(e) => setCost(e.target.value)}type="cost" id="cost" name="cost"/>

                    <label htmlFor="imagen"> Imagen </label>
                    <input value = {image} onChange={(e) => setImage(e.target.value)}type="image" id="image" name="image"/>
                </form>
                <div>
                    <button onClick={onSubmit}> Crear </button>
                    <button onClick={onSubmit}> EDITAR </button>

                </div>
            </div>
        </div>

    )
}

export default CreateProduct;