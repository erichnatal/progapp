const express = require('express');
const mysql = require('mysql2');
const cors = require('cors')
const app = express();
const port = 8080;

app.use(express.json())
app.use(cors({
    origin: '*'
}))

const connection = mysql.createConnection({
    user:'root',
    password: 'root',
    host: "localhost",
    database: "aprendizes",
    port: 3307
})

if(connection){
    console.log("Banco de dados conectado!")
}

app.get('/', (req, res) => {
    console.log("Rota / acessada");
    return res.send("Servidor funcionando corretamente!")
});

app.get('/usuarios', async (req, res) => {
    connection.query('SELECT * FROM aprendiz', (err, results) => {
        if(err){
            return
        }
        res.status(200).send(results)
    })
})

app.get('/usuarios/:id', (req, res) => {
    const { id } = req.params 
    connection.query('SELECT * FROM aprendiz WHERE id = ?', [id], (err, results) => {
        if(err){
            return
        }
        return res.status(200).send(results)
    })
})

app.post('/registro', (req, res) => {
    const {nome, setor, idade} = req.body
    connection.query('INSERT INTO aprendiz (nome, setor, idade) VALUES (?, ?, ?)',
        [nome, setor, idade], (err, results) => {
            if(err){
                return err
            }
            return res.status(201).send({response: "Usuario registrado com sucesso!"})
        }
    )
})

app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:8080")
});
