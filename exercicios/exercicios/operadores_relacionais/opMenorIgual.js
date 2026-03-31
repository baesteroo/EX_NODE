/* OPERADOR <=
Progama que verifica quando a quantidade de produtos em estoque for < ou = a 10 */

function opIgualMenor(){
let estoque = 8

    if (estoque <= 10) {
        console.log("ALERTA! Estoque baixo.")
    }
        else {
         console.log("Estoque normal :)")
    }

}

export {opIgualMenor}