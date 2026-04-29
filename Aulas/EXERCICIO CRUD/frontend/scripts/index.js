const form = document.getElementById("form")
const formatt = document.getElementById("formatt")

form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const nomeProduto = document.getElementById("nomeproduto").value
    const categoria = document.getElementById("categoria").value
    const qtdVenda = document.getElementById("qtdvenda").value
    const precoUnitario = document.getElementById("precounitario").value
    const valorTotal = document.getElementById("valortotal").value
    const dataVenda = document.getElementById("datavenda").value
    const tipoPagamento = document.getElementById("tipopagamento").value
    const nomeVendedor = document.getElementById("nomevendedor").value

    const response = await fetch('http://localhost:8080/registro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome_produto: nomeProduto,
            categoria: categoria,
            quantidade_vendida: qtdVenda,
            valor_produto: precoUnitario,
            data_venda: dataVenda,
            forma_pagamento: tipoPagamento,
            nome_vendedor: nomeVendedor
        })
    })

    const data = await response.json()
    console.log(data)

    carregarProdutos()
})

function atualizarUsuario(id, nome_produto, categoria, quantidade_vendida, valor_produto, data_venda, forma_pagamento, nome_vendedor) {
    document.getElementById("idatt").value = id
    document.getElementById("nomeprodutoatt").value = nome_produto
    document.getElementById("categoriaatt").value = categoria
    document.getElementById("qtdvendaatt").value = quantidade_vendida
    document.getElementById("precounitarioatt").value = valor_produto
    document.getElementById("tipopagamentoatt").value = forma_pagamento
    document.getElementById("nomevendedoratt").value = nome_vendedor
    document.getElementById("dataatt").value = new Date(data_venda).toISOString().split('T')[0]
}

formatt.addEventListener('submit', async (e) => {
    e.preventDefault()

    const id = document.getElementById("idatt").value

    const nome_produto = document.getElementById("nomeprodutoatt").value
    const categoria = document.getElementById("categoriaatt").value
    const quantidade_vendida = document.getElementById("qtdvendaatt").value
    const valor_produto = document.getElementById("precounitarioatt").value
    const data_venda = document.getElementById("dataatt").value
    const forma_pagamento = document.getElementById("tipopagamentoatt").value
    const nome_vendedor = document.getElementById("nomevendedoratt").value

    const response = await fetch(`http://localhost:8080/atualizar/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
       body: JSON.stringify({
            nome_produto: nome_produto,
            categoria: categoria,
            quantidade_vendida: quantidade_vendida,
            valor_produto: valor_produto,
            data_venda: data_venda,
            forma_pagamento: forma_pagamento,
            nome_vendedor: nome_vendedor
        })
    })

    const data = await response.json()
    console.log(data)

    carregarProdutos()
})

async function carregarProdutos() {
    const response = await fetch('http://localhost:8080/vendas')
    const vendas = await response.json()

    const tbody = document.getElementById('listaVendas')
    tbody.innerHTML = ""

    vendas.forEach(venda => {
        const tr = document.createElement('tr')
        const dataFormatada = new Date(venda.data_venda).toLocaleDateString('pt-BR')

        tr.innerHTML = `
            <td>${venda.id}</td>
            <td>${venda.nome_produto}</td>
            <td>${venda.categoria}</td>
            <td>${venda.quantidade_vendida}</td>
            <td>${venda.valor_produto}</td>
            <td>${dataFormatada}</td>
            <td>${venda.forma_pagamento}</td>
            <td>${venda.nome_vendedor}</td>
            <td>
                <button class="btn-delete btn-deletar">Deletar</button>
                <button class="btn-edit btn-atualizar">Atualizar</button>
            </td>
        `

        tr.querySelector('.btn-deletar').addEventListener('click', () => {
            deletarVenda(venda.id)
        })

        tr.querySelector('.btn-atualizar').addEventListener('click', () => {
            atualizarUsuario(
                venda.id,
                venda.nome_produto,
                venda.categoria,
                venda.quantidade_vendida,
                venda.valor_produto,
                venda.data_venda,
                venda.forma_pagamento,
                venda.nome_vendedor
            )
        })

        tbody.appendChild(tr)
    })
}

async function deletarVenda(id) {
    await fetch(`http://localhost:8080/deletar/${id}`, {
        method: 'DELETE'
    })

    carregarProdutos()
}

window.onload = () => {
    carregarProdutos()
}