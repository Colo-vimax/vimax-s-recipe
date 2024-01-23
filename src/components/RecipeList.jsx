import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import trashCan from '../assets/delete-icon.svg'
import { projectFirestore } from '../firebase/config'


// styles
import './RecipeList.css'

function RecipeList({ recipes }) {
  const { mode } = useTheme()   

  const handleClick = (id) => {
    projectFirestore.collection('recipes').doc(id).delete()
  }
  
  return ( 
    <div className='recipe-list'>
        {recipes && recipes.map(recipe => (
        <div key={recipe.id} className={`card ${mode}`}>        
          <h2 >{recipe.title}</h2>
          <p>{recipe.cookingTime} to make</p>

          <div>{ recipe.method && recipe.method.substring(0, 100)} ...</div>
          <Link to={`/recipe/${recipe.id}`} className='a'>Cook this</Link>
          <img 
          src={trashCan} 
          alt="delete can" 
          className='delete'
          onClick={() => handleClick(recipe.id)}
          />
        </div>))}
    </div>
  )
}

export default RecipeList