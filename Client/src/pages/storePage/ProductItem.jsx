import React, {useState} from 'react'
import styled from 'styled-components';
import Cookies from "universal-cookie/es6";
import axios from "axios";
import swal from "sweetalert";

const cookies = new Cookies();

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(1, 0, 0, 0.2);
  z-index: 3;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  text-align:center;
  justify-content: center;
  background-color: #E8EBED;
  color: white;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Title = styled.h1``
const Description = styled.body``
const Cost = styled.h2``
const Button = styled.button`
background: white;
border-radius: 3px;
border: 2px solid #BA1200;
color: #BA1200;
margin: 0 1em;
padding: 0.25em 1em;
`;


const ProductItem = ({item}) => {
  const [points, setPoints] = useState(cookies.get("points"));
  const [person_id, setId] = useState(cookies.get("id_person"));

  async function onComprar(){
    //Quitarle 1 a la cantidad del producto
    //Si la cantidad queda en 0 deshabilitar el producto de la compra
    //Se le reducen los puntos que valia el objeto al usuario
    //Asignar el producto al usuario que lo compro
    console.log(person_id);
    var pointsN = 0;
    if(points >= item.cost){
      pointsN = points - item.cost;
      setPoints(pointsN);
      cookies.set("points", pointsN, {path: "/"})
    }
    asignarComprador();
    
  }

  async function disminuirCantidadProducto(){
    //Quitarle 1 a la cantidad del producto
    //Si la cantidad queda en 0 deshabilitar el producto de la compra


  }

  async function asignarComprador(){
    //Asignar el producto al usuario que lo compro
    const values = {
      person_id: person_id,
      product_id: item.product_id,
      fec_creation: "2022/11/12",
      user_creation: "Glori",
  
  }
  console.log(values)
  const url = "http://localhost:4000";
  await axios.post(url + '/addRelationships', values,{
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
    <Container>
      <Circle/>
      <Image src ={item.photo}/>
      <Info>
          <Title>{item.name}, # {item.product_id}</Title>
          <Description>{item.description}</Description>
          <Cost>{item.cost}</Cost>
          <Button onClick={onComprar}>Canjear</Button>
      </Info>
    </Container>
  )
}

export default ProductItem