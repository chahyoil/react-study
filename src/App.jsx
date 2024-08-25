import { useState } from 'react';
import './App.css';

export default function Form() {
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    },
  });

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
    <>
      <div>
        <label>
          Name:
          <input value={person.name} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Title:
          <input value={person.artwork.title} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          City:
          <input value={person.artwork.city} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Image:
          <input value={person.artwork.image} onChange={handleChange} />
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
    </>
  );
}