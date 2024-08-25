import './App.css';

function Button({onClick, children}) {
  return (
    <button className='btn' onClick={onClick}>{children}</button>
  )
}

function PlayButton({movieName}) {
  function handlePlayMovie() {
    alert(`"${movieName}" Play`);
  }

  return <Button onClick={handlePlayMovie}>"{movieName}" Play</Button>
}

function UploadButton() {
  return <Button onClick={() => alert('업로드중')}>"Upload"</Button>
}


export function Toolbar() {

  return (
    <div className='toolbar'>
        <PlayButton movieName='The Matrix'/>
        <PlayButton movieName='Inception'/>
        <UploadButton/>
    </div>
  )
}
