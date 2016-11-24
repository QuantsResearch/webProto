import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import nextTodoId from "./nextTodoId"

const todoApp = combineReducers({
    todos,
    visibilityFilter,
    nextTodoId
})

export default todoApp