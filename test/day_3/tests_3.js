
const { assert } = require('chai')
const Panel = require('../../src/day_3/lib/panel.js')
const Manhattan = require('../../src/day_3/lib/manhattan.js')
const manhattan = new Manhattan()

describe('Day 3', () => {
  describe('Tests for panel module', () => {
    it('Test the grid with low numbers', () => {
      const panel = new Panel([['R8', 'U5', 'L5', 'D3']])
      const result = panel.load()
      assert.equal(result.getBlocks().length, 23)
      const lastBlock = result.getLastBlock()
      assert.equal(lastBlock.getX(), 3)
      assert.equal(lastBlock.getY(), 2)
    })
    it('Test the grid with negative numbers', () => {
      const panel = new Panel([['R8', 'U5', 'L15', 'D3']])
      const result = panel.load()
      assert.equal(result.getBlocks().length, 33)
      const lastBlock = result.getLastBlock()
      assert.equal(lastBlock.getX(), -7)
      assert.equal(lastBlock.getY(), 2)
    })
  })
  describe('Decode instruction functions', () => {
    it('Decode simple instruction down', () => {
      const panel = new Panel()
      const {direction, steps} = panel.decodeInstruction('D5')
      assert.equal(direction, 'D')
      assert.equal(steps, '5')
    })
    it('Decode complex instruction right', () => {
      const panel = new Panel()
      const {direction, steps} = panel.decodeInstruction('R505505')
      assert.equal(direction, 'R')
      assert.equal(steps, '505505')
    })
    it('Decode simple instruction up', () => {
      const panel = new Panel()
      const {direction, steps} = panel.decodeInstruction('U5')
      assert.equal(direction, 'U')
      assert.equal(steps, '5')
    })
    it('Decode complex instruction left', () => {
      const panel = new Panel()
      const {direction, steps} = panel.decodeInstruction('L505505')
      assert.equal(direction, 'L')
      assert.equal(steps, '505505')
    })

  })
  describe('Tests for wires', () => {
    it('Test for getting values of the grid', () => {
      const panel = new Panel([['R8', 'U5', 'L5', 'D3'], ['U7', 'R6', 'D4', 'L4']])
      const result = panel.load()
      const value = result.getCellValue(6, 5)
      assert.equal(value, 0)
    })
    it('Test for getting empty values of the grid', () => {
      const panel = new Panel(([['R8', 'U5', 'L5', 'D3'], ['U7', 'R6', 'D4', 'L4']]))
      const result = panel.load()
      const value = result.getCellValue(60, 5)
      assert.equal(value, false)
    })
    it('Test for collitions in the grid', () => {
      const panel = new Panel([['R8', 'U5', 'L5', 'D3'], ['U7', 'R6', 'D4', 'L4']])
      const result = panel.load()
      assert.equal(result.getBlocks().length, 45)
      const cols = result.getCollisions()
      assert.equal(cols.length, 2)
    })
    it('Test for collitions in the grid x3', () => {
      const panel = new Panel([['R8', 'U5', 'L5', 'D3'], ['U7', 'R6', 'D4', 'L4'], ['L2','U2','R5','U2','L2','D2']])
      const result = panel.load()
      assert.equal(result.getBlocks().length, 61)
      const cols = result.getCollisions()
      assert.equal(cols.length, 5)
    })

  })
  describe('Tests for the Manhattan distance calculation', () => {
    it('Manhattan distance', () => {
      const panel = new Panel([['U7', 'R6', 'D4', 'L4']])
      const result = panel.load()
      assert.equal(result.getBlocks().length, 23)
      const lastBlock = result.getLastBlock()
      const distance = manhattan.manhattanDistance(lastBlock)
      assert.equal(distance, 5)
    })
    it('Manhattan distance', () => {
      const panel = new Panel([['R8', 'U5', 'L5', 'D3'], ['U7', 'R6', 'D4', 'L4']])
      const result = panel.load()
      const collisions = result.getCollisions()
      const minManhattanDistance = manhattan.getMinColision(collisions)
      assert.equal(minManhattanDistance, 6)
    })
    it('Manhattan distance x3', () => {
      const panel = new Panel([['R8', 'U5', 'L5', 'D3'], ['U7', 'R6', 'D4', 'L4'], ['L2','U2','R5','U2','L2','D2']])
      const result = panel.load()
      const dups = result.getCollisions()
      const minManhattanDistance = manhattan.getMinColision(dups)
      assert.equal(minManhattanDistance, 2)
    })
    it('Manhattan distance more complex', () => {
      const panel = new Panel([['R75','D30','R83','U83','L12','D49','R71','U7','L72'],['U62','R66','U55','R34','D71','R55','D58','R83']])
      const result = panel.load()
      const dups = result.getCollisions()
      const minManhattanDistance = manhattan.getMinColision(dups)
      assert.equal(minManhattanDistance, 159)
    })
    it('Manhattan distance more complex x2', () => {
      const panel = new Panel([['R98','U47','R26','D63','R33','U87','L62','D20','R33','U53','R51'],['U98','R91','D20','R16','D67','R40','U7','R15','U6','R7']])
      const result = panel.load()
      const dups = result.getCollisions()
      const minManhattanDistance = manhattan.getMinColision(dups)
      assert.equal(minManhattanDistance, 135)
    })
    it('Manhattan distance for large wires', () => {
      const wires = require('./wires/wires.js')
      const panel = new Panel(wires)
      const result = panel.load()
      const dups = result.getCollisions()
      const minManhattanDistance = manhattan.getMinColision(dups)
      assert.equal(minManhattanDistance, 118)
    })
  })
})

