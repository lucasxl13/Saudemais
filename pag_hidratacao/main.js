const toggleButton = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');
const containerPrincipal = document.querySelector('.container__principal');
const campoLogo = document.querySelector('.style_logo');
const itemLogo = document.getElementById('itemMais_logo');
const itemSideBar = document.querySelectorAll('.item__sidebar'); // Alterado para querySelectorAll


const botaoPerfil = document.getElementById('perfilLink');
const botaoHidratacao = document.getElementById('hidratacaoLink');
-

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

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('show');
    containerPrincipal.classList.toggle('opacity');

    // Alterna a classe 'show' para todos os itens da sidebar
    itemSideBar.forEach(item => {
        item.classList.toggle('show'); // Aplica a mudança em todos os itens
    });
});

const formLembrete = document.getElementById('formLembrete');
const lembretesAtivos = document.getElementById('lembretesAtivos');
const lembretesDesativados = document.getElementById('lembretesDesativados');

// Array para armazenar lembretes
let lembretes = [];

// Função para renderizar lembretes
function renderizarLembretes() {
    lembretesAtivos.innerHTML = '';
    lembretesDesativados.innerHTML = '';

    lembretes.forEach((lembrete, index) => {
        const item = document.createElement('li');
        item.className = 'list-group-item';

        item.innerHTML = `
            <span>${lembrete.titulo} - ${lembrete.descricao}</span>
            <button class="btn btn-sm ${lembrete.ativo ? 'btn-danger' : 'btn-success'}">
                ${lembrete.ativo ? 'Desativar' : 'Ativar'}
            </button>
        `;

        // Evento para ativar/desativar lembrete
        item.querySelector('button').addEventListener('click', () => {
            lembretes[index].ativo = !lembretes[index].ativo;
            renderizarLembretes();
        });

        if (lembrete.ativo) {
            lembretesAtivos.appendChild(item);
        } else {
            lembretesDesativados.appendChild(item);
        }
    });
}

// Evento de envio do formulário
formLembrete.addEventListener('submit', (event) => {
    event.preventDefault();

    const titulo = document.getElementById('tituloLembrete').value;
    const descricao = document.getElementById('descricaoLembrete').value;

    lembretes.push({ titulo, descricao, ativo: true });
    renderizarLembretes();

    // Limpa o formulário
    formLembrete.reset();
});
