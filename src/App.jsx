import './App.css';
import React, { useState, useRef, useEffect, forwardRef } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let intervalId = 0;
    function onTick() {
      setCounter((counter) => counter + 1);
    }
  
    intervalId = setInterval(onTick, 1000);

    // setInterval을 useEffect안에 두더라도 2번씩 렌더링 되는 문제를 막을 수 없음. 클로저에서 clearInterval을 해줘서 한번만 실행되도록 보장
    // 이전 setInterval을 clean up!
    return () => {
      clearInterval(intervalId);
    }
    
  }, [])

  return (
    <div>
      {counter}
    </div>
  )
}
