import './App.css';
import {useState, createContext} from 'react';
import Header from './components/comm/Header';
import Footer from './components/comm/Footer';

// 전역컨텍스트
export const ThemeContext = createContext(null);

export default function App() {

  function toggleTheme() {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark')
  }

  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className='app'>
      <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
        <Header />
        <main className='container'>메인컨텐츠</main>
        <Footer/>
      </ThemeContext.Provider>
    </div>
  )
}
