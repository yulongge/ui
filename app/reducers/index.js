import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { visibilityFilter, todos } from './todoList.js'

const uiApp = combineReducers({
    visibilityFilter,
    todos,
    routing: routerReducer
})

export default uiApp
