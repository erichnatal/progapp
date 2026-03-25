class Automovel {

    constructor(modelo, marca, cor, ano, motor){
        this.modelo = modelo
        this.marca = marca
        this.cor = cor
        this.ano = ano
        this.motor = motor
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


class Carro extends Automovel {
    abrirPortas(){
        return "Abrindo as portas!"
    }

}

class Moto extends Automovel {
    grau(){
        return "Olha o grau"
    }
}

const carro = new Carro('Kwid', 'Renault', 'Amarelo', 2018, '1.0L')
const moto = new Moto('S1000RR', 'BMW', 'Azul', 2025, '1000cc')

console.log(carro.acelerar())
console.log(carro.abrirPortas())

console.log(moto.acelerar())
console.log(moto.grau())