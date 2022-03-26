import { Routes, Route } from 'react-router-dom';
import NavBar from './layout/NavBar';
import Home from './pages/Home';
import Products from './pages/Products';
import HolidayBoxes from './pages/HolidayBoxes';
import MensBoxes from './pages/MensBoxes';
import WomensBoxes from './pages/WomensBoxes';
import WeddingBoxes from './pages/WeddingBoxes';
import { createGlobalStyle } from 'styled-components';
import logo from './assets/logo-black.png';
import searchIcon from './assets/search.png';
import cartIcon from './assets/shopping-cart.png';
import accountIcon from './assets/user.png';
import styled from 'styled-components';

const LogoContainer = styled.div`
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
const Header = styled.header`
  display: flex;
  flex-direction: column;
  height: 180px;
  width: 100%;
`

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  } 
`

const App = () => {
 
  return (
    <>
      <Header>
        <LogoContainer>
          <GhostDiv></GhostDiv>
          <Logo src={logo} />
          <IconCont>
            <Icon src={searchIcon} />
            <Icon src={cartIcon} />
            <Icon src={accountIcon} />
          </IconCont>
        </LogoContainer>
        <NavBar />
      </Header>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/products' element={<Products />} />
        <Route exact path='/products/wedding' element={<WeddingBoxes />} />
        <Route exact path='/products/mens' element={<MensBoxes />} />
        <Route exact path='/products/womens' element={<WomensBoxes />} />
        <Route exact path='/products/holidays' element={<HolidayBoxes />} />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
