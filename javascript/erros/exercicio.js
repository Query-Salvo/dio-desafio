function validaArray (arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError('Envie os parametros');

        if (typeof arr !== 'object') throw new TypeError('O aray precisa ser do tipo object');

        if (typeof num !== 'number') throw new TypeError('O num precisa ser do tipo number');

        if (arr.length !== num) throw RangeError('Tamanho inválido');

        return arr;
    } catch(e) {
        if (e instanceof ReferenceError) {
            console.log('Este erro é um referenceError') 
            console.log(e.name) 
            console.log(e.stack)
        } 
        else if (e instanceof TypeError) {
            console.log('Este erro é um TypeError') 
            console.log(e.name) 
            console.log(e.stack)
        } 
        else if (e instanceof RangeError) {
            console.log('Este erro é um RangeError') 
            console.log(e.name) 
            console.log(e.stack)
        } else {
            console.log('Erro desconhecido' +e)
        }
    }
}

console.log(validaArray([], 'a'));

