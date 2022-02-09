
function input () {

    const OPERACAO = prompt('digite seu palindromo')    
    var inverso = ''
    for (var i = OPERACAO.length-1; i>= 0; i--) {
        inverso += OPERACAO[i]
        
    } if (OPERACAO==inverso) {
        alert(`${OPERACAO} é um palindromo`)
    } else {
        alert(`${OPERACAO} não é um palindromo`)
    }
}
input();
