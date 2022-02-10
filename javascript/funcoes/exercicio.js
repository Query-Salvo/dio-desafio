const alunos = [
    {
        nome: 'João',
        nota: 3,
        turma: '18'
    }, 
    {
        nome: 'sofia',
        nota: 9,
        turma: '18'
    }, 
    {
        nome: 'Paulo',
        nota: 6,
        turma: '2c'
    }, 
]


function alunosAprovados (arr, media) {
    let aprovados = []
    for (let i = 0; i <arr.length; i++) {

      const   {nota, nome} = arr[i]
        if(nota >= media) {
            aprovados.push(nome)
        }
    }
    return(aprovados)
}

console.log(alunosAprovados(alunos,5))

