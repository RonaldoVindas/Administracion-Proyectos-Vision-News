
import React from 'react'
import {products} from './data.js'
import ProductItem from './ProductItem'
import styled from 'styled-components';

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
  return (
    <div>
      <Data> ¡Bienvenido usuario! su cantidad de puntos para canjear son: [] <Button>Regreso</Button></Data>
      <Container>
      {products.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}

      </Container>
    </div>
 
  );
};

export default ProductList