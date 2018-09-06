import React from 'react'
import { shallow } from 'enzyme'

import TodoListAdd from './TodoListAdd'

describe('TodoListAdd', () => {

  const event = { preventDefault: jest.fn() };

  test('Default form submission behaviour should be disabled', () => {
    const onAddTask = jest.fn()
    const taskItem = shallow(<TodoListAdd onAddTask={onAddTask} />)

    taskItem.find('form').simulate('submit', event)
    expect(event.preventDefault).toBeCalled()
  })
  
  test('Should not be able to add empty task', () => {
    const onAddTask = jest.fn()
    const taskItem = shallow(<TodoListAdd onAddTask={onAddTask} />)

    taskItem.setState({ text: '' })
    taskItem.find('form').simulate('submit', event)
    expect(onAddTask.mock.calls.length).toBe(0)
  })

  test('Should add task correctly', () => {
    const onAddTask = jest.fn()
    const taskItem = shallow(<TodoListAdd onAddTask={onAddTask} />)

    taskItem.setState({ text: 'Test task' })
    taskItem.find('form').simulate('submit', event)
    expect(onAddTask.mock.calls.length).toBe(1)

    // Ensure add new field has been cleared once added
    expect(taskItem.state('text')).toBeFalsy()
  })

  test('Task text should change as user types', () => {
    const onAddTask = jest.fn()
    const text = 'Test task'
    const taskItem = shallow(<TodoListAdd onAddTask={onAddTask} />)

    taskItem.setState({ text: 'Test task' })
    taskItem.find('.todo-list-add__input').simulate('change', { target: { value: text } })
    expect(taskItem.state('text')).toBe(text)
  })
})

