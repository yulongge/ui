import { createSelector } from 'reselect'
import VisibilityFilters from '../constants/TodoFilters'

function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed)
    }
}

const getTodos = state => state.todos

const getVisibilityFilter = state => state.visibilityFilter

export default createSelector(
    getTodos,
    getVisibilityFilter,
    (todos, visibilityFilter) => {
        let visibleTodos = selectTodos(todos, visibilityFilter)
        return {
            visibleTodos,
            visibilityFilter

        }
    }
)

