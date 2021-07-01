//convertendo um objeto em JSON
const obj = { a: 1, b: 2, c:3, soma() { return a + b + c}}
console.log(JSON.stringify(obj))

// os atributos e strings em JSON devem ser escritos entre ASPAS DUPLAS ""
// o restantes dos tipos de dados podem ser escritos na forma literal
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": []}'))