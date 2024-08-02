// Escriba un algoritmo que tome del usuario un número que represente un ángulo
// en grados y devuelva el equivalente en radianes.

const { read, readNumber, print } = require('../helpers')

const gradosAradianes = Grados => Grados * Math.PI / 180


const main = async () => {

  const grados = await readNumber('Ingrese grados: ')
  print(gradosAradianes(grados).toFixed(2))
}

module.exports = main
