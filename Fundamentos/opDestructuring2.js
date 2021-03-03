const [a] = [10];
console.log(a);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);

// não é recomendável utilizar essa notação por ser de difícil leitura

const [, [, nota]] = [[1, 2, 3], [4, 5, 6]];
console.log(nota);