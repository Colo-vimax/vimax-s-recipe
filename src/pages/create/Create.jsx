import React from 'react'
import { useState, useRef } from 'react'


// styles
import './Create.css'

const Create = () => {
  const [title , setTitle] = useState('')
  const [time , setTime] = useState(0)
  const [method, setMethod] = useState('')
  // value
  const [newIngredients, setnewIngredients] = useState("")
  // array
  const [ingredients, setIngredients] = useState
  const handleForm = (e) => {
    e.preventDefault()
    console.log(title ,time , method)

  } 

  const handleAdd = (e) => {
    e.preventDefault()
    // value no space

    if (newIngredients && !ingredients.includes()) {
      
    }
    // no dups
    // clear
    // focus input
    
  }

  return (
    <div className='create'>
      <h2 className='page-title'>Add a recipient:</h2>
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
                  required
                   />
                  <button className='button' onClick={handleAdd}>Add</button>
                </div>

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