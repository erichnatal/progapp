import express, { Router } from 'express'
import { addPeca, deletePeca, getPeca, getPecaEspecifica, updatePeca } from '../controllers/EstoqueController.js';

const router = express.Router();

router
    .get('/listar', getPeca)
    .get('/item/:id', getPecaEspecifica)
    .post('/registrar', addPeca)
    .put('/item/:id', updatePeca)
    .delete('/item/:id', deletePeca)

export default router