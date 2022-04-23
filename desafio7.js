//Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão 
//entre eles. Diga se esse numero é par ou ímpar.
  
function dividirNumero(dividendo,divisor){
  let resultadoDaDivisao= dividendo/divisor
  console.log(resultadoDaDivisao)
  let calculo = resultadoDaDivisao % 2
  if (calculo == 0) {
      console.log("par")
  } else {
      console.log("impar")
  } 
}
dividirNumero(20,10)
dividirNumero(15,25)

    




