//Abstração -> Trazer um objeto do mundo real para a programação
//Herança -> Classe filha herda atributos e metodos da classe pai
//Encapsulamento -> Gerenciar a visibilidade e o acesso ao dados (atributos e métodos)
//Polimorfismo ->   transformação de métodos baseado em uma classe

class Animal {
    #nome_cientifico
    #peso
    #alimentacao

    constructor(nome_cientifico, peso, alimentacao){
        this.#nome_cientifico = nome_cientifico
        this.#peso = peso
        this.#alimentacao = alimentacao
    }

    emitirSom(){
        console.log("Emitindo som")
    }

    locomover(){
        console.log("Animal se locomovendo")
    }

}

class Cachorro extends Animal{
    emitirSom(){
        console.log("AuAu")
    }
}

class Gato extends Animal {
    emitirSom(){
        console.log("Miau")
    }
}

const dog = new Cachorro("Dogos Latidus", 20, "Carnivoro")
const cat = new Gato("Gatus Miadus", 5, "tudo")

cat.emitirSom()