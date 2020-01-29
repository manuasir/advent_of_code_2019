
const { assert } = require('chai')
const code = require('../../src/day_2/index.js')
const srcCode = require('./code/input_src')

describe('Day 2: Brute force', () => {
  describe('Find gravity value', () => {
    it('First test program from input file', () => {
      const result = code.brute_force(srcCode,19690720)
      assert.equal(result, '9517')
    })
  })
})

