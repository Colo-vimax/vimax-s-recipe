import React from 'react'
import { useTheme } from '../hooks/useTheme'
import modeIcon from '../../src/assets/mode-icon.svg'
// styles
import './ThemeSelector.css'

// LIST COLORS
const themeColors = ['#6495ED','#34495E','#DE3163']



function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme()

  const toggleMode = () => {
    changeMode(mode === 'dark' ? 'light': 'dark')
  }

  return (
    <div className='theme-selector'> 
        <div className="mode-toggle">
          <img 
          src={modeIcon} 
          alt="dark/light mode"
          onClick={toggleMode} 
          style={{filter: mode === 'dark'?'invert(100%)':'invert(20%)'}}
          />

        </div>
        <div className="theme-buttons">
            {/* LIST COLORS */}
            { themeColors.map(color => (
                <div
                key={color}
                onClick={() => changeColor(color)}
                style={{background : color}}
                />
            
            ))}

        </div>
    </div>
  )
}

export default ThemeSelector