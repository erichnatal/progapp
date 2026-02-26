const pessoas = []

const pessoa1 = {
    name: "erich",
    lastname: "natal",
    age: 22
}

const pessoa2 = {
    name: "igor",
    lastname: "machado",
    age: 20
}

const pessoa3 = {
    name: "maria",
    lastname: "clara",
    age: 18
}

const pessoa4 = {
    name: "leticia",
    lastname: "costa",
    age: 20
}
const pessoa5 = {
    name: "raphael",
    lastname: "ferreira",
    age: 19
}

pessoas.push(pessoa1, pessoa2, pessoa3, pessoa4, pessoa5)

const filteredPeople = pessoas.filter((p) => p.age >= 20)
const findLeticia = pessoas.find((p) => p.name == 'leticia')

console.log(findLeticia)
console.log(pessoas.indexOf(findLeticia) + 1)

let container = document.getElementById('container')

function createCard(pessoa){
    let div = document.createElement('div')
    let span = document.createElement('span')
    span.innerHTML = `${pessoa.name} ${pessoa.age}`
    div.appendChild(span)

    return div
}

filteredPeople.forEach(pessoa => {
    const card = createCard(pessoa)
    container.appendChild(card)
})