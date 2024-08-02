// Cree un algoritmo que calcule los primeros 100 números de la serie de
// Fibonacci

const { read, readNumber, print } = require('../helpers')
const Fibonacci = (n) => {
	if (n <= 1) {
		return n
	} else {
		return Fibonacci(n - 1) + Fibonacci(n - 2)}
}

const main = async () => {
print("Primeros 100 numeros")
Fibonacci(100)
}

module.exports = main
