class User {
    #id
    #name
    #email
    #password
    #active

    constructor(id, name, email, password){
        if (new.target === User) {
            throw new Error("A classe User não pode ser instanciada diretamente.")
        }
        if (!id) {
        throw new Error("ID é obrigatório.");
        }
        this.#id = id

        if (!name) {
        throw new Error("O nome não pode ser vazio.");
        }
        this.#name = name

        if (!email || !email.includes("@")) {
        throw new Error("Email inválido.");
        }
        this.#email = email

        if (!password || password.length < 6) {
        throw new Error("A senha deve ter no mínimo 6 caracteres.")
        }
        this.#password = password
        
        this.#active = true
    }

    get id(){
        return this.#id
    }

    alterarNome(novo, password){
        if (password === this.#password) {
            this.#name = novo
        }
        else{
            throw new Error("Nome não foi alterado. Tente novamente!")
        }
    }
    
    alterarEmail(novoEmail, password){
        if (password !== this.#password) {
            throw new Error("Senha incorreta")
        }

        if (!novoEmail || !novoEmail.includes("@")) {
            throw new Error("Email inválido")
        }

        this.#email = novoEmail
    }

    alterarSenha(email, password, novaSenha){
        if(email !== this.#email || password !== this.#password){
            throw new Error("Credenciais inválidas")
        }

        if (!novaSenha || novaSenha.length < 6) {
            throw new Error("Nova senha inválida")
        }

        this.#password = novaSenha 
    }

    conferirSenha(email, senhaDigitada){
        if(email === this.#email && senhaDigitada === this.#password){
            return "As senhas conferem"
        }
        else{
            return "As senhas não conferem"
        }
    }

    verificarAtivo(id){
        if(id === this.#id){
            if(this.#active=== true){
                return "Usuario está ativo"
            }
            else{
                return "Usuario não está ativo"
            }
        }
    }

    desativarUser(id){
        if(id === this.#id){
            this.#active = false
        }
    }

    ativarUser(){
        this.#active = true
    }
    
    exibirUser() {
        return {
            id: this.#id,
            name: this.#name,
            email: this.#email,
            active: this.#active
    }
        
    }

   
}

class Admin extends User {

    constructor(id, name, email, password){
        super(id, name, email, password)
    }

    listarUsuarios(listaUsuarios){
        return listaUsuarios.map(user => user.exibirUser())
    }

    desativarUsuario(usuario){
        usuario.desativarUser()
    }
    reativarUsuario(usuario){
        usuario.ativarUser()
    }
}

class Client extends User {
    constructor(id, name, email, password){
        super(id, name, email, password)
    }

    verDados(id){
        return this.exibir(id)
    }

    alterarMeusDados(id, novosDados, password){
        if (id !== this.id){
            return 'Acesso negado'
        }

        let resultado = []

        if (novosDados.nome){
            resultado.push(this.alterarNome(novosDados.nome, password))
        }

        if (novosDados.email){
            resultado.push(this.alterarEmail(novosDados.email, password))
        }

        if (novosDados.senha){
            resultado.push(this.alterarSenha(novosDados.senha, this.email, password))
        }

        return resultado
    }
}

const c1 = new Client(1, 'Thiago', 'thiagov@gmail.com', 'thiago123')
console.log(c1.alterarMeusDados(1, {senha:'thiago12345'}, 'thiago123'))

