import React, {useState} from "react";
import "../storePage/editPrueba.css";
import axios from "axios";
import swal from "sweetalert";

const EditPrueba = (props) => {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [cost, setCost] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
    }

    async function onSearch(){
        await axios.get(`http://localhost:4000/search/${id}`)
            .then(response => {
                setName(response.data[0][0].name);
                setDescription(response.data[0][0].description);
                setCost(response.data[0][0].cost);

            }).catch(error =>{
                swal("Error al Editar","" ,"warning")
                console.log(error);
                })
    }

    async function onSubmit() {
        const values = {
            name: name,
            cost: cost,
            description: description
        }
        await axios.put(`http://localhost:4000/store/${id}`, values)
            .then(response => {
                if(response.status === 200){
                    swal("Editar completado","" ,"success").then((value) => {
                        
                    })
                }else{
                    swal("Error al Editar","" ,"warning")
                }
            }).catch(error =>{
                swal("Error al Editar","" ,"warning")
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
                </form>
                <div>
  
                    <button onClick={onSubmit}> EDITAR </button>

                </div>
            </div>
        </div>

    )
}

export default EditPrueba;