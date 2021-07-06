const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

/**
 * para acessar o índice usando o método forEach, você é obrigado a passar o primeiro parâmetro na função callBack, que recebe o elemento, para depois receber o índice no segundo parâmetro passado
 * no terceiro parâmetro passado, a função callBack recebe o array
 * do quarto parâmetro em diante, a função callBack retorna undefined
 */
aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1} ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)