// Escriba un algoritmo que calcule la distancia entre los puntos A y B

const { print } = require('../helpers');

const a = { x: 45, y: 12 };
const b = { x: 180, y: 99 };

let distancia = Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));

const main = async () => {
  print(`La distancia entre los puntos A y B es: ${distancia.toFixed(2)}`);
};

module.exports = main;
