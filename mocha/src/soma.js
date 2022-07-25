//var sum = require('../sum.js');

const sum = (numbers) => {
    var soma = 0
    for (let index = 0; index < numbers.length; index++) {
        soma = soma + numbers[index]
    }
    return soma;
  }

module.exports = sum