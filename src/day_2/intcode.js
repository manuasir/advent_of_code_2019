
class IntcodeExecutor {

  constructor(code) {
    this.code = code || require('./input_src.js')
  }

  setValue(value, position) {
    try {
      this.code[position] = value
    } catch (error) {
      throw Error(error)
    }
  }

  getValue(position){
    return this.code[position]
  }

  executeInstruction(instruction){
    try {
      if (instruction[0] === 99 || instruction[0] !== 1 && instruction[0] !== 2) {
        return 0
      }
      switch(instruction[0]){
        case 1:
          this.setValue(this.getValue(instruction[1])+this.getValue(instruction[2]),instruction[3])
          break
        case 2:
          this.setValue(this.getValue(instruction[1])*this.getValue(instruction[2]),instruction[3])
          break
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  processCode() {
    try {
      let instruction = []
      for (let i=0;i<this.code.length;i++){
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

module.exports = IntcodeExecutor
