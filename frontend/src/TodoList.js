import React, { Component } from 'react'
import { BsList, BsCheck } from 'react-icons/bs'

import TodoItem from './TodoItem'

const icons = {
    BsList,
    BsCheck,
}

class TodoList extends Component {
    render() {
        const Icon = icons[this.props.icon]
        return (
            <div>
                <h2>
                    <Icon />
                    <span>{this.props.title}</span>
                </h2>

                {this.props.todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        uuid={todo.id}
                        description={todo.description}
                        completed={todo.completed}
                    />
                ))}
            </div>
        )
    }
}

export default TodoList
