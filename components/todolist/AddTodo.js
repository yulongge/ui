import React , { PropTypes } from 'react'

export default class AddTodo extends React.Component {
    handleClick() {
        const node = this.refs.input
        const text = node.value.trim()
        this.props.onAddClick(text)
        node.value = ''
    }
    render() {
        return (
            <div>
                <input type='text' ref='input' />
                <button onClick={ this.handleClick.bind(this) } className="addTodo"> Add </button>
            </div>
        )
    }
}

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired
}
