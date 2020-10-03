import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import RecipeDetail from '../components/RecipeDetail'
import { fetchRecipeDetail } from '../services/RecipesService'

const RecipeDetailContainer = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [recipe, setRecipe] = useState({})
  const { id } = useParams()

  useEffect(() => {
    fetchRecipeDetail(id).then(res => {
      setRecipe(res.data)
      setIsLoading(false)
    })
  }, [id])

  return <RecipeDetail recipe={recipe} isLoading={isLoading} />
}

export default RecipeDetailContainer
