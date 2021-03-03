//Sintaxe do operador ternario ...=> expressão ? 'true' : 'false';
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado';

/*
const resultado = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado';
}
*/

console.log(resultado(7.1));
console.log(resultado(6.7));