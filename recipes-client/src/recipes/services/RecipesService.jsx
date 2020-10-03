import axios from '../../base-axios'

const fetchRecipeDetail = id => {
  const { get } = axios
  return get(`/recipes/${id}`)
}

const fetchRecipesList = () => {
  const { get } = axios
  return get(`/recipes`)
}

export { fetchRecipeDetail, fetchRecipesList }

// export const getRecipe = (id) => httpClient.get(`/recipes/${id}`)
//   .then((response) => mapRecipe(response.data))
//   .catch((error) => {
//     if (error.response && error.response.status === 404) {
//       return null
//     }

//     throw error
//   })
