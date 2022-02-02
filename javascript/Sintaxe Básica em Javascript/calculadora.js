function calculadora () {
    const operacao  = prompt('Escolha uma operação: \n 1 - Soma (+) \n 2 Subtração (-) \n  3 Multiplicação (*) \n 4 Divisão Real (/) \n 5 Divisão Inteira (%) \n 6 Potenciação (^^)')

    let n1 = Number(prompt('Insira um valor'))
    let n2 = Number(prompt('Insira outro valor'))
    let resultado

    function soma () {
        resultado = n1+n2
        alert (`${n1}+${n1} é igual ${resultado}`)
    }
    function subtracao () {
        resultado = n1-n2
        alert (`${n1}-${n1} é igual ${resultado}`)
    }
    function Multiplicacao () {
        resultado = n1*n2
        alert (`${n1}*${n1} é igual ${resultado}`)
    }
    function divisaoReal () {
        resultado = n1/n2
        alert (`${n1}/${n1} é igual ${resultado}`)
    }
    function divisaoInteira () {
        resultado = n1%n2
        alert (`${n1}%${n1} é igual ${resultado}`)
    }
    function Potenciacao () {
        resultado = n1^n2
        alert (`${n1}^${n1} é igual ${resultado}`)
    }
    




    if (operacao ==1) {
        soma()
    } else if (operacao ==2) {
        subtracao()
    } else if (operacao ==3) {
        Multiplicacao()
    } else if (operacao ==4) {
         divisaoReal()
    } else if (operacao ==5) {
        divisaoInteira()
    } else if (operacao ==6) {
        Potenciacao()
    }
}
    calculadora();
