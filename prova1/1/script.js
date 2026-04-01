function adicionar() {
    let link = document.getElementById('link').value;
    let descricao = document.getElementById('descricao').value;
    let lista = document.getElementById('galeria');

    let div = document.createElement('div');
    let button = document.createElement('button');
    let span = document.createElement('span');
    let img = document.createElement('img');

    img.src = link;  
    span.textContent = descricao;
    button.textContent = "Deletar";

    div.appendChild(img);
    div.appendChild(span);
    div.appendChild(button);
    
    lista.appendChild(div);    

    button.classList.add('deleteBtn');
    button.addEventListener('click', () => {
        div.remove();
    });
}

function somar(){
    let numero1 = Number(document.getElementById('valorTotal').value)
    let numero2 = Number(document.querySelector('#valorProd').value)

    let resposta = document.querySelector('#valorTotal')

    let soma = numero1 + numero2

    resposta.innerHTML = soma
}