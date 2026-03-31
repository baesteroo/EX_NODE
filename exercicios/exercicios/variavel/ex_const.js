/* Crie uma constante chamada PI com valor 3.14. Mostre no console o valor dela.
Tente alterar o valor depois e observe o que acontece. */

function constEx(){
const PI = 3.14;

    console.log(PI);
    PI = 5; // isso vai dar erro, o const nao pode ser alterado depois de declarado :)

}

export {constEx}