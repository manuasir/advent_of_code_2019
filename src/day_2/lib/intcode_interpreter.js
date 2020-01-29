
class IntcodeInterpreter {

  constructor(code) {
    this.code = code
  }

  setValue(value, position) {
    try {    
      this.code[position] = value
    } catch (error) {
      console.error('Error setting value: ',error)
    }
  }

  /**
   * Gets a value
   * @param {Number} position 
   */
  getValue(position) {
    try {
      if (position >= this.code.length) {
        throw Error('Buffer overflow')
      }
      return this.code[position]
    } catch (error) {
      console.error('Error: ',error)
    }
  }

  /**
   * Execute a list of four bytecode instructions
   * @param {Array} instruction 
   */
  executeInstruction(instruction) {
    try {
      if (instruction[0] === 99 || instruction[0] !== 1 && instruction[0] !== 2) {
        return 0
      }
      switch (instruction[0]) {
        case 1:
          this.setValue(this.getValue(instruction[1]) + this.getValue(instruction[2]), instruction[3])
          break
        case 2:
          this.setValue(this.getValue(instruction[1]) * this.getValue(instruction[2]), instruction[3])
          break
      }
      return
    } catch (error) {
      throw new Error(error)
    }
  }

  processCode() {
    try {
      let instruction = []
      for (let i = 0; i < this.code.length; i++) {
        const mod = i % 4
        instruction.push(this.code[i])
        if (mod === 3) {
          this.executeInstruction(instruction)
          instruction = []
        }
      }
      return this.code
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = IntcodeInterpreter
