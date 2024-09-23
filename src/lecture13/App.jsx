import { useRef, useState } from 'react';
import './App.css';

const initTodos = [
  {id : 1, text: '할일 1'},
  {id : 2, text: '할일 2'},
  {id : 3, text: '할일 3'},
  {id : 4, text: '할일 4'}
]

export default function App() {
  const [todos, setTodos] = useState(initTodos);
  const idRef = useRef(4);

  const [startTime, setStartTime] = useState(0);
  const [now, setNow] = useState(0);
  const intervalIdRef = useRef(null); // useRef로 변경

  const passedTime = (now - startTime) / 1000;

  function handleClick() {
    idRef.current++;
    console.log(`idRef.current : ${idRef.current}`);
    setTodos((prev) => [...prev, {id: idRef.current, text: `할일 ${idRef.current}`}])
  }

  function handleStart() {
    clearInterval(intervalIdRef.current);
    setStartTime(Date.now());
    setNow(Date.now());

    intervalIdRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10)
  }

  function handleStop() {
    console.log(`intervalId: ${intervalIdRef.current}`);
    clearInterval(intervalIdRef.current);
  }

  return (
    <>
      <button type='button' onClick={handleClick}>
        할일 추가
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>

      <p>Time passed: {passedTime.toFixed(3)}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  )
}