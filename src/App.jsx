import { useState } from 'react';
import './App.css';
import { useImmer } from 'use-immer';

export default function Form() {
  const [person, setPerson] = useImmer({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    },
  });

  function handleChange(e) {
    if (e.target.name === 'name') {
      setPerson((draft)=>{
        draft.name = e.target.value;
      });
    } else {
      setPerson((draft) => {
        draft.artwork[e.target.name] = e.target.value;
      });
    }
  }

  return (
    <>
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
    </>
  );
}
