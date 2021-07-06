const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
/**
 * o método pop() remove o último elemento da lista
 */
pilotos.pop() // massa quebrou o carro de novo!
console.log(pilotos)

/**
 * o método push() adiciona um elemento no final da array
 */
pilotos.push('Verstappen')
console.log(pilotos)

/**
 * o método shift() remove o primeiro elemento da array
 */
pilotos.shift()
console.log(pilotos)

/**
 * o método unshift() adiciona um elemento no início da lista
 */
pilotos.unshift('Hamilton')
console.log(pilotos)

/**
 * o splice pode remover e adicionar elementos
 */
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

/**
 * o método slice() retorna um novo array a partir de um determinado índice
 */
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

/**
 * o método slice(índiceInício, índiceFim) pode retornar um elemento a partir de um índice até um elemento anterior do segundo índice informado na sintaxe do método
 */
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)