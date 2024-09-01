import { useRef ,useState} from 'react';
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

  function handleClick() {
    idRef.current++;
    console.log(`idRef.current : ${idRef.current}`); // idRef.current의 값을 로그에 출력
    setTodos((prev) => [...prev, {id: idRef.current, text: `할일 ${idRef.current}`}])
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
    </>
  )
}

