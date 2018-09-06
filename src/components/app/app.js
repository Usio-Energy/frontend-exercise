import React from 'react'
import AddTodo from '../../containers/addTodo'
import VisibleTodoList from '../../containers/VisibleTodoList'
import Header from '../header';
import Footer from '../../containers/footer'

const App = () => (
  <div className="app">
    <Header />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App