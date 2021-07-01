function Jogos (p1, p2, p3, p4, p5) {
    let pontos = [p1, p2, p3, p4, p5]
    // retorna o maior e o menor elemento de uma Array
    let max = Math.max(...pontos)
    let min = Math.min(...pontos)
    const recorde = [max, min]

    console.log(recorde)
    // console.log(pontos, max, min)
}

Jogos(10, 16, 24, 26, 7)