//Com var acontece o hoisting

console.log('a =', a);
var a = 2;
console.log('a =', a);

function teste() {
    console.log('a =', a);
    var a = 2;
    console.log('a =', a);
};

teste();

//Com Let não acontece o hoisting

console.log('b =', b);
Let b = 3;
console.log('b =', b);

// Conferir no canal cod3r sobre 'Dicas Javascript'