import './App.css';
import Gallery from './components/Gallery.jsx';
import CardProfile from './components/CardProfile.jsx';

// 자바스크립트에서 false 판정
// 0, '', null, undefined, NaN

function Item({name, isPacked}) {
  // if(isPacked) {
  //   return undefined;
  // }
  // return <li className='item'>✔{name}</li>

  // return <li className={`item ${isPacked ? 'checked' : ''}`}>{isPacked ? name : name + '✔'}</li>

  return <li className={`item ${isPacked ? 'checked' : ''}`}>
    {/* {name} {isPacked && '✔'} */}
    {name} {isPacked ? '✔' :'❌'}
  </li>
}

export default function App() {
  return (
    <section className="packing_list">
      <h2>Sally Ride`s Packing List</h2>
      <ul>
        <Item isPacked={true} name='우주복'></Item>
        <Item isPacked={true} name='황금잎이 달린 헷멧'></Item>
        <Item isPacked={false} name='가족사진'></Item>
      </ul>
    </section>
  )
}