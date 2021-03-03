let dobro = function (a) {
    return 2 * a
}

/* A função arrow sempre é uma função anônima. Para chamá-la, você precisa armazenar ela em uma variável */

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui parâmetro, mas pode ser ignorado na hora de chamar
console.log(ola())

//sintaxe de uma arrow function(CFB Cursos)
// (parâmetros) => expressão