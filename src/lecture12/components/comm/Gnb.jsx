import React from 'react'
import { useContext } from "react"
import { ThemeContext } from "../../App"

export default function Gnb({items}) {
    const {isDarkMode} = useContext(ThemeContext);
    console.log(`Gnb isDarkMode: ${isDarkMode}`);

    return (
        <ul className='gnb'>
        {items.map((item, index) => <li key={index}>{item.menu}</li>)}
        </ul>
    )
}