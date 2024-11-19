const toggleButton = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');
const containerPrincipal = document.querySelector('.container__pricinpal');
const campoLogo = document.querySelector('.style_logo');
const itemLogo = document.getElementById('itemMais_logo');
const itemSideBar = document.querySelectorAll('.item__sidebar'); // Alterado para querySelectorAll


const botaoPerfil = document.getElementById('perfilLink');

botaoPerfil.addEventListener('click', (event) => {
    event.preventDefault(); // Impede o comportamento padrão do link
    window.location.href = '../pag_user/user.html'; // Redireciona para outra tela
});

const botoesHidratacao = document.querySelectorAll('.hidratacaoLink');

botoesHidratacao.forEach((botao) => {
    botao.addEventListener('click', (event) => {
        event.preventDefault(); // Impede comportamento padrão do link, se necessário
        window.location.href = '../pag_hidratacao/main.html'; // Redireciona para outra tela
    });
});

document.getElementById('button_menu').addEventListener('click', (event) => {
    event.preventDefault(); // Impede o comportamento padrão do link
    window.location.href = '../pag_principal/main.html'; // Redireciona para outra tela
});


toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('show');
    containerPrincipal.classList.toggle('opacity');

    // Alterna a classe 'show' para todos os itens da sidebar
    itemSideBar.forEach(item => {
        item.classList.toggle('show'); // Aplica a mudança em todos os itens
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const graficoHidratacao = document.getElementById('graficoHidratacao');
    const graficoCalorias = document.getElementById('graficoCalorias');

    function toggleGraficos() {
        if (window.innerWidth <= 768) {
            graficoHidratacao.style.display = 'none';
            graficoCalorias.style.display = 'none';
        } else {
            graficoHidratacao.style.display = 'block';
            graficoCalorias.style.display = 'block';
        }
    }

    // Chama a função no load e ao redimensionar a tela
    toggleGraficos();
    window.addEventListener('resize', toggleGraficos);
});

document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('graficoHidratacao').getContext('2d');

    const hoje = new Date();
    const dias = [...Array(4)].map((_, i) => {
        const data = new Date();
        data.setDate(hoje.getDate() - i);
        return data.toLocaleDateString('pt-BR'); // Formato DD/MM/YYYY
    }).reverse();

    const meuGrafico = new Chart(ctx, {
        type: 'line', // Gráfico de linha
        data: {
            labels: dias,
            datasets: [
                {
                    label: 'Água (Litros)',
                    data: [2, 2.5, 1.8, 3], 
                    backgroundColor: 'rgba(52, 152, 219, 0.2)', // Azul claro
                    borderColor: 'rgba(52, 152, 219, 1)', // Azul
                    borderWidth: 2,
                    tension: 0.3, // Suaviza a linha
                    fill: true, // Preenche a área abaixo da linha
                },
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Consumo (Litros)',
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        }
    });

    // Redimensionar o gráfico quando a janela for redimensionada
    window.addEventListener('resize', () => {
        meuGrafico.resize();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('graficoCalorias').getContext('2d');

    const hoje = new Date();
    const dias = [...Array(4)].map((_, i) => {
        const data = new Date();
        data.setDate(hoje.getDate() - i);
        return data.toLocaleDateString('pt-BR');
    }).reverse();

    const meuGrafico = new Chart(ctx, {
        type: 'line', // Gráfico de linha
        data: {
            labels: dias,
            datasets: [
                {
                    label: 'Calorias Consumidas (kcal)',
                    data: [2100, 1800, 2200, 1950],
                    backgroundColor: 'rgba(255, 107, 0, 0.2)', // Laranja claro
                    borderColor: 'rgba(231, 76, 60, 1)', // Vermelho
                    borderWidth: 2,
                    tension: 0.3, // Linha suave
                    fill: true, // Preenche a área
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Calorias (kcal)',
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        }
    });

    // Redimensionar o gráfico quando a janela for redimensionada
    window.addEventListener('resize', () => {
        meuGrafico.resize();
    });
});

