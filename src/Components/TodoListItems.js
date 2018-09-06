import React from 'react'
import { SortableContainer } from 'react-sortable-hoc'
import TodoListItem from './TodoListItem'

import './TodoListItems.css';

const TodoListItems = SortableContainer(props => {

  return(
    <ul className="todo-list-items">
      {props.tasks.map((task, index) => (
        <TodoListItem 
          text={task.text} 
          completed={task.completed} 
          position={index} 
          index={index}
          key={index}
          onToggleTask={props.onToggleTask}
          onAddTask={props.onAddTask}
          onRemoveTask={props.onRemoveTask}
        />
      ))}
    </ul>
    )
})

export default TodoListItems