import React, { useState, useEffect } from 'react'
import RecipeList from '../components/RecipeList'
import { fetchRecipesList } from '../services/RecipesService'

const RecipeListContainer = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetchRecipesList().then(res => {
      setRecipes(res.data)
      setIsLoading(false)
    })
  }, [])

  return <RecipeList recipes={recipes} isLoading={isLoading} />
}

export default RecipeListContainer
