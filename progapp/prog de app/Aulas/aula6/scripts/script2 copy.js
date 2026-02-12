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
    var checkboxes = lista.querySelectorAll("input[type='checkbox']")

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked){
            lista.removeChild(checkbox.parentElement)
        }
    })
}

botaoAdd.addEventListener("click", addLista)
botaoRemove.addEventListener("click", removeLista)
