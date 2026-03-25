const biblioteca = []

class Item {
    #id 
    #title
    #available

    constructor(id, title){
        if(!title){
            return console.error("Erro!")
        }

        this.#id = id
        this.#title = title
        this.#available = true
        biblioteca.push({id, title, available: true})
    }

    getId(){
        return this.#id
    }

    getTitle(){
        return this.#title
    }

    setTitle(title){
        return !title ? console.error("Erro ao alterar o título") : this.#title = title
    }

    verifyAvailability(){
        return this.#available === true ? true : false
    }

    lendItem(){
        if(this.#available === true){
            return this.#available = false
        } else {
            return "Livro não está disponível"
        }
    }

    returnitem() {
        if(this.#available === false){
            return this.#available = true
        } else {
            return "Livro não foi emprestado."
        }
    }

    getInfos(){
        return{
            id: this.getId(),
            title: this.getTitle(),
            available: this.verifyAvailability()
        }
    }

    showAllItems() {
        return biblioteca
    }
}

class Book extends Item {
    #author

    constructor(id, title, author){
        super(id, title, author)

        if(!author){
            return console.error("Autor não pode ser vazio.")
        }
        this.#author = author
    }
}

class Movie extends Item {
    #duration
    constructor(id, title, duration){
        super(id, title, duration)
        
        if(!duration<0){
            return console.error("Não é possivel cadastrar filme com duração menor que 0m.")
        }
    }
}

const livro1 = new Book(1, "Revolução dos Bichos", "George Orwell")
const livro2 = new Book(2, "O Principe", "Nicolau Maquiavel")
const filme1 = new Movie(1, "Homem de Ferro", "140")
const filme2 = new Movie(1, "Red: Aposentados e Perigosos", "150")

console.log(biblioteca)
