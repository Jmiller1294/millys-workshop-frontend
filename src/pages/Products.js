import{ useEffect, useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);

  const loadProducts = () => {
    fetch('http://localhost:8000/v1/products')
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  useEffect(() => {
    loadProducts();  
  }, [])

  return(
    <div>
      Shop All
    </div>
  )
}
export default Products;