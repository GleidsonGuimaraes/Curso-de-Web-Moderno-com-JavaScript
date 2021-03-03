// Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b);
};

imprimirSoma(2, 3);
imprimirSoma(2); // Not a Number
imprimirSoma(2, 10, 3, 4, 5, 6, 7, 8); //Soma os dois primeiros e ignora o resto
imprimirSoma(); // Not a Number

// Funcao com retorno
function soma(a, b = 1){
    return a + b;
};

console.log(soma(2, 3)); // Para imprimir no console é necessário usar a função console.log
soma(2, 3); // Não imprime no console, porque a função só retorna o valor da soma
console.log(soma(2));
console.log(soma());