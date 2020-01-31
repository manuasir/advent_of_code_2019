
class Cell {

  /**
   * Creates a new cell
   * @param {Number} x 
   * @param {Number} y 
   * @param {String} val 
   */
  constructor(x,y,val) {
    this.x = x,
    this.y = y,
    this.value = val
  }

  /**
   * Returns the X axis
   * @returns {Number} the value of the X axis
   */
  getX(){
    return this.x
  }

  /**
   * Returns the Y axis
   * @returns {Number} the value of the Y axis
   */
  getY(){
    return this.y
  }

  /**
   * Returns the value of the block
   * @returns {Boolean} the value of the cell
   */
  getValue(){
    return this.value
  }

}

module.exports = Cell
