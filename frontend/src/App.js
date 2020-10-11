import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import UnfinishedTodos from './pages/UnfinishedTodos'
import CompletedTodos from './pages/CompletedTodos'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: [],
        }
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
                </div>
            </Router>
        )
    }
}

export default App
