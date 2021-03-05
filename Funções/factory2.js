function criarProd(n, p, q) {

    function prod() {
        return{
            nome: n,
            preço: p,
            quantidade: q,
            total: preçoFinal
        }
    }

    let preçoFinal = 0

    this.desconto = () => {
        if (q > 3 && q < 10){
            preçoFinal = (p * q) * 0.02
        } else if (q > 9) {
            preçoFinal = (p * q) * 0.05
        } else {
            preçoFinal = p * q
        }
    }

    // this.novoProd = () => {
        
    // }
}

const leite = new criarProd('Leite', 2.68, 20)
leite.desconto()
console.log(prod())
