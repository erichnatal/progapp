export function validateRegister(req, res, next){
    const {name, email, password} = req.body

    

    if(!name || name.lenght < 3){
        return res.status(400).send({response: "Revise o nome!"})
    }
    if()
}