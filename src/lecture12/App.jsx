import {useState, createContext} from 'react';

import './App.css';
import AboutTab from './components/about/AboutTab';
import Header from './components/comm/Header';
import Footer from './components/comm/Footer';

// 전역컨텍스트
export const ThemeContext = createContext(null);

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleTheme() {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark')
  }

  return (
    <div className='app'>
      <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
        <Header />
        <AboutTab />
        <main className='container'>메인컨텐츠</main>
        
        <Footer/>
      </ThemeContext.Provider>
    </div>
  )
}