/*Dado un array de strings tu reto es retornar la posición dentro del array en donde existe la palabra clave "myKey" y si no existe deberás retornar false, para solucionarlo vas a encontrar una función llamada findMyKey que recibe un parámetro de entrada:

    array: Un array de strigs.
    Dentro del cuerpo de la función findMyKey debes escribir tu solución.

    Ejemplo 1:

Input: ["diamonds", "myKey", "spades", "AS"]
Output: 1

Ejemplo 2:*/

function findMyKey(array) {
    const p = 'myKey';
    return (array.includes(p)) ? array.indexOf(p) : false;
}

console.log(findMyKey( ["diamonds", "myKey", "spades", "AS"] ));
console.log(findMyKey(  ["diamonds", "hearts", "spades"] ));
console.log(findMyKey(  ["myKey", "hearts", "spades"] ));
console.log(findMyKey( [] ));