const express = require('express')
const { v4: uuid } = require('uuid')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

const todos = [
    {
        id: uuid(),
        description: 'Homework',
        completed: false,
    },
    {
        id: uuid(),
        description: 'Groceries',
        completed: false,
    },
    {
        id: uuid(),
        description: 'Create mandatory project 1',
        completed: true,
    },
]

app.get('/todos', (request, response) => {
    response.send({ data: todos })
})

app.post('/todos', (request, response) => {
    const todo = {
        id: uuid(),
        description: request.body.description,
        completed: false,
    }
    todos.push(todo)

    response.send({ data: todo })
})

const port = process.env.PORT || 8081

app.listen(port, () => {
    console.log('Listening on port', port)
})
