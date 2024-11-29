const toggleButton = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');
const containerPrincipal = document.querySelector('.container__principal');
const campoLogo = document.querySelector('.style_logo');
const itemLogo = document.getElementById('itemMais_logo');
const itemSideBar = document.querySelectorAll('.item__sidebar'); // Alterado para querySelectorAll

const botaoHome = document.querySelectorAll('.homeLink');
const botoesHidratacao = document.querySelectorAll('.hidratacaoLink');
const botaoCalorias = document.querySelectorAll('.calorialink');
const botaoDieta = document.querySelectorAll('.dietalink');
const botaoPerfil = document.querySelectorAll('.perfilLink');
const botaoLogout = document.getElementById('logoutlink');

// Adicionando os eventos
if (botaoHome.length > 0) {
    botaoHome.forEach((botao) => {
        botao.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = '../pag_principal/main.html';
        });
    });
}

if (botoesHidratacao.length > 0) {
    botoesHidratacao.forEach((botao) => {
        botao.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = '../pag_hidratacao/hidratacao.html';
        });
    });
}

if (botaoCalorias.length > 0) {
    botaoCalorias.forEach((botao) => {
        botao.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = '../pag_calorias/calorias.html';
        });
    });
}

if (botaoDieta.length > 0) {
    botaoDieta.forEach((botao) => {
        botao.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = '../pag_dieta/dieta.html';
        });
    });
}

if (botaoPerfil.length > 0) {
    botaoPerfil.forEach((botao) => {
        botao.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = '../pag_user/user.html';
        });
    });
}

if (botaoLogout) {
    botaoLogout.addEventListener('click', (event) => {
        event.preventDefault();

        const confirmacao = confirm("Tem certeza de que deseja sair?");
        if (confirmacao) {
            window.location.href = '../pag_login/login.html';
            localStorage.removeItem('manterx');
        }
    });
}

const buttonMenu = document.getElementById('button_menu');
if (buttonMenu) {
    buttonMenu.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = '../pag_principal/main.html';
    });
}

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('show');
    containerPrincipal.classList.toggle('opacity');

    // Alterna a classe 'show' para todos os itens da sidebar
    itemSideBar.forEach(item => {
        item.classList.toggle('show'); // Aplica a mudança em todos os itens
    });
});

const ctx = document.getElementById('graficoCalorias').getContext('2d');
    
const graficoCalorias3D = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['01/06', '02/06', '03/06', '04/06', '05/06', '06/06', '07/06', 'Hoje'], // Datas para uma semana
      datasets: [{
        label: 'Calorias Consumidas',
        data: [1500, 1800, 2200, 2400, 2000, 2300, 2500, 2428], // Dados de calorias consumidas para cada dia
        backgroundColor: '#ff9a51', // Cor das barras
        borderRadius: 10, // Arredondamento das bordas
        barPercentage: 0.6
      }]
    },
    options: {
      responsive: true,
      plugins: {
        chart3d: {
          enabled: true, // Habilita o 3D
          depth: 100, // Profundidade do gráfico
          axis: {
            x: {
              angle: 60 // Ângulo do eixo X
            },
            y: {
              angle: 30 // Ângulo do eixo Y
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 3500, // Defina o valor máximo para o gráfico
        }
      },
      plugins: {
        legend: {
          display: false, // Desabilita a legenda
        },
      },
    }
});