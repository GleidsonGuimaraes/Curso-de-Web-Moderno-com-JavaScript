function qualTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA == ladoB && ladoB == ladoC){
        console.log("Este é um triângulo Equilátero.")
    } else if(ladoA == ladoB && ladoB != ladoC || ladoB == ladoC && ladoC != ladoA || ladoA == ladoC && ladoC != ladoB) {
        console.log("Este é um triângulo Isósceles.")
    } else {
        console.log("Este é um triângulo Escaleno.")
    }
}

qualTriangulo(4, 4, 4)
qualTriangulo(4, 4, 8)
qualTriangulo(4, 5, 6)