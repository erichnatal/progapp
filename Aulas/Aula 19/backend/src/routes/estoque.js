import express, { Router } from 'express'
import { addPeca, deletePeca, getPeca, updatePeca } from '../../../../sistemaestoque/backend/src/controllers/EstoqueController.js';

const router = express.Router();

router
    .get('/listar', getPeca)
    .post('/registrar', addPeca)
    .put('/:id', updatePeca)
    .delete('/:id', deletePeca)

export default router