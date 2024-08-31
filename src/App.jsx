import './App.css';
import { useState } from 'react';

function Panel({title, isActive, children, onShow}) {
  return (
    <div className="panel">
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button type="button" onClick={onShow}>Show</button>}
    </div>
  )
}

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='accordion'>
    <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
        >
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from, the Kazakh word for "apple" and is often translated
        as "full of apples". In fact, the region surrounding Almaty is thought
        to be the ancestral home of the apple, and the wild Malus sieversii is
        considered a likely candidate for the ancestor of the modern domestic
        apple.
      </Panel>
      <Panel
        title="Nonono"
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(2)}
        >
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="GoGoGo"
        isActive={activeIndex === 3}
        onShow={() => setActiveIndex(3)}
        >
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
    </div>
  )
}
