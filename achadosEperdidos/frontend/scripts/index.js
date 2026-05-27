let data = []
const server = 'http://localhost:8080'

async function fetchData() {
    try {
        const response = await fetch(`${server}/deposito/listar`)
        data = await response.json()
        setTableData()
    } catch (error) {
        console.error("Erro ao buscar dados:", error)
    }
}

async function fetchAtrasados() {
    try {
        const response = await fetch(`${server}/deposito/atrasados`)
        const atrasados = await response.json()
        setAlertas(atrasados)
    } catch (error) {
        console.error("Erro ao buscar atrasados:", error)
    }
}

function setAlertas(atrasados) {
    const lista = document.getElementById('lista-alertas')
    const secao = document.getElementById('secao-alertas')
    lista.innerHTML = ''

    if (atrasados.length === 0) {
        secao.style.display = 'none'
        return
    }

    secao.style.display = 'block'

    atrasados.forEach((e) => {
        const diasAtraso = Math.floor(
            (new Date() - new Date(e.data_achado)) / (1000 * 60 * 60 * 24)
        )

        const li = document.createElement('li')
        li.textContent = `${e.nome_objeto} — encontrado em ${e.local_achado} há ${diasAtraso} dias (desde ${new Date(e.data_achado).toLocaleDateString('pt-BR')})`
        lista.appendChild(li)
    })
}

function setTableData() {
    const table = document.getElementById('table-data')
    table.innerHTML = ''

    data.forEach((e) => {
        const dataFormatada = new Date(e.data_achado).toLocaleDateString('pt-BR')
        const tr = document.createElement('tr')
        tr.innerHTML = `
            <td>${e.id}</td>
            <td>${e.nome_objeto}</td>
            <td>${e.descricao}</td>
            <td>${e.local_achado}</td>
            <td>${dataFormatada}</td>
            <td>${e.status}</td>
            <td>
                <button onclick="toggleStatus(${e.id}, '${e.status}')" ${e.status === 'Entregue' ? 'disabled' : ''}>
                    ${e.status === 'Entregue' ? 'Entregue' : 'Marcar Entregue'}
                </button>
                <button onclick="deletarObjeto(${e.id})">Deletar</button>
            </td>
        `
        table.appendChild(tr)
        console.log(e.data_achado)
    })
}

async function toggleStatus(id, status) {
    if (status === 'Entregue') {
        alert('Esse objeto já foi entregue e não pode ser alterado.')
        return
    }

    try {
        const response = await fetch(`${server}/deposito/item/${id}/status`, {
            method: 'PUT'
        })

        const result = await response.json()

        if (!response.ok) {
            alert(`Erro: ${result.response}`)
            return
        }

        fetchData()
        fetchAtrasados()

    } catch (error) {
        console.error("Erro ao atualizar status:", error)
    }
}

async function deletarObjeto(id) {
    if (!confirm('Tem certeza que deseja deletar esse objeto?')) return

    try {
        const response = await fetch(`${server}/deposito/item/${id}`, {
            method: 'DELETE'
        })

        const result = await response.json()

        if (!response.ok) {
            alert(`Erro: ${result.response}`)
            return
        }

        fetchData()
        fetchAtrasados()

    } catch (error) {
        console.error("Erro ao deletar:", error)
    }
}

window.addEventListener('load', () => {

    const form = document.getElementById('formulario')

    form.addEventListener('submit', async (e) => {
        e.preventDefault()

        const nome_objeto = document.getElementById('nome').value
        const descricao = document.getElementById('descricao').value
        const local_achado = document.getElementById('local').value
        const data_achado = document.getElementById('data').value

        const body = JSON.stringify({ nome_objeto, descricao, local_achado, data_achado })

        try {
            const response = await fetch(`${server}/deposito/registrar`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body
            })

            const result = await response.json()

            if (!response.ok) {
                alert(`Erro: ${result.response}`)
                return
            }

            document.getElementById('formulario').reset()
            fetchData()
            fetchAtrasados()

        } catch (error) {
            console.error("Erro ao salvar:", error)
        }
    })

    fetchData()
    fetchAtrasados()
})