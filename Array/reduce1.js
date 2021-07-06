const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false },
    {nome: 'Maria', nota: 9.2, bolsista: true },
    {nome: 'Pedro', nota: 9.8, bolsista: false },
    {nome: 'Ana', nota: 8.7, bolsista: true },
]

// Gerando um array somente com as notas
console.log(alunos.map(a => a.nota))

/**
 * Gerando a soma entre o valor acumulador e o valor atual do array com o método reduce
 * Caso deseje adicionar um valor inicial, coloque-o depois da função callback 
 */
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)