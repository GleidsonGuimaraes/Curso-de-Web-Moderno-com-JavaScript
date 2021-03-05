// class Pessoa{
//     constructor(nome) {
//         this.nome = nome
//     }

//     falar() {
//         console.log(`Meu nome é ${this.nome}`)
//     }
// }

//Resolvendo o desafio
function Pessoa(nome = 'João') {
    let n = nome

    this.falar = () => {
        console.log(`Meu nome é ${n}!`)
    }
}

const p1 = new Pessoa()
p1.falar()