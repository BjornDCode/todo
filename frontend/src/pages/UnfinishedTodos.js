import React, { Component } from 'react'
import TodoList from '../TodoList'

class UnfinishedTodos extends Component {
    render() {
        return (
            <TodoList
                title="Todo"
                icon="BsList"
                todos={this.props.todos.filter(todo => !todo.completed)}
                onUpdate={this.props.onUpdate}
            />
        )
    }
}

export default UnfinishedTodos
