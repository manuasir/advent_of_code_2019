
class Cell {

  /**
   * Creates a new cell
   * @param {Number} x 
   * @param {Number} y 
   * @param {String} val 
   */
  constructor(x,y,val) {
    this.block = [x,y,val]
  }

  /**
   * Returns the X axis
   * @returns {Number} the value of the X axis
   */
  getX(){
    return this.block[0]
  }

  /**
   * Returns the Y axis
   * @returns {Number} the value of the Y axis
   */
  getY(){
    return this.block[1]
  }

  /**
   * Gets the axis information in String format
   * @returns {String} The serialized coordinates
   */
  getSerializedCoord(){
    return `${this.block[0]}:${this.block[1]}`
  }

  /**
   * Returns the value of the block
   * @returns {Boolean} the value of the cell
   */
  getValue(){
    return this.block[2]
  }

}

module.exports = Cell
