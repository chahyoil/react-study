import './App.css';
import { useState } from 'react';

export default function CounterList() {
  const [counters, setCounters] = useState([0, 0, 0]);

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
  
  return (
    <ul>
      {counters.map((counter, i) => (
        <li key={i}>
          {counter}{' '}
          <button
            type="button"
            onClick={() => {
              handleIncrement(i);
            }}
          >
            +1
          </button>
        </li>
      ))}
    </ul>
  );
}
