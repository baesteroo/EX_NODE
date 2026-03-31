/* FOR EACH
O for each vai percorrer pelos vetores e vai cumprimentar todos os nomes que estão dentro dele. (Usado para percorrer o vetor) */

function forEach(){
let nomes = ["Ana", "Carlos", "João"];

    nomes.forEach(function(nome) {
        console.log("Olá, " + nome);
    });

}

export {forEach}