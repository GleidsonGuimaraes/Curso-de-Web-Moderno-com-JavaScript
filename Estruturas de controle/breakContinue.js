const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Desvio de fluxo para fora do laço corrente que ele suporta
for(let x in nums){
    if(x == 5){
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

// Interrompe a repetição corrente e vai para a próxima
for(let y in nums) {
    if(y > 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

// Não use este tipo de estrutura
externo: for( a in nums){
    for( b in nums){
        if(a == 2 && b == 3) break externo 
            console.log(`Par = ${a},${b}`)
        
    }
}