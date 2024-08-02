// Imprima todos los números pares que hay entre el 1 y el 100

const { read, readNumber, print } = require('../helpers')

const main = async () => {
for(let i = 1; i <= 100; i++)
if(i % 2 === 0)print(i)
}

module.exports = main
