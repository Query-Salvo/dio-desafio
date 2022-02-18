function devolvePares (arr) {
    return arr % 2 == 0
}

const num = [1,2,3,4,5,6,7,8,9,10]

console.log('seus pares: ', 
num.filter(devolvePares))