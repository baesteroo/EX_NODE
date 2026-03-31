/* MAP
Aqui o número dentro do vetor vai ser multiplicado por 2 e vai 
printar a sua versão dobrada na tela. (Usado para mudar o conteúdo do vetor)*/

function mapLaco(){
let numeros = [37, 47, 57, 67];

    let dobro = numeros.map(function(num) {
        return num * 2;
    });
    
    console.log(dobro);
}

export {mapLaco}
