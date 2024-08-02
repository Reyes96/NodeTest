
//for: Utiliza un bucle for cuando necesites ejecutar un bloque de código un número específico de veces. Por ejemplo, cuando quieres iterar sobre una secuencia de números o realizar una acción un número fijo de veces.

for (let i = 0; i < 5; i++) {
    console.log(i);
}

//while: Utiliza un bucle while cuando no sepas cuántas veces se ejecutará el bloque de código y la condición de terminación esté basada en una expresión booleana.

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

//do-while: Similar a while, pero garantiza que el bloque de código se ejecute al menos una vez antes de verificar la condición de terminación.

let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);

//forEach: Utiliza forEach cuando quieras iterar sobre cada elemento de un array y ejecutar una función de callback para cada uno.

const numeros = [1, 2, 3, 4, 5];
numeros.forEach(function(numero) {
    console.log(numero);
});

//for...in: Utiliza for...in para iterar sobre las propiedades enumerables de un objeto.

const persona = { nombre: 'Juan', edad: 30, ciudad: 'Madrid' };
for (let propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`);
}

//for...of: Utiliza for...of para iterar sobre elementos iterables, como arrays o cadenas de texto.

const colores = ['rojo', 'verde', 'azul'];
for (let color of colores) {
    console.log(color);
}

//La elección del bucle adecuado depende del contexto y de tus necesidades específicas en cada situación. Es importante entender cómo funcionan cada tipo de bucle y cuándo es más apropiado usar uno u otro.
