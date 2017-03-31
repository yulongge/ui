import React from 'react'
import { TodoList } from 'components'
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../../../app/actions'
import TodoListSelector from '../../../app/selectors/todolist'

//import { connect } from 'react-redux'
import connect from '../../../utils/connect'

@connect(TodoListSelector)
export default class D_TodoList extends React.Component {

    addClick(text) {
        //this.props.dispatch(addTodo(text))
        this.props.actions.addTodo(text)
    }

    onFilterChange(nextFilter) {
        //this.props.dispatch(setVisibilityFilter(nextFilter))
        this.props.actions.setVisibilityFilter(nextFilter)
    }

    onTodoClick(index) {
        //this.props.dispatch(completeTodo(index)) 
        this.props.actions.completeTodo(index)
    }

    showTodoList() {
        this.props.actions.fetchTodoList()
    }

    render() {
        const { visibleTodos, visibilityFilter }  = this.props
        console.log(this.props, 'this.props')
        return (
            <div>
                <TodoList onAddClick = { this.addClick.bind(this) } onFilterChange = { this.onFilterChange.bind(this) } onTodoClick = { this.onTodoClick.bind(this) } 
                    visibleTodos = { visibleTodos } visibilityFilter = { visibilityFilter }
                    />
                <button onClick={ this.showTodoList.bind(this) }> todolist </button>
            </div>
        )
    }
} 

//export default connect(TodoListSelector)(D_TodoList)

