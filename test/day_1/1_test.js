
const { assert } = require('chai')
const Operation = require('../../src/day_1/day_1.js')

describe('Day 1', () => {
  describe('Result', () => {
    const op = new Operation()
    it('For a mass of 12', () => {
      const result = op.calcFuel(12)
      assert.equal(result, 2)
    })
    it('For a mass of 14', () => {
      const result = op.calcFuel(14)
      assert.equal(result, 2)
    })
    it('For a mass of 1969', () => {
      const result = op.calcFuel(1969)
      assert.equal(result, 654)
    })
    it('For a mass of 100756', () => {
      const result = op.calcFuel(100756)
      assert.equal(result, 33583)
    })
  })
})