import {useState} from 'react'
import './App.css';


export default function App() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com',
  });

  function handleChange(e) {
    
    setPerson(person => ({...person, [e.target.name]: e.target.value}));
  }

  return (
    <>
      <div>
        <label>
          First name:
          <input name='firstName' value={person.firstName} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Last name:
          <input name='lastName' value={person.lastName} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input name='email' value={person.email} onChange={handleChange} />
        </label>
      </div>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
}
