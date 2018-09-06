import React from 'react'
import PropTypes from 'prop-types'
import { SortableElement } from 'react-sortable-hoc'

import './TodoListItem.css';

const TodoListItem = props => {
  const classes = ['todo-list-item']

  if(props.completed) {
    classes.push('todo-list-item--completed')
  }

  return (
    <li className={classes.join(' ')} title={props.text}>
      <label className="todo-list-item__toggle">
        <input 
          type="checkbox"
          checked={props.completed}
          onChange={event => props.onToggleTask(props.position)} 
        /> 
      </label>
      <span className="todo-list-item__text">{props.text}</span>
      <span 
        className="todo-list-item__remove" 
        title="Remove Task"
        role="img"
        aria-label="Remove Task"
        onClick={event => props.onRemoveTask(props.position)} 
      >❌</span>
    </li>
  )
}

TodoListItem.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  position: PropTypes.number.isRequired,
  onToggleTask: PropTypes.func.isRequired,
  onRemoveTask: PropTypes.func.isRequired,
}

// With sortable element HOC
const TodoListItemSortable = SortableElement(TodoListItem)

TodoListItemSortable.propTypes = {
  ...TodoListItem.propTypes,
  index: PropTypes.number.isRequired
}
export default TodoListItemSortable

// Raw component for testing
export { TodoListItem }