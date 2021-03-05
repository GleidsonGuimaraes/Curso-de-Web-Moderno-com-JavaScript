//Tentativa de realizar o exercício
function criarProd(n, p, q) {
    let preçoFinal = p * q
    if(q > 4) {
        let desconto = (p * q) * 0.05
        preçoFinal = preçoFinal - desconto
        console.log('Você obteve um desconto de: R$ ' + desconto)
    }
    return{
        nome: n,
        preço: p,
        quantidade: q,
        total: preçoFinal
    }
}

const leite = new criarProd('Leite', 2.68, 10)
console.log(leite)

//Correção do exercício

function criarProduto(nome, preço) {
    return{
        nome,
        preço,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.99))
