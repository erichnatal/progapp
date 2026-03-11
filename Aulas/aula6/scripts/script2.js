var input = document.getElementById("tarefa");
var botaoAdd = document.getElementById("add")
var botaoRemove = document.getElementById("remove")
var lista = document.getElementById("tarefas")


function addLista() {
    var li = document.createElement("li")
    var checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    li.appendChild(checkbox)
    li.innerHTML += " " + input.value
    lista.appendChild(li)
    input.value = ""
}

function removeLista() {
    var itens = lista.children;
    var imagem = document.getElementById("spinImg");

    var removeu = false;

    for (var i = itens.length - 1; i >= 0; i--) {
        var checkbox = itens[i].querySelector("input");

        if (checkbox.checked) {
            lista.removeChild(itens[i]);
            removeu = true;
        }
    }

    if (removeu) {
        imagem.classList.add("girando");

        setTimeout(function() {
            imagem.classList.remove("girando");
        }, 2000); // gira por 2 segundos
    }
}

botaoAdd.addEventListener("click", addLista)
botaoRemove.addEventListener("click", removeLista)
