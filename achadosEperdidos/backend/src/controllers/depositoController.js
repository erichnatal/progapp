import { connection } from "../database/db.js";

export const getObjeto = (req, res) => {
    connection.query('SELECT * FROM objeto', (err, results) => {
        if (err) {
            return res.status(500).send({ response: "Ocorreu algum erro" });
        }
        return res.status(200).send(results);
    });
};

export const getObjetosAtrasados = (req, res) => {
    connection.query(
        "SELECT * FROM objeto WHERE status = 'Aguardando Retirada' AND data_achado <= DATE_SUB(CURDATE(), INTERVAL 30 DAY)",
        (err, results) => {
            if (err) {
                return res.status(500).send({ response: "Ocorreu algum erro" });
            }
            return res.status(200).send(results);
        }
    );
};

export const addObjeto = (req, res) => {
    const { nome_objeto, descricao, local_achado, data_achado } = req.body;
    
    connection.query(
        'INSERT INTO objeto (nome_objeto, descricao, local_achado, data_achado) VALUES (?,?,?,?)',
        [nome_objeto, descricao, local_achado, data_achado],
        (err, results) => {
            if (err) {
                return res.status(500).send({ response: "Ocorreu algum erro durante a inserção!" });
            }
            return res.status(201).send({ response: "Objeto registrado com sucesso!" });
        }
    );
};

export const deleteObjeto = (req, res) => {
    const { id } = req.params;

    connection.query("DELETE FROM objeto WHERE id = ?", [id], (err, results) => {
        if (err) {
            return res.status(500).send({ response: "Ocorreu algum erro ao deletar!" });
        }
        return res.status(200).send({ response: "Objeto deletado com sucesso" });
    });
};

export const updateStatusObjeto = (req, res) => {
    const { id } = req.params;

    connection.query("SELECT status FROM objeto WHERE id = ?", [id], (err, results) => {
        if (err) {
            return res.status(500).send({ response: "Erro ao buscar objeto!" });
        }

        if (results[0].status === 'Entregue') {
            return res.status(400).send({ response: "Objeto já foi entregue e não pode ser alterado!" });
        }

        connection.query(
            "UPDATE objeto SET status = 'Entregue' WHERE id = ?",
            [id],
            (err, results) => {
                if (err) {
                    return res.status(500).send({ response: "Erro ao atualizar status!" });
                }
                return res.status(200).send({ response: "Status atualizado com sucesso!" });
            }
        );
    });
};