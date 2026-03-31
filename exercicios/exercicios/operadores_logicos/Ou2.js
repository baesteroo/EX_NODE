/* OPERADOR OU
Programa que analisa se os estudantes ganharam pontos extra ou não. */

function operadorOu(){
let nota = 7
let trabalhosEntregues = true

    if (nota > 9 || trabalhosEntregues) {
        console.log("Ganhou pontos extras! :)")
    } 
        else {
            console.log("Não ganhou pontos extras :(")
        }

}

export {operadorOu}