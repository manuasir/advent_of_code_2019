
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
  setPositions(dir, steps, wire) {
    let prevY = (!this.grid.isLastBlockEof()) ? this.grid.getLastBlock().getY() : 0
    let prevX = (!this.grid.isLastBlockEof()) ? this.grid.getLastBlock().getX() : 0
    switch (dir) {
      case 'E':
        this.grid.addCell(0, 0, 'EOF')
        break
      case 'U':
        for (let i = prevY + 1; i <= prevY + steps; i++) {
          this.grid.addCell(prevX, i, wire)
        }
        break
      case 'D':
        for (let i = prevY - 1; i >= prevY - steps; i--) {
          this.grid.addCell(prevX, i, wire)
        }
        break
      case 'R':
        for (let i = prevX + 1; i <= prevX + steps; i++) {
          this.grid.addCell(i, prevY, wire)
        }
        break
      case 'L':
        for (let i = prevX - 1; i >= prevX - steps; i--) {
          this.grid.addCell(i, prevY, wire)
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
  executeInstruction(instruction, wire) {
    const { direction, steps } = this.decodeInstruction(instruction)
    this.setPositions(direction, steps, wire)
  }

  /**
   * Calculates the positions in the grid occupied by a wire
   * @param {Array} wire 
   */
  processWire(wire, index) {
    if (!Array.isArray(wire)) {
      throw Error('Invalid wire format.')
    }
    wire.map(instruction => this.executeInstruction(instruction, index))
    this.executeInstruction('E0', index)
    return
  }

  /**
   * Starts the minimum manhattan distance calculation
   */
  load() {
    try {
      if (!Array.isArray(this.wires)) {
        throw Error('Invalid wire array.')
      }
      this.wires.map((wire, index) => { this.processWire(wire, index) })
      return this.grid
    } catch (error) {
      console.error(error)
    }

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
