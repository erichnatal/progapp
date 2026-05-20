import express from 'express'
import user from './user.js'
import vehicle from './vehicle.js'

export default function(app){
    app
    .use(express.json())
    .use('/user', user)
    .use('/vehicle', vehicle)
    .use('/pedidos', pedidos)
}