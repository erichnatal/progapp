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

const somaSalario = users.reduce((acc, user) => acc + user.salary, 0)
const mediaSalarialAtivos = users.filter(u=>u.active).reduce((acc,u)=>acc+u.salary,0)/onlineUsers.length
const mediaIdadeManagersAtivos = users.filter(u=>u.active && u.role==='manager').reduce((acc,u)=>acc+u.age,0)/users.filter(u=>u.active && u.role==='manager').length
const usuarioAtivoMaiorSalario = onlineUsers.reduce((maior,u)=>u.salary>maior.salary?u:maior, onlineUsers[0])
const cargosSomaSalario = {}
users.forEach(u => { cargosSomaSalario[u.role] = (cargosSomaSalario[u.role]||0)+u.salary })
const cargoMaiorSomaSalario = Object.keys(cargosSomaSalario).reduce((a,b)=>cargosSomaSalario[a]>cargosSomaSalario[b]?a:b)
const usuarios5000 = users.filter(u=>u.salary>5000).map(u=>({name:u.name, role:u.role}))

const quantidadePorCargo = users.reduce((acc, user) => {
  if (!acc[user.role]) acc[user.role] = 0
  acc[user.role] += 1
  return acc
}, {})

const quantidadePorCargoArray = Object.entries(quantidadePorCargo).map(([role, qtd]) => ({ name: `${role}: ${qtd}` }))

const renderConfig = [
  { data: onlineUsers, containerId:'container1' },
  { data: offUsers, containerId:'container2' },
  { data: devs, containerId:'container3' },
  { data: designers, containerId:'container4' },
  { data: managers, containerId:'container5' },
  { data: analyst, containerId:'container6' },
  { data: salarioAcima5000, containerId:'container7' },
  { data: salarioAbaixo4000, containerId:'container8' },
  { data: maisDe30, containerId:'container9' },
  { data: menosDe25, containerId:'container10' },
  { data: onAnalyst, containerId:'container11' },
  { data: devsM4000, containerId:'container12' },
  { data: managersVelhos, containerId:'container13' },
  { data: [{name:'R$ '+mediaSalarialAtivos.toFixed(2)}], containerId:'container14' },
  { data: [{name:'R$ '+somaSalario}], containerId:'container15' },
  { data: quantidadePorCargoArray, containerId:'container16' },
  { data: usuarios5000.map(u=>({name:`${u.name} - ${u.role}`})), containerId:'container17' },
  { data: [{name:mediaIdadeManagersAtivos.toFixed(2)+' anos'}], containerId:'container18' },
  { data: [{name:cargoMaiorSomaSalario}], containerId:'container19' },
  { data: [{name:usuarioAtivoMaiorSalario.name+' - R$'+usuarioAtivoMaiorSalario.salary}], containerId:'container20' }
]

renderConfig.forEach(({data, containerId})=>{
  const container = document.getElementById(containerId)
  if(!container) return
  data.forEach(user=>container.appendChild(createCard(user)))
})

const mapNameRole = users.map((user) => { return {name: user.name, role: user.name} }, 0)
const mapName = users.map((user) => { return user.name })
const mapNameMaiuscula = users.map((user) => { return {name: user.name.toUpperCase()} })
const salaryAnnual = users.map((user) => { return {name: user.name, salary_annual: user.salary * 12} })
const mapNameAge = users.map((user) => { return {name: user.name, age: user.age} })
const mapNameSalary = users.map((user) => { return {name: user.name, salary: 'R$' + user.salary} })
const mapCargo = users.map((user) => {
  if (user.age <= 24) { return {name: user.name, cargo: "Júnior"} }
  else if (user.age >= 25 && user.age < 35) { return {name: user.name, cargo: "Pleno"} }
  else { return {name: user.name, cargo: "Sênior"} }
})
const mapSalario = users.map((user) => {
  if (user.salary < 3500) { return {name: user.name, nivel_salarial: "Baixo"} }
  else if (user.salary >= 3500 && user.salary < 7200) { return {name: user.name, nivel_salarial: "Médio"} }
  else { return {name: user.name, nivel_salarial: "Alto"} }
})
const mapInfos = users.map((user) => { return {id: user.id, name: user.name, active: user.active} })
const mediaSalarial = users.reduce((acc, user) => acc + user.salary / users.length, 0)
const mediaIdade = users.reduce((acc, user) => acc + user.age / users.length, 0)
const usuariosAtivos = users.reduce((acc, user) => { if(user.active) acc+=1; return acc }, 0)
const usuariosInativos = users.reduce((acc, user) => { if(!user.active) acc+=1; return acc }, 0)
const maiorSalario = users.reduce((maior, user) => user.salary>maior?user.salary:maior, 0)
const menorSalario = users.reduce((menor, user) => user.salary<menor?user.salary:menor, users[0].salary)
const somaSalarioAtivos = users.reduce((acc, user) => { if(user.active) acc+=user.salary; return acc },0)