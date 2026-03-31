/* OPERADOR NOT
Programa que permite um usuário acessar o sistema se não estiver bloqueado. */

function opNot(){
let userBlock = false

    if (!userBlock) {
        console.log("Acesso permitido")
    } 
        else {
        console.log("Acesso negado")
        }

}

export {opNot}