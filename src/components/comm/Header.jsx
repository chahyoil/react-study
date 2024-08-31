import { useContext } from "react"
import { ThemeContext } from "../../App"
import Gnb from "./Gnb";

const initGnb = [
    {menu: '주메뉴1'},
    {menu: '주메뉴2'},
    {menu: '주메뉴3'},
    {menu: '주메뉴4'},
]

export default function Header() {
    const {isDarkMode, toggleTheme} = useContext(ThemeContext);

  return (
    <header className={`header ${isDarkMode ? 'dark' : ''}`}>
        <h1>Header</h1>
        <Gnb items = {initGnb}/>
        <button type='button' onClick={toggleTheme} className='btn' style={{
            background: isDarkMode ? 'white' : 'black'
            , color: isDarkMode ? 'black' : 'white'
            }}>
            Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
    </header>
  )
}
