const express = require('express')
const { v4: uuid } = require('uuid')

const app = express()
app.use(express.json())

const todos = [
    {
        id: uuid(),
        description: 'Create mandatory project 1',
        done: false,
    },
]

app.get('/todos', (request, response) => {
    // response.send()
})

const port = process.env.PORT || 8081

app.listen(port, () => {
    console.log('Listening on port', port)
})
