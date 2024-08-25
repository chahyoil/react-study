import './App.css';

export default function LightSwitch() {
  function handleChangeBG() {
    const bodyStyle = document.body.style;
    if(bodyStyle.backgroundColor  === 'black') {
      bodyStyle.backgroundColor = 'white';
    } else{
      bodyStyle.backgroundColor = 'black';
    }
  }
  
  return (
    <button onClick={handleChangeBG}>Light Switch</button>
  )
}
