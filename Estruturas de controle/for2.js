const nota = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in nota) {
    console.log(i, nota[i])
}

//Percorrendo os elementos de um objeto
const pessoa = {
    nome: 'Ana',
    sobrenome: "Silva",
    idade: 29,
    peso: 64
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}