
import React, {useState, useEffect}from 'react';
//import {Link} from 'react-router-dom'
//import {products} from './data.js'
import axios from "axios";
import ProductItem from './ProductItem'
import styled from 'styled-components';
import Cookies from "universal-cookie/es6";

const cookies = new Cookies();
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: absolute;
    left: 0px;
    top: 50px;
  
`;

const Data = styled.div`
    padding: 15px;
    margin: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #BA1200;
    color: white;
    align-items: center;
    text-align:center;
    justify-content: center;
  
`;

const Button = styled.button`
background: white;
border-radius: 3px;
border: 2px solid #BA1200;
color: #BA1200;
margin: 0 1em;
padding: 0.25em 1em;
`;



const ProductList = () => {
  const [points, setPoints] = useState(cookies.get("points"));
  const [first_name, setName] = useState(cookies.get("first_name"));
  const url = "http://localhost:4000";

  const getProducts = async () => {
    
    await axios.get(url + "/gproducts")
                    .then(response => {
                      setProducts(response.data[0]);
                    }).catch(err => {
                      console.log(err)
                    });
  };
  
  const [products, setProducts] = useState([]);
  
  useEffect (() => {
    getProducts();
  }, []);

  return (
    <div>
      
      <Data> ¡Bienvenido {first_name}! su cantidad de puntos para canjear son: {points} <a href="/news"><Button >Regreso</Button></a></Data>

      <Container>
      {products.map((item) => ( //procesar todo lo que habia en la base
        <ProductItem item={item} key={item.product_id}/> // darle formato 
      ))}

      </Container>
    </div>
 
  );
};

export default ProductList