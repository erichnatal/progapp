class Veiculo {
    #id
    #marca
    #modelo
    #preco
    #disponivel

    constructor(id, marca, modelo, preco){
        if(!marca){
            return console.error("Marca não pode estar vazio!")
        }

        if(!modelo){
            return console.error("Modelo não pode estar vazio!")
        }

        if(preco <= 0){
            return console.error("Preço não pode ser zero ou menor!")
        }

        this.#id = id
        this.#marca = marca
        this.#modelo = modelo
        this.#preco = preco
        this.#disponivel = true
    }

    getId(){
        return this.#id
    }

    getMarcaModelo(){
        return this.#marca + " - " + this.#modelo
    }

    getPreco(){
        return this.#preco
    }

    setNewPreco(preco){
        if(preco <= 0){
            return console.error("Preço inválido")
        } else {
            this.#preco = preco
        }
    }

    verificarDisponibilidade(){
        return this.#disponivel === true ? true: false
    }

    venderVeiculo(){
        if(this.#disponivel === true){
            this.#disponivel = false
            return "Parabéns! Veiculo vendido"
        } else {
            return "Não foi possivel vender o veiculo."
        }
    }

    retornoEstoque(){
        if(this.#disponivel === false){
            this.#disponivel = true
            return "Veiculo devolvido ao estoque"
        } else {
            return "Veiculo já está no estoque"
        }
    }

    exibirDados(){
        return {
            id: this.getId(),
            marca_e_modelo: this.getMarcaModelo(),
            preco: this.getPreco(),
            disponibilidade: this.verificarDisponibilidade()
        }
    }
}

class Carro extends Veiculo {
    #portas

    constructor(id, marca, modelo, preco, portas){
        super(id, marca, modelo, preco, portas)

        if(portas < 1 | portas > 10) {
            return console.error("Numero de portas inválidas")
        }
    }
}

class Moto extends Veiculo{
    #cilindradas

    constructor(id, marca, modelo, preco, cilindradas){
        super(id, marca, modelo, preco, cilindradas)
        if(cilindradas > 2000 | cilindradas < 50){
            return console.error("Cilindradas inválidas")
        }
    }
}

const carro1 = new Carro(1, "Renault", "Clio", 100000, 5)
const carro2 = new Carro(2, "BMW", "320i", 10, 5)

console.log(carro2.setNewPreco(0))// tentativa de alteração com preço invalido
console.log(carro2.setNewPreco(1500)) // ALTERA PREÇO
console.log(carro2.getPreco()) // MOSTRA PESO ALTERADO

console.log(carro1.venderVeiculo()) //vende a primeira vez
console.log(carro1.venderVeiculo()) //tenta vender sem dar retorno ao estoque = TENTATIVA DE VENDA INVALIDA
console.log(carro1.retornoEstoque()) // retorna ao estoque
console.log(carro1.venderVeiculo()) // pode vender novamente = REGRA DE NEGOCIO

const moto1 = new Moto(1, "BMW", "S1000RR", 150000, 1000)

console.log(moto1.exibirDados())