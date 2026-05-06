import express from 'express'
import user from './user.js'


export default function(app){
    app
    .use(express.json())
    .use('/user', user)        
} 