// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b){
    console.log(a + b);
};

imprimirSoma(2, 3);

//Armazenando uma funcao arrow em uma variavel "=> = function"
const soma = (a, b) => {
    return a + b;
};

console.log(soma(2, 4));

// retorno implícito
const subtracao = (a, b) => a - b;

console.log(subtracao(2,5));

const imprimir2 = a => console.log(a);
imprimir2('Funções de uma única linha não precisam utilizar chaves e podem utilizar o arrow function');