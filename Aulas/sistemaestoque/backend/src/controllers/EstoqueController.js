    import { response } from "express";
    import { connection } from "../database/db.js";

export const getPeca = (req, res) => {
    connection.query('SELECT * FROM peca', (err, results) => {
        if (err) {
            return res.status(500).send({ response: "Ocorreu algum erro" });
        }
        return res.status(200).send(results);
    });
};

export const getPecaEspecifica = (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM peca WHERE id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).send({ response: "Ocorreu algum erro" });
        }
        return res.status(200).send(results);
    });
};

export const addPeca = (req, res) => {
    const { nome_peca, codigo_peca, fornecedor, quantidade, preco_unitario, estoque } = req.body;

    // ✅ CORRIGIDO: res.send() agora está DENTRO do callback
    connection.query(
        'INSERT INTO peca (nome_peca, codigo_peca, fornecedor, quantidade, preco_unitario, estoque) VALUES (?,?,?,?,?,?)',
        [nome_peca, codigo_peca, fornecedor, quantidade, preco_unitario, estoque],
        (err, results) => {
            if (err) {
                return res.status(500).send({ response: "Ocorreu algum erro durante a inserção!" });
            }
            return res.status(201).send({ response: "Peça registrada com sucesso!" });
        }
    );
};

export const updatePeca = (req, res) => {
    const { id } = req.params;
    const { nome_peca, codigo_peca, fornecedor, quantidade, preco_unitario, estoque } = req.body;

    // ✅ CORRIGIDO: res.send() agora está DENTRO do callback
    connection.query(
        'UPDATE peca SET nome_peca = ?, codigo_peca = ?, fornecedor = ?, quantidade = ?, preco_unitario = ?, estoque = ? WHERE id = ?',
        [nome_peca, codigo_peca, fornecedor, quantidade, preco_unitario, estoque, id],
        (err, results) => {
            if (err) {
                return res.status(500).send({ response: "Ocorreu algum erro durante o UPDATE!" });
            }
            return res.status(200).send({ response: "Peça atualizada com sucesso!" });
        }
    );
};

export const deletePeca = (req, res) => {
    const { id } = req.params;

    connection.query("DELETE FROM peca WHERE id = ?", [id], (err, results) => {
        if (err) {
            return res.status(500).send({ response: "Ocorreu algum erro ao deletar!" });
        }
        return res.status(200).send({ response: "Peça deletada com sucesso" });
    });
};