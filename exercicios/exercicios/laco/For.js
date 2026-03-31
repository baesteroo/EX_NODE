/* FOR
Utilizado no progama para identificar a quantidade de números pares. (Quando sabe o número de repetições) */

function forLaco(numeros){


    let quantidadePares = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            quantidadePares++;
        }
}

console.log("Quantidade de números pares:", quantidadePares);

}

export {forLaco}
