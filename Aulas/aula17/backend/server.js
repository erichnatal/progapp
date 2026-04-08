const express = require('express');
const mysql = require('mysql2');
const cors = require('cors')
const app = express();
const port = 3000;

app.use(express.json())
app.use(cors({
    origin: '*'
}))

const connection = mysql.createConnection({
    user:'root',
    password: '',
    host: "localhost",
    database: "aula_add",
    port: 3307
})

console.log(connection)

if(connection){
    console.log("Banco de dados conectado!")
}

app.get('/', (req, res) => {
    console.log("Rota / acessada");
    return res.send("Servidor funcionando corretamente!")
});


app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:3000")
});
