import './App.css';
import { useRef ,useState, useEffect} from 'react';

function VideoPlayer({src, isPlaying}) {
  const videoRef = useRef(null);

  // useEffect는 return 이후에 실행이 된다.
  // 외부에서 전달된 isPlaying의 값에 따라서 실행되어야 함.
  // 의존성 배열에 값을 지정하면 지정된 값이 변경될때만 실행됨.
  useEffect(() => {
    if(isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying])

  // 실행순서 기록
  // 1) 컴포넌트 내 return. 2) useEffect 실행. 3) isPlaying state 값.
  

  return <video src={src} ref={videoRef} className="video" loop playsInline></video>
}

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <div>{count}</div>
        <button onClick={()=>{setCount(count + 1)}}>+1</button>
      </div>
      <button onClick={() => {setIsPlaying(!isPlaying)}}>
        {isPlaying ? 'pause' : 'play'}
      </button>
      <VideoPlayer src="https://www.w3schools.com/html/mov_bbb.mp4" isPlaying={isPlaying}/>
    </div>
  )
}
