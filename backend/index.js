const express = require('express')
const cors = require('cors')
const { createTodo } = require('./todos')

const app = express()
app.use(express.json())
app.use(cors())

let todos = [
    createTodo('Homework'),
    createTodo('Groceries'),
    createTodo('Create mandatory project 1', true),
]

app.get('/todos', (request, response) => {
    response.send({ data: todos })
})

app.post('/todos', (request, response) => {
    const todo = createTodo(request.body.description)

    todos.push(todo)

    response.send({ data: todo })
})

app.patch('/todos/:id', (request, response) => {
    let updatedTodo = {}

    todos = todos.map(todo => {
        if (todo.id !== request.params.id) {
            return todo
        }

        updatedTodo = {
            ...todo,
            completed: request.body.completed,
        }

        return updatedTodo
    })

    return response.send({ data: updatedTodo })
})

const port = process.env.PORT || 8081

app.listen(port, () => {
    console.log('Listening on port', port)
})
