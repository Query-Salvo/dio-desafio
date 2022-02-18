const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis (arr, thisArg) {
    let result = arr.map((item) => item * this.value, thisArg)
    return result
    console.log(result)
}

const nums = [1,2]

console.log('maça', mapComThis(nums,maca))