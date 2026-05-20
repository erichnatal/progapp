
const pedidos = [];

export const getOrder = (req, res) => {
    res.status(200).send(pedidos)
}

export const createOrder = (req, res) => {
    const { id, cliente, itens, status } = req.body;

    try {
        
        const total = itens.reduce((soma, item) => {
            return soma + (item.preco * item.quantidade);
        }, 0);

        const novoPedido = {
            id,
            cliente,
            itens,
            status,
            total
        };

        pedidos.push(novoPedido);

        return res.status(201).send({
            response: 'Pedido adicionado',
            pedido: novoPedido
        });

    } catch (erro) {
        return res.status(500).send({
            response: 'Erro ao adicionar',
            erro: erro.message
        });
    }
};

export const getById = (req, res) => {
    const { id } = req.params;

    try {
        const pedido = pedidos.find(p => p.id == id);

        if (!pedido) {
            return res.status(404).json({
                response: 'Pedido não encontrado'
            });
        }

        return res.status(200).json(pedido);

    } catch (erro) {
        return res.status(500).json({
            response: 'Erro ao buscar pedido'
        });
    }
};

export const deleteId = (req, res) => {
    const { id } = req.params;

    try {
        const index = pedidos.findIndex(p => p.id == id);

        if (index === -1) {
            return res.status(404).json({
                response: 'Pedido não encontrado'
            });
        }

        const pedidoRemovido = pedidos.splice(index, 1);

        return res.status(200).json({
            response: 'Pedido deletado',
            pedido: pedidoRemovido[0]
        });

    } catch (erro) {
        return res.status(500).json({
            response: 'Erro ao deletar pedido'
        });
    }
};

export const updateOrderById = (req, res) => {
    const { id } = req.params;
    const { cliente, itens, status } = req.body;

    try {
        const pedido = pedidos.find(p => p.id == id);

        if (!pedido) {
            return res.status(404).json({
                response: 'Pedido não encontrado'
            });
        }

        if (cliente) pedido.cliente = cliente;
        if (status) pedido.status = status;

        if (itens && Array.isArray(itens)) {
            pedido.itens = itens;

            pedido.total = itens.reduce((soma, item) => {
                return soma + (item.preco * item.quantidade);
            }, 0);
        }

        return res.status(200).json({
            response: 'Pedido atualizado',
            pedido
        });

    } catch (erro) {
        return res.status(500).json({
            response: 'Erro ao atualizar pedido'
        });
    }
};