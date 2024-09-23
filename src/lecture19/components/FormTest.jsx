import React from 'react'
import Radio from './components/Radio.jsx';
import CheckBox from './components/CheckBox.jsx';

export default function FormTest() {
  const [isChecked, setIsChecked] = useState(true);
  const [selectedRadio, setSelectedRadio] = useState('react');
  
  function handleChange() {
    setIsChecked(!isChecked);
  }

  function handleChangeRadio(e) {
    setSelectedRadio(e.target.value);
  }

  return (
    <div>
        <CheckBox 
          checked={isChecked} 
          onChange={handleChange}>동의합니다
        </CheckBox>
        <Radio name="front" value={'react'} checked={selectedRadio === 'react'} onChange={handleChangeRadio}>리액트</Radio>
        <Radio name="front" value={'vue'} checked={selectedRadio === 'vue'} onChange={handleChangeRadio}>뷰</Radio>
    </div>
  )
}