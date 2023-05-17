/*
Tienes un array con una lista de strings que representan el nombre y apellido de varios usuarios, tu reto es retornar ese array ordenado alfabéticamente por el apellido, para solucionarlo vas a encontrar una función llamada sortByLastName que tiene un parámetro de entrada:

array: Un array de strings.
Dentro del cuerpo de la función sortByLastName debes escribir tu solución.

Ejemplo:

Input:
[
  "Nicolas Molina",
  "Andrea Perez",
  "Zulema Vicente",
  "Juan Amador"
]

Output:
[
  "Juan Amador",
  "Nicolas Molina",
  "Andrea Perez",
  "Zulema Vicente"
]
 */

function sortByLastName(array) {

    return array.sort((a, b) => {
        a = a.toLowerCase().split(' ');
        b = b.toLowerCase().split(' ');
        if (a[1] === b[1]) {
            return 0;
        }
        if (a[1] < b[1]) {
            return -1;
        }
        return 1;
    });

}

console.log(sortByLastName([
    "Nicolas Molina",
    "Andrea Perez",
    "Zulema Vicente",
    "Juan Amador"
]));console.log(sortByLastName([]));

/*
Output:
[
  "Juan Amador",
  "Nicolas Molina",
  "Andrea Perez",
  "Zulema Vicente"
]

*/