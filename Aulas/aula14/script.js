const vendas = [
  { id: 1, produto: "Notebook", categoria: "Eletrônicos", preco: 3500, quantidade: 2, cliente: "Ana", cidade: "Curitiba", data: "2025-01-10" },
  { id: 2, produto: "Celular", categoria: "Eletrônicos", preco: 2000, quantidade: 1, cliente: "Carlos", cidade: "São Paulo", data: "2025-01-12" },
  { id: 3, produto: "Camiseta", categoria: "Roupas", preco: 80, quantidade: 3, cliente: "João", cidade: "Curitiba", data: "2025-01-15" },
  { id: 4, produto: "Calça", categoria: "Roupas", preco: 120, quantidade: 2, cliente: "Maria", cidade: "Rio de Janeiro", data: "2025-01-20" },
  { id: 5, produto: "Tênis", categoria: "Calçados", preco: 300, quantidade: 1, cliente: "Ana", cidade: "Curitiba", data: "2025-02-01" },
  { id: 6, produto: "Fone", categoria: "Eletrônicos", preco: 150, quantidade: 4, cliente: "Pedro", cidade: "Belo Horizonte", data: "2025-02-03" },
  { id: 7, produto: "Relógio", categoria: "Acessórios", preco: 500, quantidade: 1, cliente: "Lucas", cidade: "São Paulo", data: "2025-02-10" },
  { id: 8, produto: "Mochila", categoria: "Acessórios", preco: 200, quantidade: 2, cliente: "Fernanda", cidade: "Curitiba", data: "2025-02-15" },
  { id: 9, produto: "Tablet", categoria: "Eletrônicos", preco: 1800, quantidade: 1, cliente: "Carlos", cidade: "São Paulo", data: "2025-02-18" },
  { id: 10, produto: "Jaqueta", categoria: "Roupas", preco: 250, quantidade: 1, cliente: "Ana", cidade: "Curitiba", data: "2025-03-01" },
  { id: 11, produto: "Sandália", categoria: "Calçados", preco: 120, quantidade: 2, cliente: "Juliana", cidade: "Salvador", data: "2025-03-03" },
  { id: 12, produto: "Boné", categoria: "Acessórios", preco: 70, quantidade: 3, cliente: "Pedro", cidade: "Belo Horizonte", data: "2025-03-05" },
  { id: 13, produto: "Monitor", categoria: "Eletrônicos", preco: 900, quantidade: 1, cliente: "Lucas", cidade: "São Paulo", data: "2025-03-10" },
  { id: 14, produto: "Teclado", categoria: "Eletrônicos", preco: 250, quantidade: 2, cliente: "Fernanda", cidade: "Curitiba", data: "2025-03-12" },
  { id: 15, produto: "Mouse", categoria: "Eletrônicos", preco: 100, quantidade: 3, cliente: "João", cidade: "Curitiba", data: "2025-03-15" }
];

const agrupado = vendas.reduce((acc,venda) => {
  acc[venda.categoria] = (acc[venda.categoria] || 0) + venda.preco * venda.quantidade;
  return acc;
}, {})

const quantidadeTotalPorCategoria = vendas.reduce((acc,venda) => {
  acc[venda.categoria] = (acc[venda.categoria] || 0) + venda.quantidade;
  return acc;
}, {})

const faturamentoCidade = vendas.reduce((acc,venda) => {
  acc[venda.cidade] = (acc[venda.cidade] || 0) + venda.preco * venda.quantidade;
  return acc;
}, {})

const pedidosCidade = vendas.reduce((acc,venda) => {
  acc[venda.cidade] = (acc[venda.cidade] || 0) + venda.quantidade;
  return acc;
}, {})

const totalCliente = vendas.reduce((acc,venda) => {
  acc[venda.cliente] = (acc[venda.cliente] || 0) + venda.quantidade * venda.preco;
  return acc;
}, {})

const clientesUnicosPorCidade = vendas.reduce((acc, venda) => {
  if (!acc[venda.cidade]) {
    acc[venda.cidade] = new Set();
  }
  acc[venda.cidade].add(venda.cliente);
  return acc;
}, {});

const clientesUnicosContagem = Object.fromEntries(
  Object.entries(clientesUnicosPorCidade).map(([cidade, clientes]) => {
    return [cidade, clientes.size];
  })
);

const qtdVendidaProduto = vendas.reduce((acc,venda) => {
  acc[venda.produto] = (acc[venda.produto] || 0) + venda.quantidade;
  return acc;
}, {})

const faturamentoCategoria = vendas.reduce((acc,venda) => {
  acc[venda.categoria] = (acc[venda.categoria] || 0) + venda.preco * venda.quantidade;
  return acc;
}, {})

const dadosPorCategoria = vendas.reduce((acc, venda) => {
  if (!acc[venda.categoria]) {
    acc[venda.categoria] = {
      quantidade: 0,
      faturamento: 0
    };
  }

  acc[venda.categoria].quantidade += venda.quantidade;
  acc[venda.categoria].faturamento += venda.preco * venda.quantidade;

  return acc;
}, {});

