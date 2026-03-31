/* OPERADOR E
Todos os funcionários recebem bônus, mas apeas se trabalhou mais e 40h e não teve faltas. */

function operadorE (){
let hrsTrab = 45
let faltas = false

    if (hrsTrab > 40 && faltas == false) {
        console.log("Recebe bônus!")
    }
        else {
            console.log("Não recebe bônus.")
        }

}

export {operadorE}