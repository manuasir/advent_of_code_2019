
const { assert } = require('chai')
const code = require('../../src/day_2/index.js')
const srcCode = require('./code/input_src')
describe('Day 2', () => {
  describe('Execute Intcode', () => {
    it('First test program 1,0,0,0,99', () => {
      const result = code.run([1,0,0,0,99])
      assert.equal(result, [2,0,0,0,99].join())
    })
    it('First test program 2,3,0,3,99', () => {
      const result = code.run([2,3,0,3,99])
      assert.equal(result, [2,3,0,6,99].join())
    })
    it('First test program 2,4,4,5,99', () => {
      const result = code.run([2,4,4,5,99])
      assert.equal(result, [2,4,4,5,99,9801].join())
    })
    it('First test program 1,1,1,4,99,5,6,0,99', () => {
      const result = code.run([1,1,1,4,99,5,6,0,99])
      assert.equal(result, [30,1,1,4,2,5,6,0,99].join())
    })
  })
  describe('Execute Intcode file', () => {
    it('First test program from input file', () => {
      const result = code.run(srcCode)
      assert.equal(result[0], 3931283)
    })
  })
  describe('Find gravity value', () => {
    it('First test program from input file', () => {
    //  const result = code.calculateOutput(19690720)
    //  assert.equal(result[0], 3931283)
    })

  })
})

