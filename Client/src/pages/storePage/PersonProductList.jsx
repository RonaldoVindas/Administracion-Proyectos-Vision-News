
import React, {useState, useEffect} from 'react'
//import {products} from './data.js'
import PersonProductItem from './PersonProductItem'
import styled from 'styled-components';

import Cookies from "universal-cookie/es6";
import axios from "axios";
import swal from "sweetalert";

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

const PersonProductList = () => {
  const [person_id, setId] = useState(cookies.get("id_person"));
  const url = "http://localhost:4000";
  // /gpproducts
  const getProducts = async () => {
    await axios.get(url + `/gpproducts/${person_id}`)
                    .then(response => {
                      setProducts(response.data[0]);
                    }).catch(err => {
                      console.log(err)
                    });

  };
  const [first_name, setName] = useState(cookies.get("first_name"));

  const [products, setProducts] = useState([]);
  
  useEffect (() => {
    getProducts();
  }, []);
  
  return (
    <div>
      <Data> Estos son sus productos canjeados, {first_name} <a href="/news"><Button>Regreso</Button></a></Data>
      <Container>
      {products.map((item) => (
        <PersonProductItem item={item} key={item.id} />
      ))}

      </Container>
    </div>
 
  );
};

export default PersonProductList