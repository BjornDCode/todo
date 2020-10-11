import React, { Component } from 'react'

class TodoList extends Component {
    render() {
        return (
            <div>
                // Icon
                <h2>{this.props.title}</h2>
            </div>
        )
    }
}

export default TodoList
