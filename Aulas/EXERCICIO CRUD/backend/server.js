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
    user: "root",
    password: "root",
    host: "localhost",
    database: "vendas_crud",
    port: 3307
})

if(connection){
    console.log("Banco de dados conectado!")
}

app.get('/', (req, res) => {
    return res.send("Servidor funcionando corretamente!")
})

app.get('/vendas', (req, res) => {
    connection.query("SELECT * FROM venda", (err, results) => {
        if(err){
            return
        }
        console.log(results)
        res.status(200).send(results)
    })
})

app.get('/vendas/:id', (req, res) => {
    const { id } = req.params
    connection.query("SELECT * FROM venda WHERE id = ?", 
        [id], 
        (err, results) => {
            if(err){
                return
            }
            return res.status(200).send(results[0])
    })
})

app.post('/registro', (req, res) => {
    const { nome_produto, categoria, quantidade_vendida, valor_produto, data_venda, forma_pagamento, nome_vendedor } = req.body

    connection.query(
        "INSERT INTO venda (nome_produto, categoria, quantidade_vendida, valor_produto, data_venda, forma_pagamento, nome_vendedor) VALUES (?,?,?,?,?,?,?)",
        [nome_produto, categoria, quantidade_vendida, valor_produto, data_venda, forma_pagamento, nome_vendedor],
        (err, results) => {
            if (err) {
                console.error(err)
                return res.status(500).send({ error: "Erro ao registrar venda" })
            }
            return res.status(201).send({ response: "Venda registrada com sucesso!" })
        }
    )
})

app.delete('/deletar/:id', (req, res) => {
    const { id } = req.params
    try{
        connection.query("DELETE FROM venda WHERE id = ?", [id])
        return res.status(200).send({ message: "Venda deletada com sucesso!"})
    }
    catch(e){
        return res.status(500).send({error: e})
    }
})

app.put('/atualizar/:id', (req, res) => {
    const { id } = req.params
    const { nome_produto, categoria, quantidade_vendida, valor_produto, data_venda, forma_pagamento, nome_vendedor } = req.body

    connection.query(
        "UPDATE venda SET nome_produto=?, categoria=?, quantidade_vendida=?, valor_produto=?, data_venda=?, forma_pagamento=?, nome_vendedor=? WHERE id=?",
        [nome_produto, categoria, quantidade_vendida, valor_produto, data_venda, forma_pagamento, nome_vendedor, id],
        (err, results) => {
            if (err) {
                console.error(err)
                return res.status(500).send({ error: "Erro ao atualizar venda" })
            }
            return res.status(200).send({ message: "Venda atualizada com sucesso!" })
        }
    )
})

app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:8080")
})