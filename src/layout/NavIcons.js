import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo-black.png';
import searchIcon from '../assets/search.png';
import cartIcon from '../assets/shopping-cart.png';
import accountIcon from '../assets/user.png';


const IconContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 110px;
  width: 100%;
  margin-top: 10px;
`
const  Logo = styled.img`
  height: 120px;
  width: 250px;
`
const Icon = styled.img`
  height: 20px;
  margin: 0 10px;
  width: 20px;
`
const IconCont = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 20px;
  width: 33.3%;
`
const GhostDiv = styled.div`
  height: 30px;
  width: 33.3%;
  display: flex;
`

const NavIcons = () => {
  return(
    <>
      <IconContainer>
          <GhostDiv></GhostDiv>
          <Logo src={logo} />
          <IconCont>
            <Icon src={searchIcon} />
            <Icon src={accountIcon} />
            <Icon src={cartIcon} />
            0
          </IconCont>
        </IconContainer>
    </>
  )
}
export default NavIcons;