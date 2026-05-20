import { response } from "express";
import { connection } from "../database/db.js";

export const getPeople = (req, res) => {
    const users = connection.query('SELECT * FROM user', (err, results) => {
        if(err){
            return res.status(500).send({response: "Ocorreu algum erro"})
        }
        return res.status(200).send(results)
    })
}

export const createUser = (req,res) => {
    const{ name, email, password } = req.body;
    try{
        connection.query('INSERT INTO user (name, email, password) VALUES (?,?,?)',[name, email, password], (err, results) => {
            if(err){
                return res.status(500).send({response: "Ocorreu algum erro durante a inserção!"})
            }
        })
        return res.status(201).send({response: "Usuario registrado com sucesso!"})
    }
    catch{
        return res.status(500).send({response: "Ocorreu algum erro!"})
    }
}

export const updateUser = (req, res) => {
    const { id } = req.params
    const { name, email, password } = req.body
    try{
        connection.query('UPDATE user SET name =?, email = ?, password = ? WHERE id = ?', [name, email, password, id], (err, results) => {
            if(err){
                return res.status(500).send({response: "Ocorreu algum erro durante o UPDATE!"})
            }
        })
        return res.status(201).send({response: "Usuario atualizado com sucesso!"})
    }
    catch{
        return res.status(500).send({response: "Ocorreu algum erro!"})
    }
}

export const deleteUser = (req, res) => {
    const { id } = req.params
    try{
        connection.query("DELETE FROM user WHERE id = ?", [id])
        return res.status(201).send({response: "Usuario deletado com sucesso"})
    }
    catch{
        return res.status(500).send({response: "Ocorreu algum erro!"})
    }

}
