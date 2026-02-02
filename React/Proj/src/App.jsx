import { useState } from 'react'
import './App.css'
import { createContext } from 'react'


const ThemeContext = createContext('light')

function App() {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`app ${theme}`}>
        <h1>Current Theme: {theme}</h1>
        <button className='btn'
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle Theme
        </button>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
