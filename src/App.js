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
import styled from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 128px;
`
const  Logo = styled.img`
  height: 250px;
  width: 220px;
`

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: Helvetica, sans-serif;
  } 
`

const App = () => {
 
  return (
    <>
      <NavContainer>
        <Logo src={logo} />
        <NavBar />
      </NavContainer>
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
