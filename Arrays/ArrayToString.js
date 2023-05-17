/*
Pruebas
Tienes un array de objetos que representan datos de personas con los siguientes atributos:

name: string
lastName: string
age: number
Tu reto es retornar un array de strings con solo los nombres, para solucionarlo vas a encontrar una función llamada llamada getNames que recibe un parámetro de entrada:

array: Un array de objetos.
Dentro del cuerpo de la función getNames debes escribir tu solución.

Ejemplo:

Input:
[
  {
    name: 'Nicolas',
    lastName: 'Molina',
    age: 28
  },
  {
    name: 'Valentina',
    lastName: 'Molina',
    age: 19
  },
  {
    name: 'Zulema',
    lastName: 'Vicente',
    age: 21
  },
]

Output:
['Nicolas', 'Valentina', 'Zulema']
 */

function getNames(array) {
    return array.map(e => e.name ? e.name : '' );
}
const persons = [
    {
        name: 'Nicolas',
        lastName: 'Molina',
        age: 28
    },
    {
        name: 'Valentina',
        lastName: 'Molina',
        age: 19
    },
    {
        name: 'Zulema',
        lastName: 'Vicente',
        age: 21
    },
];
console.log(getNames(persons))