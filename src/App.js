import { Routes, Route } from 'react-router-dom';
import NavBar from './layout/NavBar';
import NavIcons from './layout/NavIcons';
import Home from './pages/Home';
import Products from './pages/Products';
import HolidayBoxes from './pages/HolidayBoxes';
import MensBoxes from './pages/MensBoxes';
import WomensBoxes from './pages/WomensBoxes';
import WeddingBoxes from './pages/WeddingBoxes';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';


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
        <NavIcons />
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
