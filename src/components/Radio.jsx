import React from 'react'

export default function Radio({children, name, checked, onChange, value}) {
  return (
    <label className="radio">
        <input 
            type="radio" 
            className="blind" 
            name={name} 
            checked={checked} 
            onChange={onChange}
            value={value}/>
        {children}
    </label>
  )
}
