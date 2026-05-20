import express, { Router } from 'express';
import { getOrder, createOrder, getById, deleteId, updateOrderById } from '../controllers/pedidosController.js';

const router = express.Router();

router
    .get('/', getOrder)
    .post('/adicionar', createOrder)
    .get('/:id', getById)
    .delete('/deletar/:id', deleteId)
    .put('/update/:id', updateOrderById)

export default router