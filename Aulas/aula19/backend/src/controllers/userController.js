import { response } from "express";
import { connection } from "../database/db.js";

export const getPeople = (req, res) => {
    const users = connection.query('SELECT * FROM user', (err, results) => {
        if(err){
            return res.status(500).send({response: "Ocorreu algum erro"})
        }
        res.status(200).send(results)
    })   
};

export const createUser = (req,res) => {
    const{ name, email, password } = req.body;
    try{
        connection.query('INSERT INTO user (name, email, password) VALUES (?,?,?)',[name, email, password], (err, results) => {
            if(err){
                return res.status(500).send({response: "Ocorreu algum erro durante a inserção!"})
            }
        })
    }
    catch{
        return res.status(500).send({response: "Ocorreu algum erro!"})
    }
}

