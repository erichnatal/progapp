import express from 'express';
import { addFuncionario, deleteFuncionario, getFuncionario, getFuncionarioPorSetor, updateFuncionario } from '../controllers/empresaController.js';
import { validarFuncionario } from '../middlewares/empresaMiddleware.js';

const router = express.Router();

router
    .get('/funcionarios', getFuncionario)
    .get('/funcionarios/:setor', getFuncionarioPorSetor)
    .post('/funcionarios',  addFuncionario)
    .put('/funcionarios/:id', updateFuncionario)
    .delete('/funcionarios/:id', deleteFuncionario)

export default router;