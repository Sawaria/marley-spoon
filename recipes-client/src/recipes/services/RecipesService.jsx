import axios from '../../baseAxios'

const fetchRecipeDetail = async id => {
  const { get } = axios
  try {
    const { data: recipe } = await get(`/recipes/${id}`)
    return toRecipe(recipe)
  } catch (error) {
    throw error
  }
}

const fetchRecipesList = async () => {
  const { get } = axios
  try {
    const { data: recipes } = await get(`/recipes`)
    return recipes.map(recipe => toRecipe(recipe))
  } catch (error) {
    throw error
  }
}

const toRecipe = (recipe) => ({
  id: recipe.id,
  title: recipe.title,
  description: recipe.description,
  photoUrl: recipe.photo_url,
  chefName: recipe.chef_name,
  tagNames: recipe.tag_names
})

export { fetchRecipeDetail, fetchRecipesList }