const categorias = Object.keys(dadosPorCategoria);

const quantidades = categorias.map(cat => 
  dadosPorCategoria[cat].quantidade
);

const faturamentos = categorias.map(cat => 
  dadosPorCategoria[cat].faturamento
);

const vendasPorMes = vendas.reduce((acc, venda) => {
    const mesAno = venda.data.slice(0, 7);
    acc[mesAno] = (acc[mesAno] || 0) + venda.preco * venda.quantidade; 
    return acc;
  }, {});

  const meses = Object.keys(vendasPorMes); 
  const faturamentoMensal = Object.values(vendasPorMes); 


const ctx = document.getElementById('barra1')
const ctx1 = document.getElementById('pie1')
const ctx2 = document.getElementById('barra2')
const ctx3 = document.getElementById('pie2')
const ctx4 = document.getElementById('barra3')
const ctx5 = document.getElementById('pie3')
const ctx6 = document.getElementById("barra4")
const ctx7 = document.getElementById('pie4')
const ctx8 = document.getElementById("barra5")
const ctx9 = document.getElementById("barra6")

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: Object.keys(agrupado),
    datasets: [{
      label: 'Faturamento por categoria',
      data: Object.values(agrupado),
      borderWidth: 1
    }]
  },
  options: { scales: { y: { beginAtZero: true } } }
});

new Chart(ctx1, {
  type: 'doughnut',
  data: {
    labels: Object.keys(quantidadeTotalPorCategoria),
    datasets: [{
      label: 'Quantidade por categoria',
      data: Object.values(quantidadeTotalPorCategoria),
      backgroundColor: [
        'rgba(75, 192, 192, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 205, 86, 0.6)'
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 205, 86, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {} 
});

new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: Object.keys(faturamentoCidade),
    datasets: [{
      label: 'Faturamento por cidade',
      data: Object.values(faturamentoCidade),
      borderWidth: 1
    }]
  },
  options: { scales: { y: { beginAtZero: true } } }
});

new Chart(ctx3, {
  type: 'doughnut',
  data: {
    labels: Object.keys(pedidosCidade),
    datasets: [{
      label: 'Quantidade por categoria',
      data: Object.values(pedidosCidade),
      backgroundColor: [
        'rgba(75, 192, 192, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 205, 86, 0.6)'
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 205, 86, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {} 
});

new Chart(ctx4, {
  type: 'bar',
  data: {
    labels: Object.keys(totalCliente),
    datasets: [{
      label: 'Pedidos por cliente',
      data: Object.values(totalCliente),
      borderWidth: 1
    }]
  },
  options: { scales: { y: { beginAtZero: true } } }
});

new Chart(ctx5, {
  type: 'doughnut',
  data: {
    labels: Object.keys(clientesUnicosContagem),
    datasets: [{
      label: 'Quantidade por categoria',
      data: Object.values(clientesUnicosContagem),
      backgroundColor: [
        'rgba(75, 192, 192, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 205, 86, 0.6)'
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 205, 86, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {} 
});

new Chart(ctx6, {
  type: 'bar',
  data: {
    labels: Object.keys(qtdVendidaProduto),
    datasets: [{
      label: 'Quantidade vendida por produto',
      data: Object.values(qtdVendidaProduto),
      borderWidth: 1
    }]
  },
  options: { scales: { y: { beginAtZero: true } } }
});

new Chart(ctx7, {
  type: 'doughnut',
  data: {
    labels: Object.keys(faturamentoCategoria),
    datasets: [{
      label: 'Quantidade por categoria',
      data: Object.values(faturamentoCategoria),
      backgroundColor: [
        'rgba(75, 192, 192, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 205, 86, 0.6)'
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 205, 86, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {} 
});

new Chart(ctx8, {
  type: 'bar',
  data: {
    labels: categorias, 
    datasets: [
      {
        label: 'Quantidade por Categoria',
        data: quantidades, 
        backgroundColor: 'rgba(75, 192, 192, 0.6)', 
        borderColor: 'rgba(75, 192, 192, 1)', 
        borderWidth: 1,
        yAxisID: 'y1' 
      },
      {
        label: 'Faturamento por Categoria',
        data: faturamentos, 
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)', 
        borderWidth: 1,
        yAxisID: 'y2' 
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true, 
      },
      y1: { 
        position: 'left', 
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return value; 
          }
        }
      },
      y2: {
        position: 'right', 
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return `R$ ${value}`; 
          }
        }
      }
    }
  }
});

new Chart(ctx9, {
    type: 'bar',
    data: {
      labels: meses, 
      datasets: [{
        label: 'Faturamento por Mês',
        data: faturamentoMensal, 
        borderColor: 'rgba(75, 192, 192, 1)', 
        backgroundColor: 'rgba(75, 192, 192, 0.6)', 
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true, 
          ticks: {
            callback: function(value) {
              return `R$ ${value}`; 
            }
          }
        }
      },
      responsive: true, 
      plugins: {
        legend: {
          position: 'top' 
        }
      }
    }
  });

