const { v4: uuid } = require('uuid')

const createTodo = (description, completed = false) => ({
    id: uuid(),
    description: description,
    completed: completed,
})

module.exports = {
    createTodo,
}
