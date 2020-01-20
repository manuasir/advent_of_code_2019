
const { assert } = require('chai')
const Intcode = require('../../src/day_2/intcode.js')
describe('Day 2', () => {
  describe('Execute Intcode', () => {
    it('First test program 1,0,0,0,99', () => {
      const code = new Intcode([1,0,0,0,99])
      const result = code.processCode()
      assert.equal(result, [2,0,0,0,99].join())
    })
    it('First test program 2,3,0,3,99', () => {
      const code = new Intcode([2,3,0,3,99])
      const result = code.processCode()
      assert.equal(result, [2,3,0,6,99].join())
    })
    it('First test program 2,4,4,5,99', () => {
      const code = new Intcode([2,4,4,5,99])
      const result = code.processCode()
      assert.equal(result, [2,4,4,5,99,9801].join())
    })
    it('First test program 1,1,1,4,99,5,6,0,99', () => {
      const code = new Intcode([1,1,1,4,99,5,6,0,99])
      const result = code.processCode()
      assert.equal(result, [30,1,1,4,2,5,6,0,99].join())
    })
  })
  describe('Execute Intcode file', () => {
    it('First test program from input file', () => {
      const code = new Intcode()
      const result = code.processCode()
      assert.equal(result[0], 3931283)
    })

  })
})

