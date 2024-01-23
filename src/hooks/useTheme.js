import { useContext } from "react";

import { ThemeContext } from '../context/ThemeContext'

// CONSUMING THE CONTEXT

export const useTheme = () => {
    const context =useContext(ThemeContext)
    if ( context === undefined) {
        throw new Error("useTheme() must be inside a Theme Provider")       
    }
    return context
}