let users = []
let posts = []

async function fetchData() {
    const userData = await fetch('https://jsonplaceholder.typicode.com/users')
    const postsData = await fetch('https://jsonplaceholder.typicode.com/posts')
    users = await userData.json()
    posts = await postsData.json()
    //console.log(data)
}

async function setData() {
    await fetchData()

//     const element = document.getElementById('data')

//     const reduceData = data.reduce((acc, value) => {
//         if(value.municipio.microrregiao?.mesorregiao?.UF?.sigla == "PR"){
//             return acc + 1
//         } 
//         else {
//             return acc
//         }
//     },0)

//     element.innerHTML = reduceData
}

setData()