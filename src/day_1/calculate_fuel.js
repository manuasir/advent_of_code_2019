
const Operation = require('../operation.js')

class CalculateFuel extends Operation {
  constructor () {
    super('./day_1/mass.js')
  }

  /**
   * Take the mass, divide by three, round down, and subtract 2
   * @param mass The mass to get the required fuel
   * @return The fuel amount
   */
  calcFuel (mass) {
    return Math.floor(mass / 3) - 2
  }

  /**
   * Calculates the sum of the required fuel for a list of mass objects
   * @returns {Number} the total of required fuel
   */
  processAllMassIndices () {
    try {
      const result = this.massIndices.reduce((a, b) => a + this.calcFuel(b), 0)
      return result
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = CalculateFuel
