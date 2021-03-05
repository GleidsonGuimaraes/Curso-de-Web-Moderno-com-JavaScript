// Call e Apply são formas diferentes de chamar uma função
function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preço * (1- this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preço: 4589,
    desc: 0.15,
    getPreco
}

global.preço = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = {preço: 49990, desc: 0.2}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))
//O apply é declarado com array
console.log(getPreco.apply(global, [0.17, '$']))