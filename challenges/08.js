// Escriba un algoritmo que al recibir un valor númerico, devuelva si es
// múltiplo de 3 y 5

const { read, readNumber, print } = require('../helpers')

const isMultiple = n => n % 3 === 0 && n % 5 === 0

const comparation = n => {
  if(isMultiple(n))
  print ("si")
  else
  print ("no")
}


const main = async () => {
  const n = await readNumber('Ingrese un número: ')
  comparation(n)
}
module.exports = main
