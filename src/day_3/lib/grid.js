
const Cell = require('./cell.js')

class Grid {

  /**
   * Creates a new grid from an array of wires
   * @param {Array} wires 
   */
  constructor() {
    this.cells = [new Cell(0, 0, true)]
  }

  /**
   * Returns the value of a cell by its coordinates.
   * @param {Number} x 
   * @param {Number} y 
   * @returns {Boolean} The value of the cell
   */
  getCellValue(x, y) {
    for (let block of this.cells) {
      if (block.getX() === x && block.getY() === y) {
        return block.getValue()
      }
    }
    return false
  }

  /**
   * Inserts a cell in the chain.
   * @param {Number} x 
   * @param {Number} y 
   * @param {Boolean} value 
   */
  addCell(x, y, value) {
    console.log('pushing ', value + ' x: ', x + ' y: ', y)
    this.cells.push(new Cell(x, y, value))
    return
  }

  /**
   * Gets the list of collisions.
   * @returns {Array} the array of collisions.
   */
  getCollisions() {
    try {
      const coords = this.cells.map((block, index) => block.getSerializedCoord())
      console.log('COORDS ', coords)
      const count = names =>
        names.reduce((a, b) => ({
          ...a,
          [b]: (a[b] || 0) + 1
        }), {})
      const duplicates = dict =>
        Object.keys(dict).filter((a) => dict[a] > 1)
      const aux = duplicates(count(coords)).filter(block => block !== '0:0')
      const dups = []
      aux.forEach(block => dups.push(new Cell(parseInt(block.split(':')[0]),parseInt(block.split(':')[1]))))
      return dups
    } catch (error) {
      console.error('Cannot parse to JSON duplicates list.')
    }

  }

  /**
   * Returns the size of the grid
   * @returns {Number} The size of the grid.
   */
  size() {
    return this.cells.length
  }

  /**
   * Gets the pointer to the last EOF block
   * @returns {Boolean} The last EOF block.
   */
  isLastBlockEof() {
    return this.cells[this.cells.length - 1].getValue() === 'EOF'
  }

  /**
   * Returns the last cell in the list.
   * @returns {Cell} The last inserted cell.
   */
  getLastBlock() {
    return (this.isLastBlockEof()) ?
      this.cells[this.cells.length - 2] :
      this.cells[this.cells.length - 1]
  }

  /**
   * Returns the full chain
   * @returns {Array.<Cell>} The list of cells.
   */
  getBlocks() {
    return this.cells
  }

}

module.exports = Grid
