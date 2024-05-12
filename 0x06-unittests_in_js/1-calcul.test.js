const fn = require('./1-calcul')
const assert = require('assert')

describe('Tests for calculateNumber', () => {
    it('Rounds and add both numbers', () => {
        assert.strictEqual(fn('SUM', 1.4, 4.5), 6)
    })

    it('Rounds and subtracts the numbers', () => {
        assert.strictEqual(fn('SUBTRACT', 1.4, 4.5), -4)
    })

    it('Rounds and divides both numbers', () => {
        assert.strictEqual(fn('DIVIDE', 1.4, 4.5), 0.2)
    })

    it('Test for divide by zero error', () => {
        assert.strictEqual(fn('DIVIDE', 1.4, 0), 'Error')
    })
})