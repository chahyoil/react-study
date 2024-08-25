import './App.css';
import {useState} from 'react'

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function handleChangeFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleChangeLastName(e) {
    setLastName(e.target.value);
  }

  function handleReset() {
    setFirstName('');
    setLastName('');
  }

  return (
    <form onSubmit ={e => e.preventDefault()}>
      <input type="text" placeholder="first name" value={firstName} onChange={handleChangeFirstName} />
      <input type="text" placeholder="last name" value={lastName} onChange={handleChangeLastName}/>

      <p>{firstName} {lastName}</p>
      <button type="submit" onClick={handleReset}>Submit</button>
    </form>
  )
}
