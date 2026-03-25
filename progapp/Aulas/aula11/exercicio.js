class Pessoa {
    constructor(nome, idade, altura){
        this.nome = nome
        this.idade = idade
        this.altura = altura
    }

    apresentar(){
        return `O nome é ${this.nome}, tem ${this.idade} anos e ${this.altura}m de altura`
    }
}

class Heroi extends Pessoa {
    salvar(){
        return `Sou o ${this.nome} e vim te salvar!`
    }
}

const pessoa4 = new Heroi('Capitão América', 105, 1.93)
console.log(pessoa4.salvar())

class Veiculo {
    constructor(modelo, marca, cor, ano){
        this.modelo = modelo
        this.marca = marca
        this.cor = cor
        this.ano = ano
    }

    acelerar(){
        return `O veículo ${this.marca} ${this.modelo} está acelerando`
    }

    frear(){
        return `O veículo ${this.marca} ${this.modelo} está freando`
    }

    esterçar(lado){
        return `O veículo ${this.marca} ${this.modelo} está virando para a ${lado}`
    }

}

class Animal {
    constructor(nome, especie, idade){
        this.nome = nome
        this.especie = especie
        this.idade = idade
    }

    dormir(){
        return `O(a) ${this.nome} está dormindo`
    }

}

class Produto{
    constructor(nome, preco, marca){
        this.nome = nome
        this.preco = preco
        this.marca = marca
    }

    mostrarpreco(){
        return `O produto ${this.nome} da marca ${this.marca} custa R$${this.preco}`
    }

}

// const pessoa1 = new Pessoa('Neymar', 35, 1.75)
// const pessoa2 = new Pessoa('Tony Stark', 52, 1.78)
// const pessoa3 = new Pessoa('Cebolinha', 8, 1.45)
// console.log(pessoa1.apresentar())

// const carro1 = new Veiculo('Escort', 'Ford', 'Azul', 1996)
// const carro2 = new Veiculo('Mustang', 'Ford', 'Preto', 2015)
// const carro3 = new Veiculo('Spider', 'Ferrari', 'Vermelho', 2020)
// console.log(carro1.acelerar())
// console.log(carro1.esterçar('esquerda'))

// const animal1 = new Animal('Leão', 'Mamífero', 15)
// const animal2 = new Animal('Humano', 'Mamífero', 30)
// const animal3 = new Animal('Quero-quero', 'Ave', 1)
// const animal4 = new Animal('Capivara', 'Roedor', 3)
// console.log(animal1.dormir())

// const produto1 = new Produto('Bis', 8.00, 'Lacta')
// const produto2 = new Produto('Amaciante', 9.00, 'OMO')
// const produto3 = new Produto('Bom-bril', 7.00, 'Ypê')
// const produto4 = new Produto('Shampoo', 15.00, 'Pantene')
// console.log(produto1.mostrarpreco())