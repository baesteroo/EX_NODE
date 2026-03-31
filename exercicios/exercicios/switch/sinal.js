/* SWITCH
SINALIZACÃO NO TRANSITO; Vermelho - pare, Amarelo - atenção, Verde - prossiga. Nesse Switch o que
vai ser feito é que cada cor represente uma das sinalizações. */

function sinalSwitch(){
let cor = "verde";

    switch (cor) {
        case "verde":
            console.log("Sinal verde, prossiga.");
            break;
    
        case "amarelo":
            console.log("Sinal amarelo, atenção.");
            break;
    
        case "vermelho":
            console.log("Sinal vermelho, pare imediatamente.");
            break;
    
        default:
            console.log("Cor de sinal incorreta");
    }

}

export {sinalSwitch}