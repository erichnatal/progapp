import { connection } from "../database/db.js";

export const getFuncionario = (req, res) => {
    connection.query('SELECT * FROM funcionario', (err, results) => {
        if (err) {
            return res.status(500).send({ response: "Ocorreu algum erro" });
        }
        return res.status(200).send(results);
    });
};

export const getFuncionarioPorSetor = (req, res) => {
    const { setor } = req.params;
    connection.query('SELECT * FROM funcionario WHERE setor = ?', [setor], (err, results) => {
        if (err) {
            return res.status(500).send({ response: "Ocorreu algum erro" });
        }
        return res.status(200).send(results);
    });
};

export const addFuncionario = (req, res) => {
    const { nome, sobrenome, setor, funcao } = req.body;
    
    connection.query(
        'INSERT INTO funcionario (nome, sobrenome, setor, funcao) VALUES (?,?,?,?)',
        [nome, sobrenome, setor, funcao],
        (err, results) => {
            if (err) {
                return res.status(500).send({ response: "Ocorreu algum erro durante a inserção!" });
            }
            return res.status(201).send({ response: "Funcionario registrado com sucesso!" });
        }
    );
};

export const deleteFuncionario = (req, res) => {
    const { id } = req.params;

    connection.query("DELETE FROM funcionario WHERE id = ?", [id], (err, results) => {
        if (err) {
            return res.status(500).send({ response: "Ocorreu algum erro ao deletar!" });
        }
        return res.status(200).send({ response: "Funcionário deletado com sucesso" });
    });
};

export const updateFuncionario = (req, res) => {
    const { id } = req.params
    const { nome, sobrenome, setor, funcao } = req.body
    try{
        connection.query('UPDATE funcionario SET nome =?, sobrenome = ?, setor = ?, funcao = ? WHERE id = ?', [nome, sobrenome, setor, funcao, id], (err, results) => {
            if(err){
                return res.status(500).send({response: "Ocorreu algum erro durante o UPDATE!"})
            }
        })
        return res.status(201).send({response: "Funcionário atualizado com sucesso!"})
    }
    catch{
        return res.status(500).send({response: "Ocorreu algum erro!"})
    }
}

