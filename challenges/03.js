// Dada la siguiente geocerca, escriba un algoritmo que pida al usuario un
// valor lat y lng representando la ubicación de una unidad, y devuleva si
// dicha unidad está dentro o fuera de la geocerca radial.

const { read, readNumber, print } = require('../helpers')

const geofence = { radius: 120, lat: 900, lng: 492 }

const main = async () => {
  let latitud = await readNumber('Ingrese la latitud: ')
  let longitud = await readNumber('Ingrese la longitud: ')

  let distance = Math.sqrt(Math.pow(latitud - geofence.lat, 2) + Math.pow(longitud - geofence.lng, 2))

  print(distance <= geofence.radius ? 'Dentro de geocerca' : 'Fuera de geocerca ')

}

module.exports = main
