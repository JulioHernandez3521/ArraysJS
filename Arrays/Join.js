/*Dado un array de strings tu reto es retornar un string en donde cada elemento del array esté separado por comas, para solucionarlo vas a encontrar una función llamada joinString que recibe un parámetro de entrada:

    words: Un array de strigs.
    Dentro del cuerpo de la función joinString debes escribir tu solución.

    Ejemplo 1:

Input: ["amor", "sol", "piedra", "día"]
Output: "amor,sol,piedra,día"
solution();

Ejemplo 2:

Input: ["diamonds", "hearts", "spades"]
Output: "diamonds,hearts,spades"*/

function joinString(words) {
    return words.join();
}

console.log(joinString( ["amor", "sol", "piedra", "día"] ))
console.log(joinString( ["diamonds", "hearts", "spades"] ))
console.log(joinString( [1, 2, 3, 7] ))
console.log(joinString( [] ))