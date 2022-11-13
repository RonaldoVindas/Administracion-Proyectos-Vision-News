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

    }

    async function onSubmit() {
        const values = {
            name: name,
            cost: cost,
            description: description,
            fec_creation: "2022/11/12",
            user_creation: name,
            editor: 0
        }
        await axios.put(`http://localhost:4000/store/${id}`, values, {
            Headers:{"Content-Type": "multipart/form-data",}
        })
            .then(response => {
                if(response.status === 200){
                    swal("Registro completado","" ,"success").then((value) => {
                        window.location.href="/";
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
                <form>
                    <label htmlFor="id">PRODUCT ID # </label>
                    <input value = {id} onChange={(e) => setId(e.target.value)}type="id" id="id" name="id"/>
                    <button onClick={onSearch}> BUSCAR </button>
                </form>
                <h2>EDITAR PRODUCTO</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Nombre</label>
                    <input value = {name} onChange={(e) => setName(e.target.value)}type="name" id="name" name="name"/>
                    <label htmlFor="description">Descripción</label>
                    <input value = {description} onChange={(e) => setDescription(e.target.value)}type="description" id="description" name="description"/>
                    <label htmlFor="cost">Costo</label>
                    <input value = {cost} onChange={(e) => setCost(e.target.value)}type="cost" id="cost" name="cost"/>
                </form>
                <div>
                    <button>ELIMINAR </button>
                    <button onClick={onSubmit}> EDITAR </button>

                </div>
            </div>
        </div>

    )
}

export default EditPrueba;