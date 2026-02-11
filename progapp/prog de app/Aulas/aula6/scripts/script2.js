var input = document.getElementById("tarefa");
var botao = document.getElementById("add")
var lista = document.getElementById("tarefas")

function addLista() {
    var li = document.createElement("li")
    li.innerText = input.value
    lista.appendChild(li)
}

botao.addEventListener("click", addLista)
