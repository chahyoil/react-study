import './App.css';
import { useState } from 'react';

/* 
  배열 CRUD
  - Create : [...기존 배열, 추가될 내용]
  - Read   : map(), key에 고유값 저장
  - Update : map() 돌리며 고유 id와 비교하여 업데이트
  - Delete : filter()로 id와 일치하지 않는 요소로 새로운 배열을 생성
*/

const initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye' },
  { id: 2, name: 'Louise Nevelson' },
];

const initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 100 },
  { id: 1, type: 'square', x: 150, y: 100 },
  { id: 2, type: 'circle', x: 250, y: 100 },
];

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

const initTodos = [
  { id: 1, text: '할일 1' },
  { id: 2, text: '할일 2' },
  { id: 3, text: '할일 3' },
  { id: 4, text: '할일 4' },
];

export default function List() {
  const [artists, setArtists] = useState(initialArtists);
  const [shapes, setShapes] = useState(initialShapes);
  const [counters, setCounters] = useState([0, 0, 0]);
  const [products, setProducts] = useState(initialProducts);
  const [todos, setTodos] = useState(initTodos);


  function handleClick() {
    setShapes(
      shapes.map((shape) => {
        if (shape.type === 'circle') {
          return {
            ...shape,
            y: shape.y + 50,
          };
        } else {
          return shape;
        }
      })
    )
  }

  function handleIncrement(index) {
    setCounters(
      counters.map((counter, i) => {
        //   if(i === index) {
        //     return counter + 1;
        //   } else {
        //     return counter;
        //   }
        return i === index ? counter + 1 : counter;
      })
    );
  }

  // function handleIncrease(productId) {
  //   const newProducts = products.map(product => {
  //     if (product.id === productId) {
  //       return {
  //         ...product,
  //         count: product.count + 1
  //       }
  //     }
  //     return product;
  //   });
  //   setProducts(newProducts);
  // }

  // function handleMinus(productId) {
  //   const newProducts = products.map(product => {
  //     if (product.id === productId) {
  //       return {
  //         ...product,
  //         count: Math.max(product.count -1, 0)
  //       }
  //     }
  //     return product;
  //   });
  //   setProducts(newProducts);
  // }

  function handleProductClick(productId, action) {
    const newProducts = products.map(product => {
      if (product.id === productId) {
        if (action === 'minus') {
          return {
            ...product,
            count: Math.max(product.count - 1, 0)
          }
        } else if (action === 'plus') {
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

  function handleAdd(idx) {
    setTodos([
      ...todos.slice(0, idx),
      { id: Date.now(), text: '추가된 할일' },
      ...todos.slice(idx),
    ]);
  }

  return (
    <div className="container">
      <div className="section">
        <h2>영감을 주는 조각가:</h2>
        <ul>
          {artists.map((artist) => (
            <li key={artist.id}>
              {artist.name}
              <button
                type='button'
                onClick={() => {
                  setArtists(artists.filter((item) => item.id !== artist.id))
                }}
                className="delete-btn"
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>도형 이동</h2>
        <button onClick={handleClick}>원만 아래로 이동</button>
        <div className="shape-container">
          {shapes.map((shape) => (
            <div
              key={shape.id}
              style={{
                background: 'purple',
                position: 'absolute',
                left: shape.x,
                top: shape.y,
                borderRadius: shape.type === 'circle' ? '50%' : '',
                width: 20,
                height: 20,
              }}
            />
          ))}
        </div>
      </div>

      <div className="section">
        <h2>카운터</h2>
        <ul>
          {counters.map((counter, i) => (
            <li key={i}>
              {counter}
              <button type="button" onClick={() => handleIncrement(i)}>
                +1
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>제품 목록</h2>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              {product.name} (<b>{product.count}</b>)
              <div className="product-controls">
                <button onClick={() => handleProductClick(product.id, 'plus')}>+</button>
                <button onClick={() => handleProductClick(product.id, 'minus')}>-</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>할 일 목록</h2>
        <button type="button" onClick={() => handleAdd(2)}>특정위치에 추가</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </div>
    </div>
  )
  
}