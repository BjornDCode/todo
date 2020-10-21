const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../../index.js').app
const assert = chai.assert
const expect = chai.expect

chai.use(chaiHttp)

describe('todo endpoints', () => {
    describe('index', () => {
        it('list all todos', done => {
            chai.request(app)
                .get('/todos')
                .then(response => {
                    assert.equal(200, response.status)
                    assert.equal(3, response.body.data.length)
                    done()
                })
        })
    })
    describe('store', () => {
        it('list can create todos', done => {
            chai.request(app)
                .post('/todos')
                .send({
                    description: 'New todo',
                })
                .then(response => {
                    assert.equal('New todo', response.body.data.description)
                    chai.request(app)
                        .get('/todos')
                        .then(response => {
                            assert.equal(4, response.body.data.length)
                            done()
                        })
                })
        })
    })
})
