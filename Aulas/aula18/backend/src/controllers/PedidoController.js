import { response } from "express"

const pedidos = []

export const verPedidos = (req, res) => {
    res.status(200).send(pedidos)
}

export const registrarPedido = (req, res) => {
    const { id, cliente, itens, status, total } = req.body
    try {
        pedidos.push({ id, cliente, itens, status, total })
        return res.status(200).send({ response: "Pedido registrado com sucesso!" })
    } catch {
        return res.status(500).send({ response: "Erro ao registrar pedido!" })
    }
}

export const verPedidoPorId = (req, res) => {
    const { id } = req.params
    const pedido = pedidos.find(p => p.id == id)
    if (!pedido) {
        return res.status(404).send({ response: "Pedido não encontrado!" })
    }
    return res.status(200).send(pedido)
}

export const atualizarPedido = (req, res) => {
    const { id } = req.params
    const { cliente, itens, status, total } = req.body
    const index = pedidos.findIndex(p => p.id == id)
    if (index === -1) {
        return res.status(404).send({ response: "Pedido não encontrado!" })
    }
    pedidos[index] = { id: pedidos[index].id, cliente, itens, status, total }
    return res.status(200).send({ response: "Pedido atualizado com sucesso!" })
}

export const deletarPedido = (req, res) => {
    const { id } = req.params
    const index = pedidos.findIndex(p => p.id == id)
    if (index === -1) {
        return res.status(404).send({ response: "Pedido não encontrado!" })
    }
    pedidos.splice(index, 1)
    return res.status(200).send({ response: "Pedido deletado com sucesso!" })
}