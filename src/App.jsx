import './App.css';
import { useRef ,useState} from 'react';

// 스톱워치
export default function Form() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  function handleClick() {
    setIsPlaying(!isPlaying);

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

  }

  return (
    <>
      <button onClick={handleClick}>
        {isPlaying ? 'Stop' : 'Start'}
      </button>
      <video width="250" ref={videoRef}>
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  )
}

