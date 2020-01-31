
const Grid = require('./grid.js')

class Panel {

  /**
   * Creates a new grid from an array of wires
   * @param {Array} wires 
   */
  constructor(wires) {
    this.grid = new Grid()
    this.wires = wires
  }


  /**
   * Decodes the movement and sets the positions path.
   * @param {String} dir The direction to move forward.
   * @param {Number} steps The number of steps to give.
   */
  setPositions(dir,steps) {
    const prevX = this.grid.getLastBlock().getX()
    const prevY = this.grid.getLastBlock().getY()
    console.log('DIR',steps)
    switch(dir) {
      case 'U':
        for (let i=prevY;i<prevY+steps;i++){
          console.log('subiendo ',prevX,i)
          this.grid.addCell(prevX,i,true)
        }
        break
      case 'D':

        for (let i=prevY;i>=prevY-steps;i--){
          console.log('bajando ',prevX,i)
          this.grid.addCell(prevX,i,true)
        }
        break
      case 'R':

        for (let i=prevX;i<prevX+steps;i++){
          console.log('derecha ',i,prevY)
          this.grid.addCell(i,prevY,true)
        }
        break
      case 'L':
        for (let i=prevX;i>=prevX-steps;i--){
          console.log('izquierda ',i,prevY)
          this.grid.addCell(i,prevY,true)
        }
        break
    }
  }

  /**
   * Decode an instruction and returns its position in the grid
   * @param {String} instruction 
   * @returns {Cell} The cell with the new values
   */
  decodeInstruction(instruction){
    const match = instruction.match(/^(\w)(\S.*)/i)
    this.setPositions(match[1],match[2])
  }

  /**
   * Calculates the positions in the grid occupied by a wire
   * @param {Array} wire 
   */
  readPositions(wire){
    if ( !Array.isArray(wire) ) {
      throw Error('Invalid wire format.')
    }
    for (let instruction of wire){
      this.decodeInstruction(instruction)
    }
    return
  }


  /**
   * Starts the minimum manhattan distance calculation
   */
  load(){
    if ( !Array.isArray(this.wires) ) {
      throw Error('Invalid wire array.')
    }
    let min = 99999
    for ( let wire of this.wires ){
      this.readPositions(wire)
    }
    return this.grid
  }
  
  /**
   * Returns the grid
   * @returns {Grid} The grid model.
   */
  getGrid(){
    return this.grid
  }

}

module.exports = Panel
