const lista = [
    {
        name: 'sabao',
        preco: 200
    },
    {
        name: 'maca',
        preco: 300
    },
    {
        name: 'carne',
        preco: 500
    }
]

const sd = 2000;

function CalcSaldo (sd, lista) {
    return lista.reduce(function(prev, curr){
        return prev - curr.preco
    }, sd)
}

console.log(CalcSaldo(sd, lista))