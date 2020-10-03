import React, { useState, useEffect } from 'react'
import RecipeDetail from '../components/RecipeDetail'
import { useParams } from 'react-router-dom'
import { fetchRecipeDetail } from '../services/RecipesService'

const RecipeDetailContainer = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [recipe, setRecipe] = useState({})
  const { id } = useParams()

  useEffect(() => {
    fetchRecipeDetail(id)
      .then(res => {
        setRecipe(res.data)
        setIsLoading(false)
      })
      .catch((e) => console.log(e));
  }, [id])

  return <RecipeDetail recipe={recipe} isLoading={isLoading}></RecipeDetail>
}

export default RecipeDetailContainer