// Imprima todos los números primos que hay entre el 1 y el 100

const { read, readNumber, print } = require('../helpers')

const main = async () => {
  for(let i = 2; i <= 100; i++)
  if(i / i === 1 && i / i === i)
  print(i)
  else print("No es numero primo")
}

module.exports = main
