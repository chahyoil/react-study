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

  function handleChangeName(e) {
    setPerson({
      ...person,
      name: e.target.value,
    });
  }

  function handleChangeTitle(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });
  }

  function handleChangeCity(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value,
      },
    });
  }

  function handleChangeImage(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value,
      },
    });
  }

  return (
    <>
      <div>
        <label>
          Name:
          <input value={person.name} onChange={handleChangeName} />
        </label>
      </div>
      <div>
        <label>
          Title:
          <input value={person.artwork.title} onChange={handleChangeTitle} />
        </label>
      </div>
      <div>
        <label>
          City:
          <input value={person.artwork.city} onChange={handleChangeCity} />
        </label>
      </div>
      <div>
        <label>
          Image:
          <input value={person.artwork.image} onChange={handleChangeImage} />
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