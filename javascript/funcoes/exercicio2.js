function calculaIdade(anos) {
    return `Daqui a ${anos} annos, ${this.nome} terá ${this.idade + anos} de idade`
}

const pessoa1 = {
    nome: 'maria',
    idade: 30
}

const pessoa2= {
    nome: 'carla',
    idade: 26
}

const animal = {
    nome: 'Fiona',
    idade:5,
    raca: 'Pug'
}

console.log(calculaIdade.apply(animal, [7]))