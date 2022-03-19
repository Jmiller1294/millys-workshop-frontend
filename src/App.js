import{ useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import HolidayBoxes from './pages/HolidayBoxes';
import MensBoxes from './pages/MensBoxes';
import WomensBoxes from './pages/WomensBoxes';
import WeddingBoxes from './pages/WeddingBoxes';


const App = () => {
  const [products, setProducts] = useState([]);

  const loadProducts = () => {
    fetch('http://localhost:8000/v1/products')
    .then(resp => resp.json())
    .then(data => setProducts(data))
  }

  useEffect(() => {
    loadProducts();  
  }, [])

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/products' element={<Products />} />
        <Route exact path='/products/wedding' element={<WeddingBoxes />} />
        <Route exact path='/products/mens' element={<MensBoxes />} />
        <Route exact path='/products/womens' element={<WomensBoxes />} />
        <Route exact path='/products/holidays' element={<HolidayBoxes />} />
      </Routes>
    </>
  );
}

export default App;
