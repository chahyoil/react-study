import './App.css';
import { useRef ,useState} from 'react';


// 스톱워치
export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
    // JS방식도 가능하지만 렌더링시 선택이 안되는 경우가 있기에, 쓸 때 조심.
    // document.querySelector('#loginId').focus();
  }

  return (
    <div>
      <input id='loginId' type="text"  ref={inputRef}/>
      <button type='button' onClick={handleClick}>입력필드로 포커스 이동</button>
    </div>
  )
}

