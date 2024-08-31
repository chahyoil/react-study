import './App.css';
import { useState } from 'react';

const initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye' },
  { id: 2, name: 'Louise Nevelson' },
];

// 배열에 요소 추가
export default function List() {
  const [artists, setArtists] = useState(initialArtists);

  return (
    <div>
      <h2>영감을 주는 조각가:</h2>
      <ul>
        {artists.map((artists) => (
          <li key={artists.id}>
            {artists.name}
            <button type='button' onClick={() => {
              setArtists(artists.filter((item) => item.id !== artists.id))}}>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
