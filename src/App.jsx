import './App.css';
import React, { useState, useRef } from 'react';

import TodoCount from './components/todos/TodoCount.jsx'; 
import TodoAdd from './components/todos/TodoAdd.jsx'; 
import TodoList from './components/todos/TodoList.jsx'; 

const initTodos = [
  {id: 1, text : '리액트 공부하기', done : true},
  {id: 2, text : '백엔드 공부하기', done : true},
  {id: 3, text : '파이썬 공부하기', done : true}
]

export default function App() {
    const [todos, setTodos] = useState(initTodos);
    const idRef = useRef(initTodos.reduce((maxId, todo) => Math.max(maxId, todo.id), 0)+1 )

    return (
      <div className='app'>
        <h2>TODO LIST</h2>
        <TodoCount todos={todos}/>
        <TodoAdd todos={todos} setTodos={setTodos} idRef={idRef}/>
        <TodoList todos={todos} setTodos={setTodos}/>
      </div>
    );
}
