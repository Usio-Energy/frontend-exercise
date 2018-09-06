import React from 'react'
import { shallow } from 'enzyme'

import { TodoListItem }  from './TodoListItem'

const getPropsTemplate = override => {

  const propsTemplate = {
    text: '',
    completed: false,
    position: 1,
    onToggleTask: jest.fn(),
    onRemoveTask: jest.fn()
  }

  return { ...propsTemplate, ...override }
}

describe('TodoListItem initialisation', () => {

  test('Initialises text correctly', () => {
    const text = 'Test task'
    const taskItem = shallow(<TodoListItem {...getPropsTemplate({ text })} />)
    expect(taskItem.find('.todo-list-item__text').text()).toEqual(text)
  })

  test('Initialises completed state correctly', () => {
    const taskItemUncompleted = shallow(<TodoListItem {...getPropsTemplate({ completed: false })} />)
    expect(taskItemUncompleted.find('.todo-list-item__toggle input').props().checked).toBeFalsy()

    const taskItemCompleted = shallow(<TodoListItem {...getPropsTemplate({ completed: true })} />)
    expect(taskItemCompleted.find('.todo-list-item__toggle input').props().checked).toBeTruthy()
  })
})

describe('TodoListItem completed CSS modifier', () => {
  
  const completedClass = 'todo-list-item--completed'

  test('Not set on uncompleted', () => {
    const completed = false
    const taskItem = shallow(<TodoListItem {...getPropsTemplate({ completed })} />)
    expect(taskItem.hasClass(completedClass)).toBeFalsy()
  })

  test('Set on completed', () => {
    const completed = true
    const taskItem = shallow(<TodoListItem {...getPropsTemplate({ completed })} />)
    expect(taskItem.hasClass(completedClass)).toBeTruthy()
  })
})

describe('TodoListItem completion toggle', () => {

  const onToggleTask = jest.fn()
  const position = 5
  const completed = false
  const taskItem = shallow(<TodoListItem {...getPropsTemplate({ onToggleTask, position, completed })} />)

  test('Test default toggle state', () => {
    
    // Pre-toggle (currently uncompleted)
    expect(onToggleTask.mock.calls.length).toBe(0)
    expect(taskItem.prop('completed')).toBeFalsy()
    
  })

  test('Test toggle complete', () => {

    // Simulate task completion
    taskItem.find('.todo-list-item__toggle input').simulate('change')

    expect(onToggleTask.mock.calls.length).toBe(1)
    expect(onToggleTask.mock.calls[0][0]).toBe(position)
  })

  test('Test toggle uncomplete', () => {

    // Simulate uncompletion
    taskItem.find('.todo-list-item__toggle input').simulate('change')
    expect(onToggleTask.mock.calls.length).toBe(2)
    expect(onToggleTask.mock.calls[1][0]).toBe(position)
  })
})

describe('TodoListItem removal', () => {

  test('Calls remove handler correctly', () => {
    const onRemoveTask = jest.fn()
    const position = 5
    const taskItem = shallow(<TodoListItem {...getPropsTemplate({ onRemoveTask, position })} />)

    // Test removal
    expect(onRemoveTask.mock.calls.length).toBe(0)
    taskItem.find('.todo-list-item__remove').simulate('click')
    expect(onRemoveTask.mock.calls.length).toBe(1)
    
    // Test task item position is passed correctly
    expect(onRemoveTask.mock.calls[0][0]).toBe(position)
  })
})