
const { assert } = require('chai')
const Operation = require('../../src/day_1/calculate_fuel.js')
const OperationFixed = require('../../src/day_1/calculate_fuel_fixed.js')
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

describe('Part 2: Fixed algorithm', () => {
  const opFixed = new OperationFixed()
  describe('Calculate fuel', () => {
    it('For a mass of 14', () => {
      const result = opFixed.calcFullFuel(14)
      assert.equal(result, 2)
    })
    it('For a mass of 1969', () => {
      const result = opFixed.calcFullFuel(1969)
      assert.equal(result, 966)
    })
    it('For a mass of 100756', () => {
      const result = opFixed.calcFullFuel(100756)
      assert.equal(result, 50346)
    })
  })

  describe('Calculate total fuel amount', () => {
    it('For a list of objects', () => {
      const result = opFixed.processAllMassIndices()
      assert.equal(result, 4973616)
    })
  })
})
