import './App.css';
import {useReducer} from 'react';
import {useState} from 'react';

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

export default function Counter() {
  const [money, dispatch] = useReducer(MoneyReducer, 0);
  const [num, setNum] = useState(0);

  return (
    <>
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

      <button type='button' onClick={()=>dispatch({type:'deposit', payload:num})}>예금</button>
      <button type='button' onClick={()=>dispatch({type:'withdraw', payload:num})}>인출</button>
    </>
  )
}
