
const { assert } = require('chai')
const panel = require('../../src/day_3/index.js')

describe('Day 3', () => {
  describe('Tests for panel module', () => {
    it('Test the grid with low numbers', () => {
      const result = panel.load([['R8','U5','L5','D3']])
      assert.equal(result.getBlocks().length,24)
      const lastBlock = result.getLastBlock()
      assert.equal(lastBlock.getX(), 2)
      assert.equal(lastBlock.getY(), 1)
    })
    it('Test the grid with negative numbers', () => {
      const result = panel.load([['R8','U5','L15','D3']])
      assert.equal(result.getBlocks().length,34)
      const lastBlock = result.getLastBlock()
      assert.equal(lastBlock.getX(), -8)
      assert.equal(lastBlock.getY(), 1)
    })
  //],['U7','R6','D4','L4']
  })

})

