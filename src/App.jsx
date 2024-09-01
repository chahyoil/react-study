import './App.css';
import React, { useState, useEffect } from 'react';

// 첫 번째 Counter 컴포넌트 (의존성 배열에 [counter] 포함)
function CounterWithDependency() {
  const [counter, setCounter] = useState(0);
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    // 렌더링 횟수 증가
    setRenderCount((prev) => prev + 1);

    let intervalId = 0;
    function onTick() {
      setCounter(counter + 1);
    }

    intervalId = setInterval(onTick, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [counter]);

  return (
    <div>
      <h2>CounterWithDependency</h2>
      <p>Count: {counter}</p>
      <p>Render Count: {renderCount}</p>
    </div>
  );
}

// 두 번째 Counter 컴포넌트 (의존성 배열에 [] 포함)
function CounterWithoutDependency() {
  const [counter, setCounter] = useState(0);
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    // 렌더링 횟수 증가
    setRenderCount((prev) => prev + 1);

    let intervalId = 0;
    function onTick() {
      setCounter((prevCounter) => prevCounter + 1);
    }

    intervalId = setInterval(onTick, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h2>CounterWithoutDependency</h2>
      <p>Count: {counter}</p>
      <p>Render Count: {renderCount}</p>
    </div>
  );
}

// 메인 App 컴포넌트
export default function App() {
  return (
    <div>
      <h1>React Counter Comparison</h1>
      <CounterWithDependency />
      <CounterWithoutDependency />
    </div>
  );
}
