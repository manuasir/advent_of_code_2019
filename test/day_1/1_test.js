
const { assert } = require('chai')
const Operation = require('../../src/day_1/day_1.js')

describe('Day 1', () => {
  const op = new Operation()
  describe('Calculate fuel', () => {
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
  describe('Calculate total fuel amount', () => {
    it('For a list of objects', () => {
      const result = op.processAllMassIndices()
      assert.equal(result, 3317659)
    })
  })
})