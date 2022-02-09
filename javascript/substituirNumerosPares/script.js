var array = [1,2,3,5,6,7,8]

if (!array.length) {
    console.log (-1)
} else {

for (var i = 0; i <= array.length-1; i++ ) {
    if (array[i]%2 == 0) {
        array[i] = 0
    }
}
console.log (array)}