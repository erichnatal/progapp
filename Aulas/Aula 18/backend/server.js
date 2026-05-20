import express from 'express';
import initRoutes from './src/routes/routes.js'

const app = express();

const port = 8080;

initRoutes(app)

app.get('/', (req, res) => {
    return res.send("A api está rodando!")
})

app.listen(port, () => {
    console.log("O servidor está rodando em http://localhost:8080")
})