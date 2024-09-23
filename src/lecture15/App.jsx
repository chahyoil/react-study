import './App.css';
import { useRef, useState, useEffect, forwardRef } from 'react';


// 첫 번째 Counter 컴포넌트 (의존성 배열에 [counter] 포함)
function CounterWithDependency() {
  // 같은 count 결과라도 useEffect에 디펜던시를 어떻게 거느냐에 따라서 재 렌더링이 발생하는 과정이 다름
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

  return <h2>Counter: {counter}</h2>;
}

// 두 번째 Counter 컴포넌트 (의존성 배열에 [] 포함)
function Counter2() {
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

  return <h2>Counter: {counter}</h2>
}

// forwardRef를 사용하는 이유:
// 1. 부모 컴포넌트에서 자식 컴포넌트의 DOM 요소에 직접 접근할 수 있게 해줍니다.
// 2. 고차 컴포넌트(HOC)나 기타 래퍼 컴포넌트를 통해 ref를 전달할 때 유용합니다.
// 3. 재사용 가능한 컴포넌트 라이브러리를 만들 때, 사용자가 내부 DOM 요소에 접근할 수 있게 해줍니다.
const MyInput = forwardRef(function MyInput({ text, value, onChange, name, shouldFocus }) {
  const inputRef = useRef(null);

  useEffect(() => {

    if (shouldFocus) {
      inputRef.current.focus();
    }

    return () => {
      console.log('unmount');
    }
  }, [inputRef]); // inputRef를 의존성 배열에 추가

  return (
    <label>
      <span>{text}을 입력하세요: </span>
      <input type="text" ref={inputRef} onChange={onChange} value={value} name={name} />
    </label>
  );
});

// displayName 설정
MyInput.displayName = 'MyInput';

function ScrollLogger() {
  useEffect(() => {
    function handleScroll() {
      console.log('ScrollLogger component: scrollY =', window.scrollY);
    }
    console.log('ScrollLogger component: Adding scroll event listener');
    window.addEventListener('scroll', handleScroll);

    return () => {
      console.log('ScrollLogger component: Removing scroll event listener');
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return <h2>ScrollLogger</h2>
}

function Counter() {
  const [count, setCount] = useState(0);

  let intervalId = 0;

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

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return <h2>Counter: {count}</h2>
}


function VideoPlayer({ src, isPlaying }) {
  const videoRef = useRef(null);

  // useEffect는 return 이후에 실행이 된다.
  // 외부에서 전달된 isPlaying의 값에 따라서 실행되어야 함.
  // 의존성 배열에 값을 지정하면 지정된 값이 변경될때만 실행됨.
  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying])

  // 실행순서 기록
  // 1) 컴포넌트 내 return. 2) useEffect 실행. 3) isPlaying state 값.

  return <video src={src} ref={videoRef} className="video" loop playsInline></video>
}

export default function Form() {
  const inputRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showScrollLogger, setShowScrollLogger] = useState(true);
  const [showCounter, setShowCounter] = useState(true);

  const [isShow, setIsShow] = useState(false);
  const [names, setNames] = useState({
    firstName: 'Taylor',
    lastName: 'Swift',
  });

  function handleClick() {
    inputRef.current.focus();
  }

  function handleVideoClick() {
    setIsPlaying(!isPlaying);
  }

  function handleChangeName(e) {
    setNames({ ...names, [e.target.name]: e.target.value });
  }

  return (
    <div className="app">
      <div className="container">
        <div className="section">
          <h2>입력 포커스</h2>
          <input id='loginId' type="text" ref={inputRef} placeholder="여기에 입력하세요" />
          <button type='button' onClick={handleClick}>입력필드로 포커스 이동</button>
        </div>

        <div className="section">
          <h2>비디오 컨트롤</h2>
          <button id="videoControl" onClick={handleVideoClick}>
            {isPlaying ? 'Stop' : 'Start'}
          </button>
          <div className="video-container">
            <VideoPlayer
              src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
              isPlaying={isPlaying}
            />
          </div>
        </div>


        <div className="section">
          <button type='button' onClick={() => setShowScrollLogger(!showScrollLogger)}>
            ScrollLogger 컴포넌트 토글
          </button>
          {showScrollLogger && <ScrollLogger />}
        </div>

        <div className="section">
          <button type='button' onClick={() => setShowCounter(!showCounter)}>
            Counter 컴포넌트 토글
          </button>
          {showCounter && <Counter />}
        </div>


        {' '}
        <button type='button' onClick={() => setIsShow(!isShow)}>
          form {isShow ? 'hide' : 'show'}
        </button>
        {isShow && (
          <div className='form_wrap'>
            {<MyInput text={'이름'}
              value={names.firstName}
              onChange={handleChangeName}
              name='firstName'
              shouldFocus={true}
            />}
            {<MyInput text={'성'} value={names.lastName} onChange={handleChangeName} name='lastName' />}
            <p>안녕하세요, <b>{names.firstName} {names.lastName}</b></p>
          </div>
        )}

        {' '}
        <Counter2 />
        <CounterWithDependency />
      </div>
    </div>
  )
}