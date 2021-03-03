let numero = 1;

{
    let numero = 2; // altere o nome da variável para numero2 para conferir
    console.log('dentro =', numero);
}

console.log('fora =', numero);

// A variável 'Let' procura o valor dentro do escopo de algum bloco(local), caso não encontre, ela utiliza o valor da variável que está no escopo global.

// A variável Let possui escopo global, escopo de bloco e escopo de função.