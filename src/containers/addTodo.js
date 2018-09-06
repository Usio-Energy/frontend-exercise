import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todoActions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
      <h3>Add new task to do below</h3>
      
        <input className='todoEntry'
          ref={node => {
            input = node
          }}
        />
        <br/>
        <button type="submit" className='todoBtn'>
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo