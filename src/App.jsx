import './App.css';
import { useRef ,useState} from 'react';


// 스톱워치
export default function StopWatch() {
  const [startTime, setStartTime] = useState(0); // 시작시간
  const [now, setNow] = useState(0); // 현재시간
  let intervalIdRef = useRef(0);

  const passedTime = (now - startTime) / 1000;

  function handleStart() {
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
      <p>Time passed: {passedTime.toFixed(3)}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  )
}
