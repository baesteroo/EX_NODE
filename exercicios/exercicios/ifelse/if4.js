/* IF ELSE TERÁRIO 
Um progama que verifica se você já pode votar. */

function ifTernario(id) {

    let resultado = id >= 16 ? "Pode votar." : "Não pode votar.";
    return(resultado)
}

export {ifTernario}