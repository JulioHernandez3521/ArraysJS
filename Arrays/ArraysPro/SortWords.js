/*
En este desafío tienes un array con palabras, tu reto es retornar un array ordenado de la palabra con menos caracteres a la palabra con más caracteres.

Para solucionarlo vas a encontrar una función llamada sortByLength que tiene un parámetro de entrada:

words: Un array con palabras.
Dentro del cuerpo de la función sortByLength debes escribir tu solución.

Ejemplo:

Input:
[
  "Hola",
  "Viajar",
  "Sol",
  "Aprender"
]

Output:
[
  "Sol",
  "Hola",
  "Viajar",
  "Aprender"
]
 */

const sortByLength = (words) => {
    return words.sort((a, b) => a.length - b.length);
}

console.log(sortByLength([
    "Hola",
    "Viajar",
    "Sol",
    "Aprender"
]));
console.log(sortByLength([]));