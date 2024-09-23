import './App.css';
import { useState, useReducer } from 'react';
import { v4 as uuidv4 } from "uuid"; // ES Modules

function Panel({ title, isActive, text, onShow }) {
  return (
    <div className={`panel ${isActive ? "active" : ""}`}>
      <h3>{title}</h3>
      {isActive ? <p>{text}</p> : <button type="button" onClick={onShow}>Show</button>}
    </div>
  )
}

/**
 * MoneyReducer는 잔고 상태를 관리하는 리듀서 함수입니다.
 * 
 * useReducer 사용 이유:
 * 1. 여러 액션에 따른 상태 변화를 명확하게 처리.
 * 2. 상태 변경 로직을 컴포넌트 외부에서 관리하여 코드 간결화.
 * 
 * 액션:
 * - 'deposit': 잔고를 증가.
 * - 'withdraw': 잔고를 감소.
 * 
 * @param {number} state - 현재 잔고 상태.
 * @param {object} action - 상태 변경을 위한 액션 (type과 payload).
 * @returns {number} - 업데이트된 잔고 상태.
 */
function MoneyReducer(state, action) {
  action.payload = parseInt(action.payload) || 0;

  switch (action.type) {
    case 'deposit':
      return state + action.payload;
    case 'withdraw':
      return state - action.payload;
    default:
      return state;
  }
}

const initPanel = [
  { id: uuidv4(), title: "About", content: "With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city." },
  { id: uuidv4(), title: "History", content: "The city was founded in 1929 by the municipality of Almaty. The city's name was changed to Almaty city in 1950. In 1997, Almaty became the capital of the country." },
  { id: uuidv4(), title: "Culture", content: "Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city." },
  { id: uuidv4(), title: "Food", content: "The city was founded in 1929 by the municipality of Almaty. The city's name was changed to Almaty city in 1950. In 1997, Almaty became the capital of the country." },
  { id: uuidv4(), title: "Transport", content: "Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city." },
  { id: uuidv4(), title: "Culture", content: "The city was founded in 1929 by the municipality of Almaty. The city's name was changed to Almaty city in 1950. In 1997, Almaty became the capital of the country." },
]

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [money, dispatch] = useReducer(MoneyReducer, 0);
  const [num, setNum] = useState(0);

  return (
    <div className='container'>
      <div className='accordion'>
        <h2>Almaty, Kazakhstan</h2>
        {initPanel.map((panel) => (
          <Panel
            key={panel.id}
            title={panel.title}
            text={panel.content}
            isActive={activeIndex === panel.id}
            onShow={() => setActiveIndex(panel.id)}
          >
          </Panel>
        ))}
      </div>

      <div className="app">
        <h2>useReducer 은행</h2>
        <p>잔고 : {money}</p>
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          step={1000}
        />
      </div>

      <button type='button' onClick={() => dispatch({ type: 'deposit', payload: num })}>예금</button>
      <button type='button' onClick={() => dispatch({ type: 'withdraw', payload: num })}>인출</button>
    </div>
  )
}