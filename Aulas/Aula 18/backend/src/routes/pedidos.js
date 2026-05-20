import express, { Router } from 'express'
import { VehicleController } from '../controllers/VehicleController.js';

const router = express.Router();

router
    .post('/', PedidoController.criarPedido)

export default router