
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
  setPositions(dir, steps) {
    let prevX = 0
    let prevY = 0
    switch (dir) {
      case 'E':
        console.log('EOF')
        this.grid.addCell(0, 0, 'EOF')
        break
      case 'U':
        console.log('UP')
        console.log('SIZE ',this.grid.size())
        prevY = (!this.grid.isLastBlockEof()) ? this.grid.getLastBlock().getY() : 0
        prevX = (!this.grid.isLastBlockEof()) ? this.grid.getLastBlock().getX() : 0
        console.log('!prevY',prevY)
        console.log('!prevX',prevX)
        for (let i = prevY + 1; i <= prevY + steps; i++) {
          console.log('from i', i + ' to ', prevY + steps)
          this.grid.addCell(prevX, i, true)
        }
        break
      case 'D':
        console.log('DOWN')
        console.log('SIZE ',this.grid.size())
        prevY = (!this.grid.isLastBlockEof()) ? this.grid.getLastBlock().getY() : 0
        prevX = (!this.grid.isLastBlockEof()) ? this.grid.getLastBlock().getX() : 0
        console.log('!prevY',prevY)
        console.log('!prevX',prevX)
        for (let i = prevY - 1; i >= prevY - steps; i--) {
          console.log('from i', i + ' to ', prevY - steps)
          this.grid.addCell(prevX, i, true)
        }
        break
      case 'R':
        console.log('RIGHT')
        console.log('SIZE ',this.grid.size())
        prevY = (!this.grid.isLastBlockEof()) ? this.grid.getLastBlock().getY() : 0
        prevX = (!this.grid.isLastBlockEof()) ? this.grid.getLastBlock().getX() : 0
        console.log('!prevY',prevY)
        console.log('!prevX',prevX)
        for (let i = prevX + 1; i <= prevX + steps; i++) {
          // console.log('right ',i)
          console.log('from i', i + ' to ', prevX + steps)
          this.grid.addCell(i, prevY, true)
        }
        break
      case 'L':
        console.log('LEFT')
        console.log('SIZE ',this.grid.size())
        prevX = (!this.grid.isLastBlockEof()) ? this.grid.getLastBlock().getX() : 0
        prevY = (!this.grid.isLastBlockEof()) ? this.grid.getLastBlock().getY() : 0
        console.log('!prevY',prevY)
        console.log('!prevX',prevX)
        for (let i = prevX - 1; i >= prevX - steps; i--) {
          console.log('from i', i + ' to ', prevX - steps)
          this.grid.addCell(i, prevY, true)
        }
        break
    }
  }

  decodeInstruction(instruction) {
    const match = instruction.match(/^(\w)(\S.*)/i)
    return { direction: match[1], steps: parseInt(match[2]) }
  }

  /**
   * Decode an instruction and returns its position in the grid
   * @param {String} instruction 
   * @param {Boolean} eof End of the wire.
   * @returns {Cell} The cell with the new values
   */
  executeInstruction(instruction) {
    const { direction, steps } = this.decodeInstruction(instruction)
    this.setPositions(direction, steps)
  }

  /**
   * Calculates the positions in the grid occupied by a wire
   * @param {Array} wire 
   */
  processWire(wire) {
    if (!Array.isArray(wire)) {
      throw Error('Invalid wire format.')
    }
    wire.map(instruction => this.executeInstruction(instruction))
    this.executeInstruction('E0')
    return
  }

  /**
   * Starts the minimum manhattan distance calculation
   */
  load() {
    if (!Array.isArray(this.wires)) {
      throw Error('Invalid wire array.')
    }
    this.wires.map(wire => this.processWire(wire))
    return this.grid
  }

  /**
   * Returns the grid
   * @returns {Grid} The grid model.
   */
  getGrid() {
    return this.grid
  }

}

module.exports = Panel
