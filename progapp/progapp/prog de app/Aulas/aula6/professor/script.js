function cadastrar() {
    let input = document.getElementById('input').value
    let lista = document.getElementById('lista')

    let div = document.createElement('div')
    let button = document.createElement('button')
    let span = document.createElement('span')
    div.classList.add('item')
    lista.appendChild(div)
    
    span.innerHTML = input

    button.textContent = "Deletar"

    div.appendChild(span)
    div.appendChild(button)
    

    button.classList.add('deleteBtn')

    button.addEventListener ('click', () => {
        button.parentElement.remove()
    })
}


