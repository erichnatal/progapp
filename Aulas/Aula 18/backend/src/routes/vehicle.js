import express, { Router } from 'express'
import { VehicleController } from '../controllers/VehicleController.js';

const router = express.Router();

router
    .get('/list', VehicleController.getCars)

export default router