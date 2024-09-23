import './App.css';
import { people } from './lib/data';
import People from "./components/People";

export default function List() {
  // const listItems = people.map((person, index) => <li key={person}>{person + index}</li>);
  
  const chemists = people.filter((person) => person.profession === '화학자');
  const notChemists = people.filter((person) => person.profession !== '화학자');

  return (
    <section className='list_wrap'>
      <h2>과학자</h2>
      <h3>화학자</h3>
      <div className='list'>
        {chemists.map((person) => (
          <People key={person.id} person={person} />
        ))}
      </div>

      {/* <hr></hr> */}
      
      <h3>다른 과학자</h3>
      <div className='list'>
      {notChemists.map((person) => (
        <People key={person.id} person={person} />
      ))}
      </div>
    </section>
  )
}