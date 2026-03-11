const data = require('./data.json')

const total = data.vehicles.reduce((acc, c) => {
    return acc + c.price_brl
}, 0)

console.log("R$ " + total)

const mapMontadoras = data.vehicles.map((c) => {
    return c.brand
})

console.log(mapMontadoras)

const mapCarros = data.vehicles.map((c) => {
    return c.model
})

console.log(mapCarros)

const ValorPorCarro = data.vehicles.reduce((acc, c) => {
    acc[c.model] = (acc[c.model] || 0) + c.price_brl
    return acc
}, {})

console.log(ValorPorCarro)

const carroMaisAntigo = data.vehicles.reduce((acc, c) => {
    if (c.year < acc.year) {
        return c
    } else {
        return acc
    }
})

console.log(carroMaisAntigo)

const carroMaisForte = data.vehicles.reduce((acc,c) => {
    if (c.horsepower > acc.horsepower) {
        return c
    } else {
        return acc
    }
})

console.log(carroMaisForte)

const carroMaisFraco = data.vehicles.reduce((acc,c) => {
    if (c.horsepower < acc.horsepower) {
        return c
    } else {
        return acc
    }
})

console.log(carroMaisFraco)

const maisEconomico = data.vehicles.reduce((acc, c) => {

    if (c.city_km_l === null) {
        return acc
    }

    if (acc.city_km_l === null) {
        return c
    }

    if (c.city_km_l > acc.city_km_l) {
        return c
    }

    return acc

})

console.log(maisEconomico)

const maisLeve = data.vehicles.reduce((acc, c) => {

    if (c.weight_kg < acc.weight_kg) {
        return c
    }

    return acc

})

console.log(maisLeve)

const maisPesado = data.vehicles.reduce((acc, c) => {

    if (c.weight_kg > acc.weight_kg) {
        return c
    }

    return acc

})

console.log(maisPesado)