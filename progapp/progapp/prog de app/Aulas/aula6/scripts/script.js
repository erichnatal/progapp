function somar(){
    let numero1 = Number(document.getElementById('n1').value)
    let numero2 = Number(document.querySelector('#n2').value)

    let resposta = document.querySelector('#resposta')

    let soma = numero1 + numero2

    resposta.innerHTML = soma
}

function alterarImagem(){
    let imagem = document.getElementById('imagem')
    imagem.setAttribute('src', 'https://external-preview.redd.it/NZCiylU0xCDLJqw7_GkiJ276FK5bjseIDsueCEsXDiE.jpg?auto=webp&s=8245d6eda834a988b693c0bd77dfadb8f20df8ab')
}