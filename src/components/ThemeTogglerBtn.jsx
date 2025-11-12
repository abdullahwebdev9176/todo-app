import React from 'react'
import { useTheme } from '../contextApi/themeContext'
import { Moon, Sun } from 'lucide-react'
const ThemeTogglerBtn = () => {

    const {theme, toggleTheme } = useTheme()

  return (
    <>
        <button onClick={toggleTheme} className='p-2 rounded-full bg-gray-300 dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition outline-none'>
            {theme === 'dark' ? <Sun /> : <Moon /> }
        </button>
    </>
  )
}

export default ThemeTogglerBtn