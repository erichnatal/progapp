import express, { Router } from 'express'

const router = express.Router();
const users = [
    { name: "Diego", lastname: "Silva" },
    { name: "Erich", lastname: "Costa" },
    { name: "Leticia", lastname: "Mendes" },
    { name: "Luan", lastname: "Oliveira" }
]

router
    .get('/users', (req, res) => {
        res.send(users)
    })
    .post('/users', (req, res) => {
        const { name, lastname } = req.body
        try {
            users.push({ name, lastname })
            return res.status(200).send({ response: `Usuário ${name} ${lastname} cadastrado com sucesso!` })
        } catch {
            return res.status(500).send({ response: "Erro ao registrar usuário" })
        }
    })
    .put('/users/:name', (req, res) => {
        const { name } = req.params
        const { lastname } = req.body
        
        const userIndex = users.findIndex(user => user.name === name)
        if (userIndex !== -1) {
            users[userIndex].lastname = lastname
            return res.status(200).send({ response: `Usuário ${name} atualizado com sucesso!` })
        }
        
        return res.status(404).send({ response: "Usuário não encontrado!" })
    })
    .delete('/users/:name', (req, res) => {
        const { name } = req.params
        
        const userIndex = users.findIndex(user => user.name === name)
        if (userIndex !== -1) {
            users.splice(userIndex, 1)
            return res.status(200).send({ response: `Usuário ${name} deletado com sucesso!` })
        }
        
        return res.status(404).send({ response: "Usuário não encontrado!" })
    })

export default router