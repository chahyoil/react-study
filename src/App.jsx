import './App.css';
import { useRef ,useState, useEffect} from 'react';

function Test() {

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

  return <h2>Test</h2>
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
