import React, { Component } from 'react'

class TodoItem extends Component {
    render() {
        return (
            <div className="todo-item">
                <form>
                    <input
                        type="checkbox"
                        checked={this.props.completed}
                        onChange={() =>
                            this.props.onUpdate(
                                this.props.uuid,
                                this.props.completed
                            )
                        }
                    />
                    <p>{this.props.description}</p>
                </form>
            </div>
        )
    }
}

export default TodoItem
