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

  function handleIncrease(productId) {
    const newProducts = products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count + 1
        }
      }
      return product;
    });
    setProducts(newProducts);
  }

  function handleMinus(productId) {
    const newProducts = products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: Math.max(product.count -1, 0)
        }
      }
      return product;
    });
    setProducts(newProducts);
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleMinus(product.id);
          }}>
            -
          </button>
          
          <button onClick={() => {
            handleIncrease(product.id);
          }}>
            +
          </button>
        </li>
      ))}
    </ul>
  );
}