import express from 'express'
import estoque from './estoque.js'

export default function(app){
    app
    .use(express.json())
    .use('/estoque', estoque)
}