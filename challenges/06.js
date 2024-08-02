// Escriba un algoritmo que capture del usuario la altura en centimetros y el
// peso en kilogramos de una persona y devuelva su indice de masa corporal.

const { read, readNumber, print } = require('../helpers')



const IMC = (altura,peso) => {
  return peso / (altura * altura)
}
const main = async () => {
const altura = await readNumber('Ingrese Su altura en CM: ')
const peso = await readNumber('Ingrese Su peso en KG: ')

print('Su IMC es:'+ IMC(altura, peso)) 

}

module.exports = main
