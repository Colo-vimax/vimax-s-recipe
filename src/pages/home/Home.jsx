import React, { useState } from 'react'
import { useEffect } from 'react'
import { projectFirestore } from '../../firebase/config'


// components
import RecipeList from '../../components/RecipeList'

// styles
import './Home.css'



const Home = () => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError]= useState(null)

  useEffect(() => {
    setIsPending(true)
    // SNAPSHOT
    const unsub = projectFirestore.collection('recipes').onSnapshot(snapshot => {
      
      // EMPTY
      if (snapshot.empty) {
        setError("Recipes not found!")
        setIsPending(false)      
      }else{
        let results = []
        snapshot.docs.forEach(doc => {
          results.push({id: doc.id, ...doc.data()})        
        });
        setData(results)
        setIsPending(false)

      }
    },(err) => {
      setError(err)
      setIsPending(false)
    })
    return () => unsub()

  },[])
  return (
    <div className='home'>
      {error &&  <div className='error'>{ error }</div>}
      {isPending && <div className='loading'>loading..</div>}
      {data && <RecipeList recipes={data} / >}
    </div>
  )
}

export default Home