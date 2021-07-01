// pessoa -> (memória)123 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// Erro: pessoa = {...} -> (memória)456
// pessoa = {nome: 'Ana'}

// Esse método do Object, congela o objeto não permitindo que ele seja modificado
Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)

//criando um objeto que não pode ser modificado
const pessoaConstante = Object.freeze({nome: 'Ana'})
console.log(pessoaConstante)

/**Em uma constante que recebe um objeto como dado, os dados que compõe o objeto podem ser alterados, porém a constante não pode receber um novo objeto, pois ela estaria referenciando outro endereço de memória gerando um erro. */