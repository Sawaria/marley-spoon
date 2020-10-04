import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import './RecipeList.css'

const RecipeList = props => {
  const { recipes, isLoading } = props

  return (
    <Loading loading={isLoading}>
      <div className="list">
        {recipes.map(recipe => (
          <div className="recipe" key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>
              <img src={recipe.photoUrl} alt={recipe.id} />
              <div className="title">{recipe.title}</div>
            </Link>
          </div>
        ))}
      </div>
    </Loading>
  )
}

RecipeList.defaultProps = {
  recipes: [],
}

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      photoUrl: PropTypes.string,
      title: PropTypes.string,
    })
  ),
}

export default RecipeList
