import './App.css';
import React, { useState, useRef, useEffect, forwardRef } from 'react';

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

export default function Input() {
  const [isShow, setIsShow] = useState(false);
  const [names, setNames] = useState({
    firstName : 'Taylor',
    lastName : 'Swift',
  });

  function handleChangeName(e) {
    setNames({...names, [e.target.name] : e.target.value});
  }

  return (
    <div className='app'>
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
    </div>
  );
}
