let palabraOculta = "Putito"
let intentos = 3

function verificarSuposicion(suposicion, palabraOculta){
    if(suposicion.toLowerCase() === palabraOculta){
        return true
    }
    return false
}

function jugarAdivinaLaPalabra(){
    console.log("Bienvenido, tienes 3 intentos para adivinar")
    console.log("---pista- la palabra oculta tiene letras")
    let input = prompt("Adivina la palabra")
    if(verificarSuposicion(input, palabraOculta)){
        alert("Ganaste")
    }else{
        intentos--
        if(intentos > 0){
            alert("Intentos restantes: " + intentos)
            jugarAdivinaLaPalabra()
        }else{
            console.log('la palabra oculta era'+ palabraOculta)
        }
    }
}
jugarAdivinaLaPalabra()