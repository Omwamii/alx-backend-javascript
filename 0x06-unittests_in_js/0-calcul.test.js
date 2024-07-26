const fn = require('./0-calcul')
const assert = require('assert')


describe('calculateNumber test', () => {
    it('Test decimals, all to round up', () => {
        assert.strictEqual(fn(1.5, 3.7), 6)
    })

    it('Test decimals, one to round down', () => {
        assert.strictEqual(fn(1.2, 3.7), 5)
    })

    it('Test first number rounded', () => {
        assert.strictEqual(fn(1.5, 3.2), 5)
    })
    
    it('Test integer and decimal', () => {
        assert.strictEqual(fn(1, 3.7), 5)
    })

    it('Test all integers', () => {
        assert.strictEqual(fn(1, 3), 4)
    })
})