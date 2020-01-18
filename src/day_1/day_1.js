
class Operation {

  constructor() {}

  /**
   * Take the mass, divide by three, round down, and subtract 2
   * @param mass The mass to get the required fuel
   * @return The fuel amount
   */
  calcFuel(mass) {
    return Math.floor(mass / 3) - 2
  }

}

module.exports = Operation