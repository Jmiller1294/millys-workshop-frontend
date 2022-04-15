import React from 'react';
import styled from 'styled-components';
import giftImg from '../assets/gift-box.jpg';


const CardCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 480px;
  padding: ${ (props) => props.padding};;   
  width: 25%;
  min-width: 300px;
  max-width: 400px;
  margin: 10px;
`

const CardImg = styled.img`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  height: 55%;
`
const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  line-height: 1.5;
  height: 110px;
`
const Button = styled.button`
  width: 95%;
  height: 40px;
  background-color: #FFFFFF;
  font-weight: bold;

  &:hover {
    background-color: #000000;
    color: #FFFFFF;
  }
`

const Card = () => {
  return (
    <CardCont>
      <CardImg src={giftImg} />
      <CardInfo>
        <b>Gift Box</b>
        <label>Holiday</label>
        <label>$15.00</label>
      </CardInfo>
      <Button>add to cart</Button>
    </CardCont>
  )
}
export default Card;