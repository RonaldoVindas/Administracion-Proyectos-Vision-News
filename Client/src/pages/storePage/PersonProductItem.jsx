import React from 'react'
import styled from 'styled-components';
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



const PersonProductItem = ({item}) => {
  return (
    <Container>
      <Circle/>
      <Image src ={item.photo}/>
      <Info>
          <Title>{item.name}</Title>
          <Description>{item.description}</Description>
      </Info>
    </Container>
  )
}

export default PersonProductItem