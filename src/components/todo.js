import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text }) => (
    <li
      onClick={onClick}
    >
      <span style={ {
        textDecoration: completed ? 'line-through' : 'none'
      }}>{text}</span>
      
      <span>{completed ? ' X' :''}</span>
    </li>
    
  )
  
  Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }
  
  export default Todo