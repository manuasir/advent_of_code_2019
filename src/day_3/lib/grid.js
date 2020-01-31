
const Cell = require('./cell.js')

class Grid {

  /**
   * Creates a new grid from an array of wires
   * @param {Array} wires 
   */
  constructor() {
    this.cells = [new Cell(0,0,true)]
    this.colisions = []
  }

  /**
   * Returns the value of a cell by its coordinates.
   * @param {Number} x 
   * @param {Number} y 
   * @returns {Boolean} The value of the cell
   */
  getCellValue(x,y){
    const block = this.cells.filter(block => {
      block.getX() === x && block.getY() === y
    })
    return (Array.isArray(block) && block.length > 0) ? block[0].getValue() : false
  }

  /**
   * Inserts a cell in the chain.
   * @param {Number} x 
   * @param {Number} y 
   * @param {Boolean} value 
   */
  addCell(x,y,value){
    this.cells.push(new Cell(x,y,value))
  }

  /**
   * Returns the size of the grid
   * @returns {Number} The size of the grid.
   */
  size(){
    return this.cells.length
  }

  /**
   * Returns the last cell in the list.
   * @returns {Cell} The last inserted cell.
   */
  getLastBlock(){
    return this.cells[this.cells.length-1]
  }

  /**
   * Returns the full chain
   * @returns {Array.<Cell>} The list of cells.
   */
  getBlocks(){
    return this.cells
  }

}

module.exports = Grid
