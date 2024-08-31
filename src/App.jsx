import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid"; // ES Modules

function Panel({title, isActive, text, onShow}) {
  return (
    <div className="panel">
      <h3>{title}</h3>
      {isActive ? <p>{text}</p> : <button type="button" onClick={onShow}>Show</button>}
    </div>
  )
}

const initPanel = [
  {id : uuidv4(), title : "About", content : "With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city."},
  {id : uuidv4(), title : "History", content : "The city was founded in 1929 by the municipality of Almaty. The city's name was changed to Almaty city in 1950. In 1997, Almaty became the capital of the country."},
  {id : uuidv4(), title : "Culture", content : "Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city."},
  {id : uuidv4(), title : "Food", content : "The city was founded in 1929 by the municipality of Almaty. The city's name was changed to Almaty city in 1950. In 1997, Almaty became the capital of the country."},
  {id : uuidv4(), title : "Transport", content : "Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city."},
  {id : uuidv4(), title : "Culture", content : "The city was founded in 1929 by the municipality of Almaty. The city's name was changed to Almaty city in 1950. In 1997, Almaty became the capital of the country."},
]

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='accordion'>
    <h2>Almaty, Kazakhstan</h2>
      {initPanel.map((panel) => (
        <Panel
          key={panel.id}
          title={panel.title}
          text={panel.content}
          isActive={activeIndex === panel.id}
          onShow={() => setActiveIndex(panel.id)}
          >
        </Panel>
      ))}
    </div>
  )
}
