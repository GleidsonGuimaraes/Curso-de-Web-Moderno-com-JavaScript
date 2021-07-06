const alunos = [
    {nome: 'João', nota: 7.3, bolsista: true },
    {nome: 'Maria', nota: 9.2, bolsista: false },
    {nome: 'Pedro', nota: 9.8, bolsista: true },
    {nome: 'Ana', nota: 8.7, bolsista: false },
]

/**
 * Desafio 1: Todos os alunos são bolsistas?
 * Desafio 2: Algum aluno é bolsista?
 */

// console.log(alunos.map(b => b.bolsista))

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))