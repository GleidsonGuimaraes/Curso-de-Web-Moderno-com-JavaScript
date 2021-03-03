let isAtivo = false; // let é uma das formas para declarar uma variável.
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo); // Sinal de negação (!).

console.log('os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('os falsos...'); // Tudo que não tem valor, ou é indefinido...
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('pra finalizar...');
console.log(!!('' || null || 0 || ' ')); //Dentro de uma expressão, JS retorna o que for verdadeiro.

let nome = '';
console.log(nome || 'Desconhecido'); // Exibe a variável ou 'Desconhecido', caso a variável esteja vazia.