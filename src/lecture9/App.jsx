import './App.css';
import {useState} from 'react'

import Counter from './components/Counter'

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [position, setPosition] = useState({x: 0, y: 0});

  // const [person, setPerson] = useState({
  //   firstName: 'Barbara',
  //   lastName: 'Hepworth',
  //   email: 'bhepworth@sculpture.com',
  // });

  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    },
  });

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

  // function handleChange(e) {
  //   setPerson(person => ({...person, [e.target.name]: e.target.value}));
  // }

  // 두개의 상태를 동시에 업데이트 하는 방법
  function handleChange(e) {
    
    if(e.target.name == 'name') {
      setPerson({
        ...person,
        name:e.target.value,
      })
    } else {
        setPerson({
          ...person,
          artwork: {
            ...person.artwork,
            [e.target.name]:e.target.value
          },
        })
    }
  }

  return (
    <div className="container">
      <form onSubmit ={e => e.preventDefault()}>
        <input type="text" placeholder="first name" value={firstName} onChange={handleChangeFirstName} />
        <input type="text" placeholder="last name" value={lastName} onChange={handleChangeLastName}/>

        <p>{firstName} {lastName}</p>
        <button type="submit" onClick={handleReset}>Submit</button>
      </form>
      <Counter></Counter>

        {/* <div>
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
        </p> */}


      <div>
        <label>
          Name:
          <input name="name" value={person.name} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Title:
          <input name="title" value={person.artwork.title} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          City:
          <input name="city" value={person.artwork.city} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Image:
          <input name="image" value={person.artwork.image} onChange={handleChange} />
        </label>
      </div>
      
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    

    </div>    
  )
}