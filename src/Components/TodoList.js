import React, { Component } from 'react'
import { arrayMove } from 'react-sortable-hoc'
import TodoListItems from './TodoListItems'
import TodoListStatus from './TodoListStatus'
import TodoListAdd from './TodoListAdd'

import './TodoList.css';

class TodoList extends Component {

  state = {
    tasks: [
      { completed: false, text: 'Pick up dry cleaning' },
      { completed: false, text: 'Source ingredients for dinner' },
      { completed: false, text: 'Purchase travel insurance' }
    ]
  }

  constructor(props) {
    super(props)
    this.onSortEnd = this.onSortEnd.bind(this)
    this.onToggleTask = this.onToggleTask.bind(this)
    this.onRemoveTask = this.onRemoveTask.bind(this)
    this.onAddTask = this.onAddTask.bind(this)
  }

  onSortEnd({ oldIndex, newIndex }) {
    const tasks = this.state.tasks

    if(!tasks[oldIndex] || !tasks[newIndex]) {
      return
    }
    
    this.setState({
      tasks: arrayMove(this.state.tasks, oldIndex, newIndex),
    })
  }

  onToggleTask(index) {
    const newState = {
      tasks: [...this.state.tasks]
    }

    index = parseInt(index, 10)

    if(!newState.tasks[index]) {
      return
    }

    const changedTask = newState.tasks[index]
    changedTask.completed = !changedTask.completed

    this.setState(newState)
  }

  onRemoveTask(index) {
    const newTasks = [...this.state.tasks]

    if(!newTasks[index]) {
      return
    }

    newTasks.splice(index, 1)

    this.setState({
      tasks: newTasks
    })
  }

  onAddTask(text) {
    text = String(text)
    if(!text.trim()) {
      return
    }

    const newTasks = [...this.state.tasks]
    newTasks.push({ completed: false, text: text })
    this.setState({
      tasks: newTasks
    })
  }

  render() {

    let completedTotal = 0

    for(let task of this.state.tasks) {
      if(task.completed) {
        completedTotal++
      }
    }
    return (
      <div className="todo-list">
        <TodoListStatus total={this.state.tasks.length} completed={completedTotal} />
        <TodoListItems 
          tasks={this.state.tasks}
          onSortEnd={this.onSortEnd}
          distance={2}
          lockToContainerEdges={true}
          onToggleTask={this.onToggleTask}
          onRemoveTask={this.onRemoveTask}
        />
        <TodoListAdd onAddTask={this.onAddTask} />
      </div>
    )
  }
}

export default TodoList