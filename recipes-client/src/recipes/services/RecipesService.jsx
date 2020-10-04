import axios from '../../baseAxios'

const fetchRecipeDetail = id => {
  const { get } = axios
  return get(`/recipes/${id}`)
}

const fetchRecipesList = () => {
  const { get } = axios
  return get(`/recipes`)
}

export { fetchRecipeDetail, fetchRecipesList }
