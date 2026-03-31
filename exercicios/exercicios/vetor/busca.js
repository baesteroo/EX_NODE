/* EXERCÍCIO VETOR
No exercício o progama vai conferir se o número pedidio existe no vetor, se exisitr o número aparecerá 
como encontrado, se não, não encontrado. */

function buscaVetor(){
let numeros = [10, 25, 30, 45, 50];
let busca = 31; 
let encontrado = false;
    
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === busca) {
            encontrado = true;
            break;
        }
    }
    
    if (encontrado) {
        console.log("Número encontrado!");
    } else {
        console.log("Número não encontrado!");
    }

}

export {buscaVetor}