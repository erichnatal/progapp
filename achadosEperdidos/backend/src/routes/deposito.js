import express from 'express';
import { addObjeto, deleteObjeto, getObjeto, updateStatusObjeto, getObjetosAtrasados } from '../controllers/depositoController.js';
import { validateObjeto } from '../middlewares/depositoMiddleware.js';

const router = express.Router();

router
    .get('/listar', getObjeto)
    .get('/atrasados', getObjetosAtrasados)
    .post('/registrar', validateObjeto, addObjeto)
    .put('/item/:id/status', updateStatusObjeto)
    .delete('/item/:id', deleteObjeto)

export default router;