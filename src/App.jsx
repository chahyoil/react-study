import './App.css';
import { useState } from 'react';

const initTodos = [
  { id: 1, text: '할일 1' },
  { id: 2, text: '할일 2' },
  { id: 3, text: '할일 3' },
  { id: 4, text: '할일 4' },
];

export default function App() {
  const [todos, setTodos] = useState(initTodos);

  function handleAdd(idx) {
    setTodos([
      ...todos.slice(0,idx),
      {id : Date.now(), text: '추가된 할일'},
      ...todos.slice(idx),
    ]);
  }

  return (
    <div>
      <button type="button" onClick={() => {handleAdd(2)}}>특정위치에 추가</button>
      {todos.map((todo) => (
        <p key={todo.id}>{todo.text}</p>
      ))}
    </div>
  )
}
