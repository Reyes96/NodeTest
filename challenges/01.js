// Escriba un algoritmo que al recibir un par de valores a y b representando los
// catetos de un triángulo rectangulo, devuelva el valor de la hipotenusa.



const { read, readNumber, print } = require('../helpers')

const main = async () => {

  const a = await readNumber('Ingrese el valor del cateto A: ')
  const b = await readNumber('Ingrese el valor del cateto B: ')

  const aPow = Math.pow(a, 2)
  const bPow = Math.pow(b, 2)
  const hypotenuse = Math.sqrt(aPow + bPow)

  print(`El valor de la hipotenusa es: ${hypotenuse}`)
}

module.exports = main
