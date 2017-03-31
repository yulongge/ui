import * as types from '../constants/ActionTypes'
import TodoFilters from '../constants/TodoFilters'

console.log(TodoFilters.SHOW_ALL, types, 'SHOW_ALL reducer')
export function visibilityFilter(state = TodoFilters.SHOW_ALL, action) {
    switch (action.type) {
        case types.SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

export function todos(state = [], action) {
    switch (action.type) {
        case types.ADD_TODO:
            console.log(action.text, 'reducers coming...')
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case types.COMPLETE_TODO: 
            console.log(state, 'COMPLETE_TODO')
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    completed: true
                }),
                ...state.slice(action.index + 1)
            ]
        case types.SHOW_TODOLIST:
            console.log(action, 'reducer')
            return [
                ...state,
                ...action.todolist
            ]
        default:
            return state
    }
}

/*export default {
    visibilityFilter: visibilityFilter,
    todos: todos
}
*/
