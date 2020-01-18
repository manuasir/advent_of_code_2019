
class Operation {

  constructor() {
    this.massIndices = require('./mass.js')
  }

  /**
   * Take the mass, divide by three, round down, and subtract 2
   * @param mass The mass to get the required fuel
   * @return The fuel amount
   */
  calcFuel(mass) {
    return Math.floor(mass / 3) - 2
  }

  /**
   * Calculates the sum of the required fuel for a list of mass objects
   * @returns {Number} the total of required fuel
   */
  processAllMassIndices(){
    try {
      let sum = 0
      for(let mass of this.massIndices){
        sum+=this.calcFuel(mass)
      }
      return sum
    } catch (error) {
      console.error(error)
    }
  }

}

module.exports = Operation