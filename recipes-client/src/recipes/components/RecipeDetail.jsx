import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import Loading from './Loading'
import './RecipeDetail.css'

const RecipeDetail = props => {
  const { recipe, isLoading } = props

  const tags = () => {
    if (!recipe.tagNames || recipe.tagNames.length === 0) {
      return <></>
    }

    return (
      <div className="desciption">
        {(recipe.tagNames || []).map(tag => (
          <span>#{tag} &nbsp;</span>
        ))}
      </div>
    )
  }

  return (
    <Loading loading={isLoading}>
      <div className="wrapper">
        <div className="title">{recipe.title}</div>
        <div className="detail">
          <div className="image">
            <img src={recipe.photoUrl} alt={recipe.id} />
          </div>
          <div className="line" />
          <div className="right-flex">
            {recipe.chefName && (
              <div className="desciption">
                Recipe by: <b>{recipe.chefName}</b>
              </div>
            )}
            <div className="desciption">
              <ReactMarkdown source={recipe.description} />
            </div>
            {tags()}
          </div>
        </div>
      </div>
      <div className="link">
        {recipe.title && <Link to="/">Go to Recipes list page</Link>}
      </div>
    </Loading>
  )
}

RecipeDetail.defaultProps = {
  recipe: {},
}

RecipeDetail.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string,
    photoUrl: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    chefName: PropTypes.string,
    tagNames: PropTypes.arrayOf(PropTypes.string),
  }),
}

export default RecipeDetail
