import express, { Router } from 'express'
import { getPeople, createUser } from '../controllers/UserController.js';

const router = express.Router();

router
    .get('/users', getPeople)
    .post('/register', createUser)

export default router