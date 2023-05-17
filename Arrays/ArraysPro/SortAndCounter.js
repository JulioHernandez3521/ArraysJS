/*
Tienes un array de números entre positivos y negativos, tu reto es retornar un objeto con el número de veces que aparece un número.

Para solucionarlo vas a encontrar una función llamada counterNumbers que tiene un parámetro de entrada:

numbers: Un array de números.
Dentro del cuerpo de la función counterNumbers debes escribir tu solución.

Ejemplo 1:

Input:
[1, 2, 2, 3, 3, 3]

Output:
{
  1: 1,
  2: 2,
  3: 3,
}

Ejemplo 2:

Input:
[1, 2, -3, -1, 2, 4, 4, 1, 45, -1]

Output:
{
  '1': 2,
  '2': 2,
  '4': 3,
  '45': 1,
  '-3': 1,
  '-1': 2
}
 */

function counterNumbers(numbers) {
    return numbers.sort((a, b) => a - b).reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), {})
}
console.log(counterNumbers([1,2,2,3,3,3]))
console.log(counterNumbers([1, 2, -3, -1, 2, 4, 4, 1, 45, -1]))

/*
Should return an object with numbers

expect(received).toEqual(expected) // deep equality

- Expected - 1
+ Received + 1

Object {
"-1": 2,
"-3": 1,
"1": 2,
"2": 2,
- "4": 3,
+ "4": 2,
"45": 1,
}
Should return []

*/