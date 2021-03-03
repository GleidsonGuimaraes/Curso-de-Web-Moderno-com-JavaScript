let valor; // undefined é uma variável não inicializada
console.log(valor);

valor = null; //ausência de valor
console.log(valor);
//console.log(valor.toString()); //Erro!

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined //evite atribuir undefined, deixe para o programa o fazer quando necessário
console.log(!!produto.preco);
//delete produto.preco
console.log(produto);

produto.preco = null // sem preço
console.log(!!produto.preco);
console.log(produto);