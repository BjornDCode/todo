const { assert } = require('chai')
const { createTodo } = require('../../todos')

describe('createTodo function', () => {
    it('creates a todo object', () => {
        const todo = createTodo('Test description')

        assert.equal('Test description', todo.description)
    })

    it('is not completed by default', () => {
        const todo = createTodo('Test description')

        assert.isFalse(todo.completed)
    })

    it('can be set to completed', () => {
        const todo = createTodo('Test description', true)

        assert.isTrue(todo.completed)
    })
})
