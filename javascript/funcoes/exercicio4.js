const meuArray = [30,30,40,50,5,2029]

function valoresUnicos (arr) {
    const mySet = new Set(arr)
    return [...mySet]
}

console.log(valoresUnicos(meuArray))