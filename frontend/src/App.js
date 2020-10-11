import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import UnfinishedTodos from './pages/UnfinishedTodos'
import CompletedTodos from './pages/CompletedTodos'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: [],
            form: {
                description: '',
            },
        }

        this.handleFormChange = this.handleFormChange.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    handleFormChange(event) {
        this.setState({
            ...this.state,
            form: {
                description: event.target.value,
            },
        })
    }

    handleFormSubmit(event) {
        event.preventDefault()

        fetch('http://localhost:8081/todos', {
            method: 'POST',
            body: JSON.stringify(this.state.form),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(response => {
                this.setState({
                    ...this.state,
                    todos: [...this.state.todos, response.data],
                    form: {
                        description: '',
                    },
                })
            })
    }

    componentDidMount() {
        fetch('http://localhost:8081/todos')
            .then(response => response.json())
            .then(response =>
                this.setState({
                    ...this.state,
                    todos: response.data || [],
                })
            )
    }

    render() {
        return (
            <Router>
                <div className="container">
                    <h1>Todos</h1>

                    <nav>
                        <Link to="/">Unfinished</Link>
                        <Link to="/completed">Completed</Link>
                    </nav>

                    <Switch>
                        <Route exact path="/">
                            <UnfinishedTodos todos={this.state.todos} />
                        </Route>
                        <Route path="/completed">
                            <CompletedTodos todos={this.state.todos} />
                        </Route>
                    </Switch>

                    <form className="add-form" onSubmit={this.handleFormSubmit}>
                        <input
                            type="text"
                            placeholder="Add todo"
                            value={this.state.form.description}
                            onChange={this.handleFormChange}
                        />
                        <button type="submit">Add</button>
                    </form>
                </div>
            </Router>
        )
    }
}

export default App
