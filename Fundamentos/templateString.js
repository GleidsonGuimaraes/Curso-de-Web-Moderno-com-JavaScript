const nome = 'Rebeca';
//const concatenacao = 'Olá ' + nome + '!';
const template = `Olá 
${nome}!`; // No template string, pode ser quebrado a linha, ao contrário do concat. (``)
console.log( template);

//Expressões...

console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();

console.log(`Ei... ${up('cuidado')}!`);