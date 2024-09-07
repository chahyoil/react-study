import React from 'react'

export default function CheckBox({children, checked, onChange}) {
  return (
    <label className="checkbox">
        <input 
            type="checkbox" 
            className="blind" 
            checked={checked}
            onChange={onChange}/>
        {children}
    </label>
  )
}
