import React from 'react'
import PropTypes from 'prop-types'

import './TodoListStatus.css';

const TodoListStatus = props => {
  return (
    <div className="todo-list-status">
      {props.completed} out of {props.total} tasks completed
    </div>
  )
}

TodoListStatus.propTypes = {
  completed: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
}

export default TodoListStatus