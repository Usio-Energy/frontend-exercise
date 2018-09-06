import { connect } from 'react-redux'
import Footer from '../components/footer';

const getToDos = (todos) => {
      return todos
}

const mapStateToProps = state => {
  return {
    todos: getToDos(state.todos)
  }
}

const ToDos = connect(
  mapStateToProps
)(Footer)

export default ToDos
