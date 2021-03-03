function teste1(num) {
    if(num > 7)
        console.log(num)
        /* O bloco de comando <if> só lê a primeira linha de comando se não estiver com chaves. A segunda linha de código, sempre será executada independente se a condição for true ou false. Para executar mais de uma linha de código no bloco if, use chaves {}. */
        console.log('Final')
}

// teste1(6)
// teste1(8)

/*Cuidado com o ';' Não utilize com estruturas de controle */
function teste2(num) {
    if(num > 7); {
        console.log(num)
    }
}

teste2(6)
teste2(8)