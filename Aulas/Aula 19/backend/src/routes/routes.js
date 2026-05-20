import express from 'express'
import estoque from './estoque.js'
import { validateCreatePeca, validateGetId } from '../middlewares/estoqueMiddlewares.js'

export default function(app){
    app
    .use(express.json())
    .use('/estoque', estoque)
}