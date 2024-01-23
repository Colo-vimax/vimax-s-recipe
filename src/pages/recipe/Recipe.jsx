import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
// import { useFetch } from '../../hooks/082 useFetch';
import { useTheme } from "../../hooks/useTheme";
import { projectFirestore } from "../../firebase/config";

// styles
import './Recipe.css'

const Recipe = () => {
  const { id } = useParams()
  const { mode } = useTheme()

  const [recipe, setRecipe] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  
  // const url = `http://localhost:3000/recipes/${id}`;

  // const {error, isPending, data:recipe } = useFetch(url)
   useEffect(() => {
    setIsPending(true)
    // DOCS
    projectFirestore.collection("recipes").doc(id).onSnapshot(doc => {
      // EMPTY
      if (doc.exists) {
        setRecipe(doc.data())
        setIsPending(false)      
      }else {
        setError("could not fetch recipe")
        setIsPending(false)
      }
    }          
      ,(err => {
        setError(err)
        setIsPending(false)
      })
    )

   },[id])

   const handleClick = () => {
    projectFirestore.collection('recipes').doc(id).update(
      { title : "Banana smoothiee" }
    )
   }

  return (
    <div className={`recipe ${mode}`}>
      {error && <div className='error'>{ error }</div>}
      {isPending && <div className='loading'>loading ...</div>}
      {recipe && <div>
        <h2 className='page-title'>{recipe.title}</h2>
        <p>{recipe.cookingTime} to make</p>
        <ul>
          {recipe.ingredients && recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
        </ul>        
        <p className='method'>{recipe.method}</p>
        <button onClick={handleClick}>Update me</button>
      </div>}
    </div>
  )
}

export default Recipe