import React from 'react'
import { useFetch } from '../../hooks/082 useFetch'
import RecipeList from '../../components/RecipeList'

// styles
import './Home.css'


const Home = () => {
  const {data, isPending, error } = useFetch("http://localhost:3000/recipes")

  return (
    <div className='home'>
      {error &&  <div className='error'>{ error }</div>}
      {isPending && <div className='loading'>loading..</div>}
      {data && <RecipeList data={data} / >}
    </div>
  )
}

export default Home