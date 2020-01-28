const Interpreter = require('./intcode_interpreter')

module.exports = {
    run: (src) => {
        const interpreter = new Interpreter(src)
        const result = interpreter.processCode()
        return result
    }
}