import { useContext } from "react"
import { ThemeContext } from "../../App"

export default function Footer() {
    const {isDarkMode, toggleTheme} = useContext(ThemeContext);

  return (
    <footer className={`footer ${isDarkMode ? 'dark' : ''}`}>
        <h1>Footer</h1>
    </footer>
  )
}