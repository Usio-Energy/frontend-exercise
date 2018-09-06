import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './TodoListAdd.css';

class TodoListAdd extends Component {

  static propTypes = {
    onAddTask: PropTypes.func.isRequired
  }

  state = {
    text: ''
  }

  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange(event) {
    this.setState({ text: event.target.value })
  }

  onSubmit(event) {
    event.preventDefault()
    const text = this.state.text
    
    if(text) {
      this.props.onAddTask(this.state.text)
      this.setState({ text: '' })
    }
  }
  render() {
    return(
      <div className="todo-list-add">
        <form onSubmit={this.onSubmit} className="todo-list-add__form">
          <input type="text" className="todo-list-add__input" value={this.state.text} onChange={this.onChange} placeholder="Add task" />
          <input type="submit" className="todo-list-add__button" value="Add" />
        </form>
      </div>
    )
  }
}

export default TodoListAdd