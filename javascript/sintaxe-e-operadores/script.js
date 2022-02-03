let n1 = Number(prompt ('Olá, digite seu primeiro número'))
let n2 = Number(prompt('Olá, digite seu segundo número'))
let resultado = n1+n2
let aviso1
let aviso2

if (resultado > 10) {
     aviso1 = ' maior que 10'
} else {
     aviso1 = ' menor que 10'
}

if (resultado > 20) {
     aviso2 = ' maior que 20'
} else {
     aviso2 = ' menor que 20'
}

if (n1==n2) {
    alert(`Os numeros ${n1} e ${n2} são iguais. Sua soma é ${resultado}, que é ${aviso1} e ${aviso2}`)
} else {
    alert(`Os numeros ${n1} e ${n2} não são iguais. Sua soma é ${resultado}, que é ${aviso1} e ${aviso2}`)
}
