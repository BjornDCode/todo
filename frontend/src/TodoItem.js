import React, { Component } from 'react'

class TodoItem extends Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange() {
        console.log(this.props)
    }

    render() {
        return (
            <div className="todo-item">
                <form>
                    <input
                        type="checkbox"
                        checked={this.props.completed}
                        onChange={this.handleChange}
                    />
                    <p>{this.props.description}</p>
                </form>
            </div>
        )
    }
}

export default TodoItem
