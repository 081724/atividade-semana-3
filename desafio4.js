//Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.
function mostrarSeNumeroEImparOuPar(numero) {
    let calculo = numero % 2
    if (calculo == 0) {
        console.log("par")
    } else {
        console.log("impar")
    }
}
 mostrarSeNumeroEImparOuPar(10)
 mostrarSeNumeroEImparOuPar(11)