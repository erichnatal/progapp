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

// const filteredPeople = pessoas.filter((p) => p.age >= 20)
// const findLeticia = pessoas.find((p) => p.name == 'leticia')

// console.log(findLeticia)
// console.log(pessoas.indexOf(findLeticia) + 1)

// let container = document.getElementById('container')

// function createCard(pessoa){
//     let div = document.createElement('div')
//     let span = document.createElement('span')
//     span.innerHTML = `${pessoa.name} ${pessoa.age}`
//     div.appendChild(span)

//     return div
// }

// filteredPeople.forEach(pessoa => {
//     const card = createCard(pessoa)
//     container.appendChild(card)
// })

// Método filter -> Filtrar de um vetor com base em uma condição
// Método Find -> Encontrar um valor com base em uma condição
// Método reduce -> Reduz o vetor para um único valor

const arr = [1,2,3,4,5]

const somaArr = arr.reduce((acc, value) => {
    return acc + value
}, 0)

console.log(somaArr)

const ageAvg = pessoas.reduce((acc, pessoa) => {
    return acc + pessoa.age / pessoas.length
}, 0)

console.log(ageAvg.toFixed(0))

//map transforma um vetor de acordo com uma condiçao

const arr2 = [1,2,3,4,5]

const mappedArr = arr2.map((arr2) => {
    return arr2 * 2
})

console.log(mappedArr)

const mappedPeople = pessoas.map((pessoa) => {
    return {name: pessoa.name, lastname: pessoa.lastname}
})

console.log(mappedPeople)