function forInExemplo(obj) {
    for(prop in obj) {
        console.log(obj[prop])
    }
}

const meuObjeto = {
    nome: "Joao",
    idade: "20",
    cidade: "Salvador"
}

forInExemplo(meuObjeto); 

function logLetras(palavra) {
    for(letra of palavra) {
        console.log(letra);
    }
}

const palavra = 'abacaxi'

logLetras(palavra)

