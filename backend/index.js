const express = require('express')
const { v4: uuid } = require('uuid')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

const todos = [
    {
        id: uuid(),
        description: 'Create mandatory project 1',
        completed: false,
    },
]

app.get('/todos', (request, response) => {
    response.send({ data: todos })
})

const port = process.env.PORT || 8081

app.listen(port, () => {
    console.log('Listening on port', port)
})
