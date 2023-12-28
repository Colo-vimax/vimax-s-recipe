import React from 'react'
import { useState, useRef } from 'react'
import { useFetch } from '../../hooks/082 useFetch'

// styles
import './Create.css'

const Create = () => {
  const [title , setTitle] = useState('')
  const [time , setTime] = useState(0)
  const [method, setMethod] = useState('')
  // value
  const [newIngredients, setnewIngredients] = useState("")
  // array
  const [ingredients, setIngredients] = useState([])
  const inputRef = useRef(null)

  const { postData, data, error} = useFetch("http://localhost:3000/recipes", 'POST')
  
  const handleForm = (e) => {
    e.preventDefault()
    postData({title, ingredients, method,  time: time + "minutes"})

  } 

  const handleAdd = (e) => {
    e.preventDefault()
    // value no space
    const ing = newIngredients.trim()
       // no dups
    if (newIngredients && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => 
        [...prevIngredients,
        ing]
     )   
    // clear
      setnewIngredients("")
    // focus input
      inputRef.current.focus();
    }     
  }

  return (
    <div className='create'>
      <h2 className='page-title'>Add a Recipe:</h2>
      <form onSubmit={handleForm} >
              <label>
                <span>Enter title:</span>
                <input 
                  type="text"
                  name="title"
                  value={title}
                  onChange={e => setTitle(e.target.value) }
                  required
                  />
              </label>
              <label>
                <span>Enter the cooking time(minutes):</span>
                <input 
                  type="number"
                  name="time"
                  value={time}
                  onChange={e => setTime(e.target.value) }
                  required
                  />
              </label>
              {/* ingredients */}
              <label>
                <span>Recipe ingredients:</span>
                <div className="ingredients">
                  <input type="text"
                  onChange={e => setnewIngredients(e.target.value)}
                  value={newIngredients}
                  ref={inputRef}
                  required
                   />
                  <button className='button' type='add' onClick={handleAdd}>Add</button>
                </div>
                <p className='p' >ingredient:{ingredients.map(ing => <li key={ing}><em>{ing}</em></li>)}</p>

              </label>

              <label>
                <span>Enter the method:</span>
                <textarea 
                  onChange={e => setMethod(e.target.value)}
                  value={method}
                  required
                   />                  
              </label>
              
              <button className="create button" type='submit' onClick={handleForm}>Submit</button>
      </form>
    </div>

  )
}

export default Create