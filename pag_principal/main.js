const toggleButton = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');
const containerPrincipal = document.querySelector('.container__pricinpal');
const campoLogo = document.querySelector('.style_logo');
const itemLogo = document.getElementById('itemMais_logo');
const itemSideBar = document.querySelectorAll('.item__sidebar'); // Alterado para querySelectorAll

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('show');
    containerPrincipal.classList.toggle('opacity');

    // Alterna a classe 'show' para todos os itens da sidebar
    itemSideBar.forEach(item => {
        item.classList.toggle('show'); // Aplica a mudança em todos os itens
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('graficoHidratacao').getContext('2d');
    
    // Obtendo as datas (Hoje e 3 dias anteriores)
    const hoje = new Date();
    const dias = [...Array(4)].map((_, i) => {
        const data = new Date();
        data.setDate(hoje.getDate() - i);
        return data.toLocaleDateString('pt-BR'); // Formato DD/MM/YYYY
    }).reverse(); // Para manter a ordem cronológica

    const meuGrafico = new Chart(ctx, {
        type: 'bar', // Gráfico de colunas
        data: {
            labels: dias, // Legendas com as datas
            datasets: [
                {
                    label: 'Água (Litros)',
                    data: [2, 2.5, 1.8, 3], // Valores para cada dia
                    backgroundColor: 'rgba(52, 152, 219, 0.6)', // Azul
                    borderColor: 'rgba(52, 152, 219, 1)',
                    borderWidth: 1
                },
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true, // Inicia o eixo Y em zero
                    title: {
                        display: true,
                        text: 'Consumo'
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top', // Legenda no topo
                }
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('graficoCalorias').getContext('2d');

    // Obtendo as datas (Hoje e 3 dias anteriores)
    const hoje = new Date();
    const dias = [...Array(4)].map((_, i) => {
        const data = new Date();
        data.setDate(hoje.getDate() - i);
        return data.toLocaleDateString('pt-BR'); // Formato DD/MM/YYYY
    }).reverse(); // Ordem cronológica

    const meuGrafico = new Chart(ctx, {
        type: 'bar', // Gráfico de colunas
        data: {
            labels: dias, // Legendas com as datas
            datasets: [
                {
                    label: 'Calorias Consumidas (kcal)',
                    data: [2100, 1800, 2200, 1950], // Valores para cada dia
                    backgroundColor: 'rgba(255, 107, 0)', // Vermelho
                    borderColor: 'rgba(231, 76, 60, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true, // Inicia o eixo Y em zero
                    title: {
                        display: true,
                        text: 'Calorias (kcal)' // Título do eixo Y
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top' // Legenda no topo
                }
            }
        }
    });
});

