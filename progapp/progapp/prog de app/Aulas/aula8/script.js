const pessoa = require('./data.json')

const pessoas = pessoa.filter((pessoa) => {
    return pessoa.salary == 2345
})

console.log(pessoas)

const pais = pessoa.map((p) => {
    return {name: p.name, parents: p.parents}
})

console.log(pais)