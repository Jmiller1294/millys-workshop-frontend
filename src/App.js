import logo from './logo.svg';
import './App.css';

import{ useEffect, useState } from 'react';

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
    <div className="App">
     {products.map(product => <li key={product.name}>{product.name}</li>)}
    </div>
  );
}

export default App;
