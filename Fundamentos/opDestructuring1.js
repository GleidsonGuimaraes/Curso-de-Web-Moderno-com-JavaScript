// novo recurso do ES2015
// o operador destructuring é responsável por extrair atributos de um objeto

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
};

const {nome, idade} = pessoa; // extraindo atributos do ojeto pessoa;
console.log(nome, idade);

const {nome: n, idade: i} = pessoa; // renomeando os atributos diretamente no destructuring
console.log(n, i);

const {endereco: {logradouro, numero, cep}} = pessoa; // extraindo atributos que estão dentro de outros atributos
console.log(logradouro, numero, cep); // não é possível renomear atributos nesse contexto

/*const {conta: {ag, num}} = pessoa;
console.log(ag, num); */  