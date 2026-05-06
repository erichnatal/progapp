import express from 'express'
import { verPedidos, registrarPedido, verPedidoPorId, atualizarPedido, deletarPedido } from '../controllers/PedidoController.js';

const router = express.Router();

router
    .get('/', verPedidos)
    .get('/:id', verPedidoPorId)
    .post('/', registrarPedido)
    .put('/:id', atualizarPedido)
    .delete('/:id', deletarPedido)

export default router