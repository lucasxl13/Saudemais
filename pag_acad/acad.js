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

const ctx = document.getElementById('resumoChart').getContext('2d');
    const resumoChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Corrida', 'Yoga', 'Treino de Força'],
            datasets: [{
                label: 'Calorias Queimadas',
                data: [300, 200, 400],
                backgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
                hoverBackgroundColor: ['#ff4c6a', '#3399e0', '#f7c538'],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: '#f1f1f1'
                    }
                }
            }
        }
    });