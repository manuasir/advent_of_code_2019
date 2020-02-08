class Manhattan {

  constructor() { }
  /**
    * Calculates the Manhattan distance between a block and the first one.
    * @param {Cell} cell 
    * @returns {Number} The Manhattan distance.
    */
  manhattanDistance(cell) {
    return Math.abs(cell.getX()) + Math.abs(cell.getY())
  }

  /**
   * Gets the mininmum Manhattan distance in the collisions.
    * @param {Array.<Cell>} blocks The array of blocks
    * @returns {Number} The minimum Manhattan distance 
   */
  getMinColision(blocks) {
    return Math.min.apply(null, blocks.filter(Boolean).map(block => this.manhattanDistance(block)))
  }

}

module.exports = Manhattan