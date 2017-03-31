import * as types from '../constants/ActionTypes'
//import { default as FETCH } from 'utils/fetch'
import fetch from 'isomorphic-fetch'
import todolistJSON from 'mock/todolist.json'

export function addTodo(text) {
    console.log(text, 'addTodo')
    return { type: types.ADD_TODO, text }
}

export function completeTodo(index) {
    return { type: types.COMPLETE_TODO, index }
}

export function setVisibilityFilter(filter) {
    return { type: types.SET_VISIBILITY_FILTER, filter }
}

export function fetchTodoList() {
    return (dispatch) => {
        let url = "mock/todolist.json"
        return fetch(url)
            .then(resp => {
                let _resp = todolistJSON //require('mock/todolist.json')
                
                console.log(_resp.todolist, todolistJSON, 'resp')
                dispatch(showTodoList(_resp.todolist))

            })
    }
}

function showTodoList(todolist) {
    return {
        type: types.SHOW_TODOLIST,
        todolist
    }
}
