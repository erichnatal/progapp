import express from 'express';
import initRoutes from './src/routes/user.js'

const app = express()

const port = 8080

app.use(express.json());

app.use(initRoutes)

app.get('/', (req, res) => {
    return res.send("A API está rodando")
})

app.listen(port, () => {
    console.log("O servidor está rodando em http://localhost:8080")
})