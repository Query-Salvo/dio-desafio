console.log(this);

const pessoa = {
    nome: 'miguel'
}

const animal = {
    nome: 'murf'
}

function getSomething () {
    console.log(this.nome)
}

getSomething.call(animal); 

const myObj = {
    num1: 2,
    num2: 4,
}

function soma(a,b) {
    console.log(this.num1 + this.num2 + a + b)
}

const retornaNomes = function () {
    return this.nome
}
let bruno = retornaNomes.bind({nome: 'Bruno'})

bruno()

soma.call(myObj, 1,5)

getSomething.apply(pessoa)

soma.apply(myObj, [1,5])