import React from 'react'



export default function Counter() {
  const [number, setNumber] = React.useState(0);
  
    return (
    <>
        <p>{number}</p>
        <button onClick={() => {
            setNumber(n => n + 1);
            setNumber(n => n + 1);
            setNumber(n => n + 1);
        }}>+3</button>
    </>
  )
}
