const peso1 = 1.0;
const peso2 = Number('2.0');

/*  
    O tipo "Number", enquadra tanto números inteiros,
    quanto números racionais. 
*/

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2)); //Este comando identifica se o tipo Number é verdadeiro ou falso.

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2));  // Limita a quantidade de casas que um número apresenta na exibição.
console.log(media.toString(6)); // Faz a conversão de valores em vários sistemas de numeração.
console.log(typeof media);
console.log(typeof Number);

/*
    "number" é o tipo do dado, e
    "Number" é uma função.
*/