
// Escriba un algoritmo que calcule el factorial de un número ingresado por el
// usuario.

const { read, readNumber, print } = require('../helpers')

const factorial = n => {
  let result = 1
  for (let i = 1; i <= n; i++) {
    result *= i
  }
  return result
}

const main = async () => {
  const n = await readNumber('Ingrese un número: ')
  print(`El factorial de ${n} es ${factorial(n)}`)
}

module.exports = main
