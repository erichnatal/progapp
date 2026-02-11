let square = document.getElementById("q1")
let input = document.getElementById("c1")



function alternarCor(e){
    let color = e.target.value
    square.style.backgroundColor = color
}

input.addEventListener("input", alternarCor)