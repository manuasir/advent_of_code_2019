const Interpreter = require('./lib/intcode_interpreter')

module.exports = {
  run: (src) => {
    const interpreter = new Interpreter(src)
    const result = interpreter.processCode()
    return result
  },
  brute_force: (src, result) => {
    let op = [0]
    const srcCopy = [...src]
    for (let noun = 0; noun <= 99 && op[0] !== result; noun++) {
      for (let verb = 0; verb <= 99 && op[0] !== result; verb++) {
        src = [...srcCopy]
        src[1] = noun
        src[2] = verb
        const interpreter = new Interpreter(src)
        op = interpreter.processCode()
        delete interpreter
        solution = (verb <= 9) ? `${noun}0${verb}` : `${noun}${verb}`
      }
    }
    return solution
  }
}