import { createContext, useReducer } from "react";

export const ThemeContext = createContext(null)

const ThemeReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':     
      return {...state, color: action.payload}

    case 'CHANGE_MODE':
      return {...state, mode: action.payload}
  
    default:
      return state
  }
}

export function ThemeProvider({children}) {
  const[state ,dispatch]=useReducer(ThemeReducer, { color: 'green', mode: 'dark'})

  const changeColor = (color) => {
    dispatch({ type: 'CHANGE_COLOR', payload: color})
  }

  const changeMode = (mode) => {
    dispatch({ type: 'CHANGE_MODE', payload:mode})
  }

  return (
    <div>
        <ThemeContext.Provider value={{ ...state, changeColor, changeMode}}>
            { children}
        </ThemeContext.Provider>
    </div>
  )
}

