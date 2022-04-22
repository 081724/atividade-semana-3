const nota1 = 8
const nota2 = 7
const nota3 = 9

const media1 = (nota1 + nota2 + nota3) / 3
console.log(media1)

if (media1 > 7) {
  console.log("Aprovado")
} else if (media1 = 7) {
  console.log("Recuperação)")
} else {
  console.log("Reprovado")
}


function media(nota1, nota2, nota3) {
  const calculo = (nota1 + nota2 + nota3) / 3
console.log(calculo)
  if (calculo > 7) {
    return console.log("Aprovado")
  }else if (calculo < 7) {
    return console.log("Reprovado")
  } else {
    return console.log("Recuperaçao")
  }
}
 media(8,7,9)
 media(0,7,9)
 media(5,7,9)