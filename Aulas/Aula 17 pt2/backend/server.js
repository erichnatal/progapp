const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')

const app = express();

app.use(cors({
    origin: '*'
}))

const connection = mysql.createConnection({
    user: "root",
    password: "root",
    host: "localhost",
    database: "vendas",
    port: 3307
})

app.get('/', (req, res) => {
    res.status(200).send({ response: "O serviço está funcionando!"})
})

app.get('/vendas', (req, res) => {
    connection.query('SELECT * FROM vendas', (err, results) => {
        if(err){
            return res.status(500).send({ message: "ERRO!"})
        }
        return res.status(200).send(results)
    })
})

app.listen(8080, () => {
    console.log("Servidor rodando em http://localhost:8080")
})


