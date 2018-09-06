import { createStore, combineReducers } from 'redux';
import todos from './reducers/todos'
import visibilityFilter from './reducers/visibilityFilter'

export default createStore(combineReducers({ todos, visibilityFilter }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())