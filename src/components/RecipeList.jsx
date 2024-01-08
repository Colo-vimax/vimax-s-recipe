import React from 'react'
import { Link } from 'react-router-dom'

// styles
import './RecipeList.css'

function RecipeList({ data }) {   
  return ( 
    <div className='recipe-list'>
        {data && data.map(recipe => (
        <div key={recipe.id} className='card'>        
          <h2 >{recipe.title}</h2>
          <p>{recipe.cookingTime} to make</p>

          <div>{ recipe.method && recipe.method.substring(0, 100)} ...</div>
          <Link to={`/recipe/${recipe.id}`} className='a'>Cook this</Link>
        </div>))}
    </div>
  )
}

export default RecipeList