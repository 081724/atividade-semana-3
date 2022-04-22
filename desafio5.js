//Crie uma função que recebe o ano de nascimento da pessoa informando 
//se ela é maior de idade ou meno

function calcularSeEMaiorDeIdade(anoDeNascimento, ano) {
    const idade = ano - anoDeNascimento

    if (idade < 18) {
        console.log("menor de idade")
    } else {
        console.log("maior de idade")

    }

}
calcularSeEMaiorDeIdade(2005,2022)

