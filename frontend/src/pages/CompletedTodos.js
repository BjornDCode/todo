import React, { Component } from 'react'
import TodoList from '../TodoList'

class CompletedTodos extends Component {
    render() {
        return (
            <TodoList
                title="Done"
                icon="BsCheck"
                todos={this.props.todos.filter(todo => todo.completed)}
            />
        )
    }
}

export default CompletedTodos
