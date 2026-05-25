import express from 'express';
import { addPeca, deletePeca, getPeca, getPecaEspecifica, updatePeca } from '../controllers/EstoqueController.js';
import { validateCreatePeca, validateGetId, validateUpdate } from '../middlewares/estoqueMiddleware.js';

const router = express.Router();

router
    .get('/listar', getPeca)
    .get('/item/:id', validateGetId, getPecaEspecifica)
    .post('/registrar', validateCreatePeca, addPeca)
    .put('/item/:id', validateGetId, validateUpdate, updatePeca)
    .delete('/item/:id', validateGetId, deletePeca)

export default router;