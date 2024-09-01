import './App.css';
import React, { useState, useRef, useEffect, forwardRef } from 'react';

const MyInput = forwardRef(function MyInput({ text, onChange }, inputRef) {

  useEffect(() => {
    
    if (inputRef.current) {
      inputRef.current.focus();
    }

    return () => {
      console.log('unmount');
    }
  }, [inputRef]); // inputRef를 의존성 배열에 추가

  return (
    <label>
      <span>{text}을 입력하세요: </span>
      <input type="text" ref={inputRef} onChange={onChange}/>
    </label>
  );
});

// displayName 설정
MyInput.displayName = 'MyInput';

export default function Input() {
  const [isShow, setIsShow] = useState(false);
  const inputRef0 = useRef(null);
  const inputRef1 = useRef(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  return (
    <div className='app'>
        <button type='button' onClick={() => setIsShow(!isShow)}>
          form {isShow ? 'hide' : 'show'}
        </button>
        <div className='form_wrap'>
          {isShow && <MyInput ref={inputRef0} text={'이름'} onChange={handleFirstNameChange} />}
          {isShow && <MyInput ref={inputRef1} text={'성'} onChange={handleLastNameChange} />}
          <p>안녕하세요, <b>{firstName} {lastName}</b></p>
        </div>
    </div>
  );
}
