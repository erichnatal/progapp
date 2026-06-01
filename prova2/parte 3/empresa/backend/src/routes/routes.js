import express from 'express'
import empresa from './empresa.js'

export default function(app){
    app
    .use(express.json())
    .use('/empresa', empresa)
}