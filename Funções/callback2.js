const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem Callback
let notasBaixas = []
for (let i in notas) {
    if(notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// Com Callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)

//Utilizando arrow function 1
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

//Utilizando arrow function 2
const notasAltas = notas.filter((nota) => {
    return nota > 7 && nota < 8
})

console.log(notasAltas)