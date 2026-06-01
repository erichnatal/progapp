import { connection } from "../database/db.js";

export async function validarFuncionario(req, res, next) {

    const { nome, sobrenome, setor, funcao } = req.body;

    if ( !nome || nome.length < 3 || nome.length > 50) {
        return res.status(400).send({ error: "Nome inválido" });
    }
    
    if ( !sobrenome || sobrenome.length > 50) {
        return res.status(400).send({ error: "Sobrenome inválido" });
    }

    if ( !setor || setor.length > 50) {
        return res.status(400).send({ error: "Setor inválido" });
    }

    if ( !funcao || funcao.length < 3 || funcao.length > 50) {
        return res.status(400).send({ error: "Função inválido" });
    }

    next()

}