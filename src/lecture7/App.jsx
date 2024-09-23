import React, { useState, useEffect } from 'react';
import './App.css';

function Button({onClick, children, isDarkMode}) {
  return (
    <button className={`btn ${isDarkMode ? 'dark-mode' : ''}`} onClick={onClick}>{children}</button>
  )
}

function PlayButton({movieName, isDarkMode}) {
  function handlePlayMovie() {
    alert(`"${movieName}" Play`);
  }

  return <Button onClick={handlePlayMovie} isDarkMode={isDarkMode}>"{movieName}" Play</Button>
}

function UploadButton({isDarkMode}) {
  return <Button onClick={() => alert('업로드중')} isDarkMode={isDarkMode}>"Upload"</Button>
}

export default function Toolbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleChangeBG() {
    setIsDarkMode(!isDarkMode);
  }

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? 'black' : 'white';
  }, [isDarkMode]);

  return (
    <div className={`toolbar ${isDarkMode ? 'dark-mode' : ''}`}>
        <PlayButton movieName='The Matrix' isDarkMode={isDarkMode}/>
        <PlayButton movieName='Inception' isDarkMode={isDarkMode}/>
        <UploadButton isDarkMode={isDarkMode}/>
        <button onClick={handleChangeBG} className={`btn ${isDarkMode ? 'dark-mode' : ''}`}>
          Light Switch
        </button>
    </div>
  )
}