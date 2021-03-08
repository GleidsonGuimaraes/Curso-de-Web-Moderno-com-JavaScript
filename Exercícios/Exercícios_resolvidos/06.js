function jurosSimples(capInicial, taxaJuros, tempoAplicado) {
    let juros = taxaJuros / 100
    let valorJuros = capInicial * juros
    let montante = capInicial + valorJuros

    console.log("Foi cobrado uma taxa de", taxaJuros,"% de juros sobre o valor de R$", capInicial,"reais, totalizando R$", valorJuros,"reais.")
    console.log("O montante final foi de", montante)
}

jurosSimples(1500, 8)

function jurosCompostos(capInicial, taxaJuros, tempoAplicado) {
    let juros = taxaJuros / 100
    let montante = (capInicial * Math.pow(1 + juros, tempoAplicado))
    // let montante = capInicial + valorJuros
    
    console.log("Foi cobrado uma taxa de", taxaJuros, "% sobre o valor de R$", capInicial, "reais durante o prazo de", tempoAplicado, "anos.")
    console.log("O montante final foi de R$", montante.toFixed(2))
}

jurosCompostos(1500, 6, 3)