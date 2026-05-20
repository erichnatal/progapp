import express, { Router } from 'express'
import { getPeople, createUser } from '../controllers/userController.js';

const router = express.Router();

router
    .get('/users', getPeople)
    .post('/register', createUser)

export default router