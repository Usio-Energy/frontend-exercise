import React from 'react'
import { shallow } from 'enzyme'

import TodoList from './TodoList'

const getStateTemplate = () => {
  return {
    tasks: [
      { completed: false, text: 'Pick up dry cleaning' },
      { completed: false, text: 'Source ingredients for dinner' },
      { completed: false, text: 'Purchase travel insurance' }
    ]
  }
}

let todoList = null

beforeEach(() => {
  todoList = shallow(<TodoList />)
  todoList.setState(getStateTemplate())
})

describe('TodoList task toggling', () => {
  
  test('Task completed state toggling', () => {
    expect(todoList.state('tasks')[1].completed).toBeFalsy()
    todoList.instance().onToggleTask(1)

    expect(todoList.state('tasks')[0].completed).toBeFalsy()
    expect(todoList.state('tasks')[1].completed).toBeTruthy()
    expect(todoList.state('tasks')[2].completed).toBeFalsy()

    todoList.instance().onToggleTask(1)
    expect(todoList.state('tasks')[0].completed).toBeFalsy()
    expect(todoList.state('tasks')[1].completed).toBeFalsy()
    expect(todoList.state('tasks')[2].completed).toBeFalsy()
  })

  test('Task completed state toggling for non-existent task', () => {
    todoList.instance().onToggleTask(123)

    // Tasks state should not have changed
    expect(JSON.stringify(todoList.state('tasks'))).toBe(JSON.stringify(getStateTemplate().tasks))
  })
})

describe('TodoList task removing', () => {

  test('Task removal', () => {
    todoList.instance().onRemoveTask(1)

    // There should only be two tasks now
    expect(todoList.state('tasks').length).toBe(2)

    // Third todo item should now be in the second position
    expect(todoList.state('tasks')[1].text).toBe(getStateTemplate().tasks[2].text)
  })

  test('Task removal of non-existent task', () => {
    todoList.instance().onRemoveTask(666)

    // Tasks state should not have changed
    expect(JSON.stringify(todoList.state('tasks'))).toBe(JSON.stringify(getStateTemplate().tasks))
  })
})

describe('TodoList task adding', () => {

  test('Task add', () => {
    const text = 'Test task'
    todoList.instance().onAddTask(text)

    expect(todoList.state('tasks').length).toBe(4)
    expect(todoList.state('tasks')[3].text).toBe(text)
    expect(todoList.state('tasks')[3].completed).toBeFalsy()
  })

  test('Task adding of an empty string', () => {
    const text = ''
    todoList.instance().onAddTask(text)

    // Tasks state should not have changed
    expect(JSON.stringify(todoList.state('tasks'))).toBe(JSON.stringify(getStateTemplate().tasks))
  })

  test('Task adding of an blank string', () => {
    const text = '    '
    todoList.instance().onAddTask(text)

    // Tasks state should not have changed
    expect(JSON.stringify(todoList.state('tasks'))).toBe(JSON.stringify(getStateTemplate().tasks))
  })
})

describe('TodoList task reordering', () => {

  test('Task reorder', () => {
    const op = { oldIndex: 0, newIndex: 1 }
    todoList.instance().onSortEnd(op)

    expect(todoList.state('tasks').length).toBe(3)
    expect(todoList.state('tasks')[0].text).toBe(getStateTemplate().tasks[1].text)
    expect(todoList.state('tasks')[1].text).toBe(getStateTemplate().tasks[0].text)
  })

  test('Task of invalid index', () => {
    const op = { oldIndex: 0, newIndex: 666 }
    todoList.instance().onSortEnd(op)

    expect(todoList.state('tasks').length).toBe(3)
    expect(todoList.state('tasks')[0].text).toBe(getStateTemplate().tasks[0].text)
  })

  /*
  test('Task adding of an empty string', () => {
    const text = ''
    todoList.instance().onAddTask(text)

    // Tasks state should not have changed
    expect(JSON.stringify(todoList.state('tasks'))).toBe(JSON.stringify(getStateTemplate().tasks))
  })

  test('Task adding of an blank string', () => {
    const text = '    '
    todoList.instance().onAddTask(text)

    // Tasks state should not have changed
    expect(JSON.stringify(todoList.state('tasks'))).toBe(JSON.stringify(getStateTemplate().tasks))
  })
  */
})