import React, { Component, PropTypes } from 'react'
import './style'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

class TodoApp extends Component {

    render() {
        const { onAddClick, onTodoClick, onFilterChange, visibleTodos, visibilityFilter } = this.props
        return (
            <div>
                <AddTodo onAddClick={ onAddClick } />
                <Footer filter={ visibilityFilter } onFilterChange={ onFilterChange } />
                <TodoList todos={ visibleTodos } onTodoClick={ onTodoClick }/>
            </div>
        )
    }
}

export default TodoApp

