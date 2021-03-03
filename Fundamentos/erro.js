//Comando throw para tratar o erro e exibir uma mensagem sobre o erro
function tratarErroELancar(erro) {
    //throw new Error('...')
    //throw 10
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

//Comandos try(tentar), catch(tratar o erro) e finally(bloco chamado mesmo que não ocorra erro) 
function imprimirNomeGritado(obj) {
try { 
    console.log(obj.name.toUpperCase() + '!!!')
} catch(e) {
    tratarErroELancar(e)
} finally{
    console.log('final')
} }

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)