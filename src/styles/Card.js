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
  margin-top: 10px;
  height: 110px;
`

const Card = () => {
  return (
    <CardCont>
      <CardImg src={giftImg} />
      <label>Gift Box</label>
      <label>type</label>
      <label>$15.00</label>
    </CardCont>
  )
}
export default Card;