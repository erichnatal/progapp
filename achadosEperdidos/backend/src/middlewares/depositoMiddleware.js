import { connection } from "../database/db.js";

export const validateObjeto = (req, res, next) => {
    const { descricao, data_achado, status } = req.body;

    if (!descricao || descricao.trim() === "") {
        return res.status(400).send({
            response: "Descrição obrigatória"
        });
    }

    const hoje = new Date().toISOString().split("T")[0];

    if (data_achado > hoje) {
        return res.status(400).send({
            response: "Data não pode ser futura"
        });
    }

    if (
        status &&
        status !== "Aguardando Retirada" &&
        status !== "Entregue"
    ) {
        return res.status(400).send({
            response: "Status inválido"
        });
    }

    next();
};