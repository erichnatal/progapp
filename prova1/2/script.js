const dados = require("./dados.json")
// console.log(dados)

// const nomeProdutos = dados.map((d) => {
//     return d.nome
// })
// console.log(nomeProdutos)

// const completo = dados.map((d) =>{
//     return {nome: d.nome, preco: d.preco, valorTotal: d.preco*d.quantidade}
// })
// console.log(completo)

// const acima500 = dados.filter((d) => d.preco > 500) 
// console.log(acima500)

// const qtdMenor5 = dados.filter((d) => d.quantidade < 5)
// console.log(qtdMenor5)

const valorTotalEstoque = dados.reduce((acc, d) => {acc+=d.preco*d.quantidade; return acc},0)
console.log("Valor total em estoque: R$ ", valorTotalEstoque)

const valorTotalEstoqueEletronico = dados.reduce((acc, d) => {if(d.categoria == "Eletronico") acc+=d.preco*d.quantidade; return acc}, 0)
console.log("Valor total de eletronicos em estoque: R$ ", valorTotalEstoqueEletronico)

const valorTotalEstoque10 = dados.reduce((acc, d) => {if(d.quantidade > 10) acc+=d.preco*d.quantidade; return acc}, 0)
console.log("Valor total de itens acima de 10 unidades estoque: R$ ", valorTotalEstoque10)

const maiorValorEmEstoque = dados.reduce((maior, d) => d.preco*d.quantidade>maior?d.quantidade*d.preco:d.nome, 0)
console.log(maiorValorEmEstoque)

const mediaPrecosProdutos = dados.reduce((acc, d) => acc + d.preco / (d.nome).length, 0)
console.log(mediaPrecosProdutos)