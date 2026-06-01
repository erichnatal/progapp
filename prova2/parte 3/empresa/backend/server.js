import express from 'express';
import initRoutes from './src/routes/routes.js'
import cors from 'cors'

const app = express();
const port = 8000;

app.use(cors({
    origin: '*'
}))

app.use(express.json())

initRoutes(app)

app.get('/', (req, res) => {
    return res.send("A api está rodando!")
})

app.listen(port, () => {
    console.log("O servidor está rodando em http://localhost:8000")
})