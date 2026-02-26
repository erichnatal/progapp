const users = [
{ id: 1, name: 'Ana', age: 22, salary: 3500, active: true, role: 'dev' },
{ id: 2, name: 'Carlos', age: 29, salary: 7200, active: false, role: 'manager' },
{ id: 3, name: 'Marina', age: 31, salary: 6800, active: true, role: 'designer' },
{ id: 4, name: 'João', age: 19, salary: 2500, active: true, role: 'dev' },
{ id: 5, name: 'Fernanda', age: 27, salary: 4100, active: false, role: 'designer' },
{ id: 6, name: 'Lucas', age: 35, salary: 9500, active: true, role: 'manager' },
{ id: 7, name: 'Beatriz', age: 24, salary: 3900, active: true, role: 'dev' },
{ id: 8, name: 'Rafael', age: 33, salary: 7800, active: true, role: 'data_analyst' },
{ id: 9, name: 'Juliana', age: 26, salary: 5200, active: true, role: 'data_analyst' },
{ id: 10, name: 'Bruno', age: 41, salary: 11000, active: false, role: 'manager' },
{ id: 11, name: 'Camila', age: 30, salary: 6300, active: true, role: 'designer' },
{ id: 12, name: 'Thiago', age: 28, salary: 4700, active: true, role: 'dev' },
{ id: 13, name: 'Patricia', age: 37, salary: 8800, active: true, role: 'data_analyst' },
{ id: 14, name: 'Gustavo', age: 23, salary: 3100, active: false, role: 'dev' },
{ id: 15, name: 'Larissa', age: 34, salary: 7600, active: true, role: 'manager' }
]

const onlineUsers = users.filter((u) => u.active == true)
const offUsers = users.filter((u) => u.active == false)
const devs = users.filter((u) => u.role == 'dev')
const designers = users.filter((u) => u.role == 'designer')
const managers = users.filter((u) => u.role == 'manager')
const analyst = users.filter((u) => u.role == 'data_analyst')
const salarioAcima5000 = users.filter((u) => u.salary > 5000)
const salarioAbaixo4000 = users.filter((u) => u.salary < 4000)
const maisDe30 = users.filter((u) => u.age > 30)
const menosDe25 = users.filter((u) => u.age < 25)
const onAnalyst = users.filter((u) => u.role == 'data_analyst' && u.active == true)
const devsM4000 = users.filter((u) => u.role == 'dev' && u.salary > 4000)
const managersVelhos = users.filter((u) => u.role == 'manager' && u.age > 30)

function createCard(users){
    let div = document.createElement('div')
    let span = document.createElement('span')
    span.innerHTML = `${users.name}`
    div.appendChild(span)

    return div
}

const renderConfig = [
  { data: onlineUsers, containerId: 'container1' },
  { data: offUsers, containerId: 'container2' },
  { data: devs, containerId: 'container3' },
  { data: designers, containerId: 'container4' },
  { data: managers, containerId: 'container5' },
  { data: analyst, containerId: 'container6' },
  { data: salarioAcima5000, containerId: 'container7' },
  { data: salarioAbaixo4000, containerId: 'container8' },
  { data: maisDe30, containerId: 'container9' },
  { data: menosDe25, containerId: 'container10' },
  { data: onAnalyst, containerId: 'container11' },
  { data: devsM4000, containerId: 'container12' },
  { data: managersVelhos, containerId: 'container13' }
]

renderConfig.forEach(({ data, containerId }) => {
    const container = document.getElementById(containerId)
  data.forEach(user => {
    container.appendChild(createCard(user))
  })
})