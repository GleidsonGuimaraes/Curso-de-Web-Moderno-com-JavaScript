const prod1 = {}; // Um par de chaves é uma forma literal de escrever um objeto.
prod1.nome = 'Celular Ultra Mega';
prod1.preco = 499.99;
prod1['Desconto legal'] = 0.40; // evitar atributos com espaço

console.log(prod1);

const prod2 = {

    nome: 'Camisa polo',
    preco: 79.90,
    obj: {
        nome: 1
    }
}

console.log(prod2);

/* Pode ser utilizado um objeto dentro do outro. */