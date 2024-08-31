import './App.css';
import { useState } from 'react';

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

export default function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

  function handleClick(productId, action) {
    const newProducts = products.map(product => {
      if (product.id === productId) {
        if(action === 'minus') {
          return {
            ...product,
            count: Math.max(product.count - 1, 0)
          }
        } else if(action === 'plus') {
          return {
            ...product,
            count: product.count + 1
          }
        }
      }
      return product;
    });
    setProducts(newProducts);
  };


  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleClick(product.id, 'minus');
          }}>
            -
          </button>
          
          <button onClick={() => {
            handleClick(product.id, 'plus');
          }}>
            +
          </button>
        </li>
      ))}
    </ul>
  );
}