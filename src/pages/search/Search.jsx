import React from 'react'
import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/082 useFetch'
import RecipeList from '../../components/RecipeList'


// styles
import './Search.css'

const Search = () => {
  // query string
  const queryString = useLocation().search
  // input
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')

  // const url = 'http://localhost:3000/recipes?q' + query
  // const { data, isPending, error} = useFetch(url)

  const {data, isPending, error } = useFetch("http://localhost:3000/recipes");

  function filterRecipesByTitle(data, query) {
    // Convert the query to lowercase for case-insensitive matching
    const lowercaseQuery = query.toLowerCase();
  
    // Use the filter method to get only the items that match the query
    const filteredData = data?.filter(item => item.title.toLowerCase().includes(lowercaseQuery));
  
    return filteredData;
  }

  const filteredRecipes = filterRecipesByTitle(data,query);

  return (
    <div >
      <h2 className='page-title'>Recipes including "{query}"</h2>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>is loading..</p>}
      {!isPending && filteredRecipes && filteredRecipes.length === 0 && (
        <p className='no-recipe'>No recipes found for "{query}"</p>
      )}
      {filteredRecipes && filteredRecipes > 0 && 
      (<RecipeList data={filteredRecipes} />
      )}

    </div>
  )
}

export default Search