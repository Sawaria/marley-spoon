import React from 'react'
import PropTypes from 'prop-types'
import loader from '../../loader.svg'
import './Loading.css'

const Loading = props => {
  const { loading, children } = props
  if (!loading) {
    return children
  }
  return (
    <div>
      <div>Loading</div>
      <img src={loader} className="loader" alt="loader" />
    </div>
  )
}

Loading.defaultProps = {
  loading: true,
  children: [],
}

Loading.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.node,
}

export default Loading
