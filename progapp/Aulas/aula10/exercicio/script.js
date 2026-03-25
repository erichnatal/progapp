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

    const linkado = users.map((user) => {
        const usersPosts = posts.filter((post) => post.userId == user.id)
            return{name: user.name, id: user.id, posts: usersPosts}
    })

    console.dir(linkado, {depth: null})
}

setData()