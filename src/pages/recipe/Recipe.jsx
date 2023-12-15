import React from 'react'
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/082 useFetch';

// styles
import './Recipe.css'

const Recipe = () => {
  const { id } = useParams()
  const url = `http://localhost:3000/recipes/${id}`;

  const {error, isPending, data:recipe } = useFetch(url)
  return (
    <div className='recipe'>
      {error && <div className='error'>{ error }</div>}
      {isPending && <div className='loading'>loading ...</div>}
      {recipe && <div>
        <h2 className='page-title'>{recipe.title}</h2>
        <p>{recipe.cookingTime} to make</p>
        <ul>
          {recipe.ingredients && recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
        </ul>        
        <p className='method'>{recipe.method}</p>
      </div>}
    </div>
  )
}

export default Recipe