const escola = "Cod3r"; 

/* 
    String é um tipo de dado formado por um conjunto de caracteres.
    Geralmente dispostos dentro de delimitadores, como exemplificado acima "Cod3r".
*/

console.log(escola.charAt(2)); 
console.log(escola.charAt(5));

/* 
    Função da String para indicar o caracter apresentado de acordo com 
    determinado (índice).
*/

console.log(escola.charCodeAt(3)); // Função que te retorna o valor do caracter dentro da tabela Unicode.
console.log(escola.indexOf('3')); // Função que retorna o índice em que o caracter se encontra na String.

// ATENÇÃO PARA A FORMA COMO SÃO REPRESENTADOS OS CARACTERES NA FUNÇÃO .indexOf().

console.log(escola.substring(1)); // Demonstre os caracteres à partir do índice x
console.log(escola.substring(0, 3)); /* Demonstre os caracteres do índice x inicial até x final, 
sem incluir o x referente ao índice final. */

console.log('Escola '.concat(escola).concat("!")); /* Literal é um dado utilizado sem ser armazenado 
em uma variável. Nesta função também pode ser utilizado o símbolo "+" para substituir o .concat   */
console.log(escola.replace(3, "e")); // Substitui o caracter dentro do índice determinado da String.

console.log('Ana,Maria,Pedro'.split(",")); 