let data = []
const server = 'http://localhost:8080'
let editandoId = null // guarda o id da peça sendo editada

async function fetchData() {
    try {
        const response = await fetch(`${server}/estoque/listar`)
        data = await response.json()
        setTableData()
    } catch (error) {
        console.error("Erro ao buscar dados:", error)
    }
}

function setTableData() {
    const table = document.getElementById('table-data')
    table.innerHTML = ''

    data.forEach((e) => {
        const tr = document.createElement('tr')
        tr.innerHTML = `
            <td>${e.id}</td>
            <td>${e.nome_peca}</td>
            <td>${e.codigo_peca}</td>
            <td>${e.fornecedor}</td>
            <td>${e.quantidade}</td>
            <td>${e.preco_unitario}</td>
            <td>${e.estoque}</td>
            <td>
                <button onclick="prepararEdicao(${e.id})">Editar</button>
                <button onclick="deletarPeca(${e.id})">Deletar</button>
            </td>
        `
        table.appendChild(tr)
    })
}

// preenche o formulário com os dados da peça e entra em modo edição
function prepararEdicao(id) {
    const peca = data.find(e => e.id === id)
    if (!peca) return

    document.getElementById('nome').value = peca.nome_peca
    document.getElementById('codigo').value = peca.codigo_peca
    document.getElementById('fornecedor').value = peca.fornecedor
    document.getElementById('quantidade').value = peca.quantidade
    document.getElementById('preco_unitario').value = peca.preco_unitario
    document.getElementById('estoque').value = peca.estoque

    editandoId = id
    document.getElementById('btn-submit').value = 'Atualizar'
    document.getElementById('btn-cancelar').style.display = 'inline'
}

function cancelarEdicao() {
    editandoId = null
    document.getElementById('btn-submit').value = 'Enviar'
    document.getElementById('btn-cancelar').style.display = 'none'
    document.getElementById('formulario').reset()
}

async function deletarPeca(id) {
    if (!confirm('Tem certeza que deseja deletar essa peça?')) return

    try {
        const response = await fetch(`${server}/estoque/item/${id}`, {
            method: 'DELETE'
        })

        const result = await response.json()

        if (!response.ok) {
            alert(`Erro: ${result.response}`)
            return
        }

        fetchData()

    } catch (error) {
        console.error("Erro ao deletar:", error)
    }
}

window.addEventListener('load', () => {

    document.getElementById('btn-cancelar').addEventListener('click', cancelarEdicao)

    const form = document.getElementById('formulario')

    form.addEventListener('submit', async (e) => {
        e.preventDefault()

        const nome_peca = document.getElementById('nome').value
        const codigo_peca = document.getElementById('codigo').value
        const fornecedor = document.getElementById('fornecedor').value
        const quantidade = document.getElementById('quantidade').value
        const preco_unitario = document.getElementById('preco_unitario').value
        const estoque = document.getElementById('estoque').value

        const body = JSON.stringify({ nome_peca, codigo_peca, fornecedor, quantidade, preco_unitario, estoque })

        try {
            let response

            if (editandoId) {
                // modo edição -> PUT
                response = await fetch(`${server}/estoque/item/${editandoId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body
                })
            } else {
                // modo criação -> POST
                response = await fetch(`${server}/estoque/registrar`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body
                })
            }

            const result = await response.json()

            if (!response.ok) {
                alert(`Erro: ${result.response}`)
                return
            }

            cancelarEdicao()
            fetchData()

        } catch (error) {
            console.error("Erro ao salvar:", error)
        }
    })

    fetchData()
})