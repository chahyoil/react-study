import './App.css';
import { useRef ,useState, useEffect} from 'react';

function Test() {
  const [count, setCount] = useState(0);
  
  // 하나의 함수 내에서 intervalId를 일반 변수로 설정할 수 있음.
  // 외부 변수와 연결된 경우에는 useRef 및 forwardRef를 사용해야 함.
  let intervalId = 0;
  // let intervalId = useRef(0);

  useEffect(() => {

    console.log(`useEffect count: ${count}`);
    
    intervalId = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, [count])

  useEffect(() => {
    function handleScroll() {
      console.log(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);

    // cleanup function
    // 함수 안에서 리턴된 함수를 '클로저'
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return <h2>Test {count}</h2>
}

export default function App() {
  const [isShow, setIsShow] = useState(true);
  return (
    <div className='app'>
      <button type='button' onClick={() => setIsShow(!isShow)}>
        테스트컴포넌트 토글
      </button>
      {isShow && <Test />}
    </div>
  )
}
