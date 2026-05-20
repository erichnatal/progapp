import { connection } from "../database/db.js";

export async function validateCreatePeca(req, res, next) {

    const {
        nome_peca,
        codigo_peca,
        fornecedor,
        quantidade,
        preco_unitario,
        estoque
    } = req.body;

    if (
        !nome_peca ||
        nome_peca.trim() === "" ||
        nome_peca.length < 3 ||
        nome_peca.length > 100
    ) {
        return res.status(400).send({
            response: "Nome inválido"
        });
    }

    if (!codigo_peca) {
        return res.status(400).send({
            response: "Código obrigatório"
        });
    }

    if (!fornecedor) {
        return res.status(400).send({
            response: "Fornecedor obrigatório"
        });
    }

    if (
        quantidade === undefined ||
        isNaN(Number(quantidade)) ||
        Number(quantidade) < 0
    ) {
        return res.status(400).send({
            response: "Quantidade inválida"
        });
    }

    if (
        preco_unitario === undefined ||
        isNaN(Number(preco_unitario)) ||
        Number(preco_unitario) < 0
    ) {
        return res.status(400).send({
            response: "Preço inválido"
        });
    }

    if (
        estoque === undefined ||
        isNaN(Number(estoque)) ||
        Number(estoque) < 0
    ) {
        return res.status(400).send({
            response: "Estoque inválido"
        });
    }

    try {

        const [codigo] = await connection.promise().query(
            "SELECT * FROM pecas WHERE codigo_peca = ?",
            [codigo_peca]
        );

        if (codigo.length > 0) {
            return res.status(400).send({
                response: "Já existe uma peça cadastrada com esse código"
            });
        }

        const [pecaFornecedor] = await connection.promise().query(
            "SELECT * FROM pecas WHERE nome_peca = ? AND fornecedor = ?",
            [nome_peca, fornecedor]
        );

        if (pecaFornecedor.length > 0) {
            return res.status(400).send({
                response: "Mesma peça não pode ser cadastrada com o mesmo fornecedor"
            });
        }

        next();

    } catch (err) {

        console.log(err);

        return res.status(500).send({
            response: "Ocorreu um erro"
        });

    }
}

export async function validateGetId(req, res, next){

    const {id} = req.params;

    const [existe] = await connection.promise().query('select * from pecas where id = ?', [id]);

    if(existe.length==0){
        return res.status(400).send({response: "Peça não existe"})
    }

    next()

}

export async function validateUpdate(req, res, next){

    const {id} = req.params;
    const {nome_peca, codigo_peca, fornecedor, quantidade, preco_unitario, estoque} = req.body;

    if(quantidade < 0){
        return res.status(400).send({response: "Quantidade inválida"})
    }

    if(estoque < 0){
        return res.status(400).send({response: "Estoque inválido"})
    }

    if(preco_unitario < 0){
        return res.status(400).send({response: "Preço inválido"})
    }

    const [verCodigo] = await connection.promise().query('select * from pecas where codigo_peca = ?', [codigo_peca])

    if(verCodigo.length > 0){
        return res.status(400).send({response: "Já existe uma peça com esse código"})
    }
}