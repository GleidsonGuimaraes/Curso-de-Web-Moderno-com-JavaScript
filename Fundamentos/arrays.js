const valores = [7.7, 8.9, 6.3, 9.2]; //Um array é declarado utilizando colchetes [].
console.log(valores[0], valores[3]); //Identificando os valores do array através dos índices
console.log(valores[4]); //Não da erro, retorna como indefinido

valores[4] = 10; // O array não possui limites, você pode adicionar valores e casas sempre que quiser
console.log(valores);
console.log(valores.length);

valores.push({id: 3}, false, null, 'teste'); //Não misture dados no array, apesar dele ser heterogêneo.
console.log(valores);

console.log(valores.pop()); // Exibe o último objeto da array.
delete valores[0];  //Deleta um objeto na array de acordo com o índice.
console.log(valores);

console.log(typeof valores); //Array no JS é do tipo objeto.

/* Dentro de um array, pode ser adicionado elemetos de vários tipos. Pode
ser adicionado mais elementos e/ou retirados também. Apesar da sua flexibilidade,
não é aconselhado que se utilize diferentes tipos de dados dentro de um mesmo
array. */