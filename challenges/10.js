// Escriba un algoritmo que tome del usuario un número que represente un ángulo
// en radianes y devuelva el equivalente en grados.

const { read, readNumber, print } = require('../helpers')

const radianesAGrados = radianes => radianes * 180 / Math.PI



const main = async () => {

  const AnguloRadianes = await readNumber('Ingrese angulo en Radianes: ')
  print('Angulo en grados:' + ' ' + radianesAGrados(AnguloRadianes).toFixed(2))

}

module.exports = main
