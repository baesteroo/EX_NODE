/* IF ELSE COMPOSTO 
Um progama que verifica se o aluno se saiu bem na prova. */

function ifComposto(nota){


if (nota >= 9) {
   return ("Excelente")
} 
   else if (nota >= 7) {
      return ("Bom")
}
   else if (nota >= 5) {
      return ("Regular")
}
   else {
      return ("Reprovado")
   }

}

export{ifComposto}
