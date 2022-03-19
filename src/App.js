import{ useEffect, useState } from 'react';
import {Route, Switch } from 'react-router-dom';

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
      <Switch>
        <Route exact path='/' component={} />
        <Route exact path='/products' component={} />
        <Route exact path='/products/wedding' component={} />
        <Route exact path='/products/mens' component={} />
        <Route exact path='/products/womens' component={} />
        <Route exact path='/products/' component={} />
      </Switch>
    </>
  );
}

export default App;
