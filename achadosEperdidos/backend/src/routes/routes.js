import express from 'express'
import deposito from './deposito.js'

export default function(app){
    app
    .use(express.json())
    .use('/deposito', deposito)
}