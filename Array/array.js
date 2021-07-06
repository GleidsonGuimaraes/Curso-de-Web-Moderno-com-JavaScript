console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)

//método para organizar os dados na Array
aprovados.sort()
console.log(aprovados)

/**
 * método que deleta o dado daquele índice, mas não reorganiza o array
 * deixando aquela posição como undefined
**/
delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

/**
 * o método splice permite que você delete, adicione, ou delete e adicione ao mesmo tempo elementos a partir de um determinado índice
 * Sintaxe nomeDaArray.splice(índiceDeInício, quantidadeDeElementosExcluídos, <'elementosAdicionados'>)
 * você pode adicionar quantos elementos quiser, basta separá-los por <,>
 */
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
console.log(aprovados)