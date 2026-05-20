const people = [{name: "Artur"}, {name: "Pedro"}, {name: "Igor"}]

export const getPeople = (req, res) => {
    res.status(200).send(people)
}

export const createUser = (req, res) => {
    const { name } = req.body;
    try{
        people.push({ name })
        return res.status(200).send({ response: "Usuário registrado!"})
    }
    catch{
        return res.status(500).send({ response: "Erro ao registrar"})
    }
}