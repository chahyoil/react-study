import './App.css';
import {useState} from 'react'
import {sculptureList} from './lib/data'

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleChangeIndex(change) {
    if (sculptureList && sculptureList.length > 0 && index + change >= 0 && index + change < sculptureList.length) {
      setIndex(index + change);
    }
  }

  function handleToggleDetails() {
    setShowMore(!showMore);
  }

  const sculpture = sculptureList[index];

  return (
    <div className='gallery'>
      <button type='button' className='btn' onClick={() => {handleChangeIndex(-1)}}>Prev</button>
      <button type='button' className='btn' onClick={() => {handleChangeIndex(1)}}>Next</button>
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <div className='paging'>
        ({index + 1} of {sculptureList.length}) 
      </div>
      <div className='img_wrap'>
        <img src={sculpture.url} alt={sculpture.alt}/>
      </div>
      <button type='button' className='toggle_btn' onClick={handleToggleDetails}>
        {showMore ? 'Hide' : 'Show'}
      </button>
      {showMore &&<p>{sculpture.description}</p>}
    </div>
  )
}

