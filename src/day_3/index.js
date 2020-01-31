const Panel = require('./lib/panel.js')

module.exports = {
  load: (wires) => {
    const panel = new Panel(wires)
    const result = panel.load()
    return result
  }

}