/* IFELSE */
import { ifSimples } from "./exercicios/ifelse/if1.js";
import { ifBasico } from "./exercicios/ifelse/if2.js";
import { ifComposto } from "./exercicios/ifelse/if3.js";
import { ifTernario } from "./exercicios/ifelse/if4.js";

/* LAÇO */
import { doWhile } from "./exercicios/laco/DoWhile.js";
import { forLaco } from "./exercicios/laco/For.js";
import { forEach } from "./exercicios/laco/forEach.js";
import { mapLaco } from "./exercicios/laco/map.js";
import { whileLaco } from "./exercicios/laco/while.js";

/* OPERADORES ARITMETICOS */
import { opDivisao } from "./exercicios/operadores_aritmeticos/divisao.js";
import { opMulti } from "./exercicios/operadores_aritmeticos/multiplicacao.js";
import { opPotencia } from "./exercicios/operadores_aritmeticos/potencia.js";
import { opRestDiv } from "./exercicios/operadores_aritmeticos/restoDaDivisao.js";
import { opSoma } from "./exercicios/operadores_aritmeticos/soma.js";
import { opSub } from "./exercicios/operadores_aritmeticos/subtracao.js";
import { opConta } from "./exercicios/operadores_aritmeticos/conta.js";

/* OPERADORES LOGICOS */
import { operadorE } from "./exercicios/operadores_logicos/E1.js";
import { opNot } from "./exercicios/operadores_logicos/Not3.js";
import { operadorOu } from "./exercicios/operadores_logicos/Ou2.js";

/* OPERADORES RELACIONAIS */
import { opExclamacao } from "./exercicios/operadores_relacionais/opExclamacao.js";
import { operadorId } from "./exercicios/operadores_relacionais/opIdade.js";
import { operadorIgual } from "./exercicios/operadores_relacionais/opIgual2.js";
import { operadorMaior } from "./exercicios/operadores_relacionais/opMaior.js";
import { operadorMenor } from "./exercicios/operadores_relacionais/opMenor.js";
import { opIgualMenor } from "./exercicios/operadores_relacionais/opMenorIgual.js";

/* SWITCH */
import { sinalSwitch } from "./exercicios/switch/sinal.js";

/* VARIAVEL */
import { constEx } from "./exercicios/variavel/ex_const.js";
import { letEx } from "./exercicios/variavel/ex_let.js";
import { varEx } from "./exercicios/variavel/ex_var.js";

/* VETOR */
import { buscaVetor } from "./exercicios/vetor/busca.js";
import { somaVetor } from "./exercicios/vetor/soma.js";

import express from "express"
const app = express()
app.use(express.json())

    // IF ELSE
    app.get("/if1/:idade", (req, res) => {
        let {idade} = req.params
        let msg = ifSimples(idade)
        res.send(msg)
    })

    app.post("/if2", (req, res) => {
        let {numero} = req.body
        let resultado = ifBasico (numero)
        res.send(resultado)
    })

    app.get("/if3", (req, res) => {
    let { nota } = req.query;
    let resultado = ifComposto(Number(nota));
    res.json(resultado)
    })

    app.get("/if4/:voto", (req, res) => {
        let { id } = req.params;
        let resultado = ifTernario(id)
        res.send(resultado)
    })


    // LAÇOS
    app.post("/for", (req, res) => {         //fazerdps
        let {numeros} = req.body;
        let resultado = forLaco (numeros)
        res.send(resultado)
    })

    app.get("/while", (req, res) => {
        let {contador} = req.query;
        let resultado = whileLaco (Number(contador))
        res.send(resultado)
    })

    app.get("/dowhile/:numero", (req, res) => { //fazerdps
        let {numero} = req.params;
        let resultado = doWhile(numero)
        res.json(resultado)
    })


    // OPERADORES ARITIMETICOS
    app.get("/divisao/:pessoa/:bolinhos", (req, res) => {
        let {pessoa} = req.params;
        let {bolinhos} = req.params;
        let resultado = opDivisao(pessoa, bolinhos)
        res.json(resultado)
    })

    app.post("/multiplicacao", (req, res) => {
        let macas = req.body
        let arvores = req.body
        let resultado = opMulti(macas, arvores)
        res.send(resultado)
    })

    app.get("/potencia", (req, res) => {
        let {base} = req.query
        let {expoente} =  req.query
        let resultado = opPotencia(Number(base, expoente))
        res.send(resultado)
    })

    app.post("/restoDaDivisao", (req, res) => {
        let totalDoces = req.body
        let capacCaixas = req.body
        let resultado = opRestDiv(totalDoces, capacCaixas)
        res.send(resultado)
    })

    app.get("/soma/:meninas/:meninos", (req, res) => {
        let {meninas} = req.params;
        let {meninos} = req.params;
        let resultado = opSoma(meninas, meninos)
        res.json(resultado)
    })

    app.get("/subtracao", (req, res) => {
        res.send(opSub())
    })

    app.get("/conta", (req, res) => {
        res.send(opConta())
    })


    // OPERADORES LOGICOS
    app.get("/E1", (req, res) => {
        res.send(operadorE())
    })

    app.get("/Not3", (req, res) => {
        res.send(opNot())
    })

    app.get("/Ou2", (req, res) => {
        res.send(operadorOu())
    })


    // OPERADORES RELACIONAIS
    app.get("/opExclamacao", (req, res) => {
        res.send(opExclamacao())
    })

    app.get("/opIdade", (req, res) => {
        res.send(operadorId())
    })

    app.get("/opIgual2", (req, res) => {
        res.send(operadorIgual())
    })

    app.get("/opMaior", (req, res) => {
        res.send(operadorMaior())
    })

    app.get("/opMenor", (req, res) => {
        res.send(operadorMenor())
    })

    app.get("/opMenorIguala", (req, res) => {
        res.send(opIgualMenor())
    })


    // SWITCH
    app.get("/sinal", (req, res) => {
        res.send(sinalSwitch())
    })

    // VARIAVEL
    app.get("/ex_const", (req, res) => {
        res.send(constEx())
    })

    app.get("/ex_let", (req, res) => {
        res.send(letEx())
    })

    app.get("/ex_var", (req, res) => {
        res.send(varEx())
    })

    // VETOR
    app.get("/busca", (req, res) => {
        res.send(buscaVetor())
    })

    app.get("/soma", (req, res) => {
        res.send(somaVetor())
    })


app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})