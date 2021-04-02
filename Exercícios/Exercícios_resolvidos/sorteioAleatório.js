var sorteado = aleatorio()
var escolhido

function aleatorio() {
    return Math.floor(Math.random()*10)
}

function jogadas(a) {
    escolhido = a
}

// Passe o valor
jogadas(3)

// Testando as variáveis
// console.log(sorteado, typeof(sorteado), escolhido, typeof(escolhido));

if (escolhido == sorteado) 
{
    console.log("Parabéns! Valor correto.")
}
else if (escolhido < sorteado)
{
    console.log("Tente novamente. Valor está abaixo do sorteado.")
}
else
{
    console.log("Tente novamente. Valor está acima do sorteado.")
}