/* EXERCÍCIO VETOR
O programa mostrará a soma dos valores que existem dentro do vetor. */

function somaVetor(){
let valores = [67, 67, 67, 67];
let soma = 0;
    
    for (let i = 0; i < valores.length; i++) {
        soma = soma + valores[i];
    }
    console.log("A soma dos valores é:", soma);

}

export {somaVetor}