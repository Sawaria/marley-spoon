import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import Loading from './Loading'
import './RecipeDetail.css'

const RecipeDetail = props => {
  const { recipe, isLoading } = props

  return (
    <Loading loading={isLoading}>
      <div className='wrapper'>
        <div className='link'>
          {recipe.title && <Link to='/'>Go to Recipes list page</Link>}
        </div>
        <div className='detail'>
          <h4>{recipe.title}</h4>
          {recipe.chef_name && <div class='chef'>Recipe by: {recipe.chef_name}</div>}
          <div className='image' >
            <img src={recipe.photo_url} alt={recipe.id} />
          </div>
          {recipe.tag_names && (recipe.tag_names || []).map(tag => <span>#{tag} </span>)}
          <div className='desciption'>
            <ReactMarkdown source={recipe.description} />
          </div>
        </div>
      </div>
    </Loading>
  )
};

RecipeDetail.defaultProps = {
  recipe: {}
}

RecipeDetail.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string,
    photo_url: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    chef_name: PropTypes.string,
    tag_names: PropTypes.arrayOf(PropTypes.string)
  })
}

export default RecipeDetail;
