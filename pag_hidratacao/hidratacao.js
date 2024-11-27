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

// Função para criar um lembrete
document.getElementById('formLembrete').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const titulo = document.getElementById('tituloLembrete').value;
    const descricao = document.getElementById('descricaoLembrete').value;
    const repeticao = document.getElementById('repeticaoLembrete').value;
    const quantidadeAgua = document.getElementById('quantidadeAgua').value; // Novo campo de quantidade de água
    const diaHorario = document.getElementById('diaHorarioLembrete').value;
    
    // Criar o lembrete no formato desejado
    const lembrete = {
        titulo,
        descricao,
        repeticao,
        quantidadeAgua,  // Inclui quantidade de água no lembrete
        diaHorario,
        ativo: true // Lembrete começa como ativo
    };
    
    // Inserir o lembrete na lista de lembretes ativos
    const lembretesAtivosList = document.getElementById('lembretesAtivos');
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.dataset.lembrete = JSON.stringify(lembrete); // Armazenar os dados do lembrete
    li.innerHTML = `
        <strong>${titulo}</strong> - ${descricao} <br>
        Repetir: ${repeticao} <br>
        Água: ${quantidadeAgua} ml <br>
        Dia e Hora: ${diaHorario} <br>
        <button class="btn btn-warning" onclick="desativarLembrete(this)">Desativar</button>
        <button class="btn btn-primary" onclick="excluirLembrete(this)">Excluir</button>
    `;
    
    lembretesAtivosList.appendChild(li);
    
    // Atualizar o localStorage
    atualizarLocalStorage();

    // Limpar o formulário após o envio
    event.target.reset();
});

// Função para excluir lembrete
function excluirLembrete(button) {
    const item = button.parentElement;
    item.remove();
    // Atualizar o localStorage
    atualizarLocalStorage();
}

// Função para desativar o lembrete
function desativarLembrete(button) {
    const item = button.parentElement;
    const lembrete = JSON.parse(item.dataset.lembrete); // Recuperar os dados armazenados
    
    // Mover para a lista de lembretes desativados
    const lembretesDesativadosList = document.getElementById('lembretesDesativados');
    
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.dataset.lembrete = JSON.stringify(lembrete); // Armazenar os dados do lembrete
    
    li.innerHTML = `
        <strong>${lembrete.titulo}</strong> - Lembrete desativado <br>
        ${lembrete.descricao} <br>
        Repetir: ${lembrete.repeticao} <br>
        Água: ${lembrete.quantidadeAgua} ml <br>
        Dia e Hora: ${lembrete.diaHorario} <br>
        <button class="btn btn-success" onclick="reativarLembrete(this)">Reativar</button>
    `;
    
    lembretesDesativadosList.appendChild(li);
    
    // Remover da lista de ativos
    item.remove();

    // Atualizar o localStorage
    atualizarLocalStorage();
}

// Função para reativar o lembrete
function reativarLembrete(button) {
    const item = button.parentElement;
    const lembrete = JSON.parse(item.dataset.lembrete); // Recuperar os dados armazenados
    
    // Mover para a lista de lembretes ativos
    const lembretesAtivosList = document.getElementById('lembretesAtivos');
    
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.dataset.lembrete = JSON.stringify(lembrete); // Armazenar os dados do lembrete
    
    li.innerHTML = `
        <strong>${lembrete.titulo}</strong> - ${lembrete.descricao} <br>
        Repetir: ${lembrete.repeticao} <br>
        Água: ${lembrete.quantidadeAgua} ml <br>
        Dia e Hora: ${lembrete.diaHorario} <br>
        <button class="btn btn-warning" onclick="desativarLembrete(this)">Desativar</button>
        <button class="btn btn-primary" onclick="excluirLembrete(this)">Excluir</button>
    `;
    
    lembretesAtivosList.appendChild(li);
    
    // Remover da lista de desativados
    item.remove();

    // Atualizar o localStorage
    atualizarLocalStorage();
}

// Função para atualizar o localStorage com os lembretes
function atualizarLocalStorage() {
    const lembretesAtivosList = document.getElementById('lembretesAtivos');
    const lembretesDesativadosList = document.getElementById('lembretesDesativados');
    
    const lembretesAtivos = [];
    const lembretesDesativados = [];
    
    // Coletar lembretes ativos
    lembretesAtivosList.querySelectorAll('.list-group-item').forEach(item => {
        const lembrete = JSON.parse(item.dataset.lembrete);
        lembretesAtivos.push(lembrete);
    });
    
    // Coletar lembretes desativados
    lembretesDesativadosList.querySelectorAll('.list-group-item').forEach(item => {
        const lembrete = JSON.parse(item.dataset.lembrete);
        lembretesDesativados.push(lembrete);
    });
    
    // Salvar os lembretes no localStorage
    localStorage.setItem('lembretesAtivos', JSON.stringify(lembretesAtivos));
    localStorage.setItem('lembretesDesativados', JSON.stringify(lembretesDesativados));
}

// Função para carregar lembretes do localStorage
function carregarLembretes() {
    const lembretesAtivos = JSON.parse(localStorage.getItem('lembretesAtivos') || '[]');
    const lembretesDesativados = JSON.parse(localStorage.getItem('lembretesDesativados') || '[]');
    
    // Carregar lembretes ativos
    const lembretesAtivosList = document.getElementById('lembretesAtivos');
    lembretesAtivos.forEach(lembrete => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.dataset.lembrete = JSON.stringify(lembrete);
        li.innerHTML = `
            <strong>${lembrete.titulo}</strong> - ${lembrete.descricao} <br>
            Repetir: ${lembrete.repeticao} <br>
            Água: ${lembrete.quantidadeAgua} ml <br>
            Dia e Hora: ${lembrete.diaHorario} <br>
            <button class="btn btn-warning" onclick="desativarLembrete(this)">Desativar</button>
            <button class="btn btn-primary" onclick="excluirLembrete(this)">Excluir</button>
        `;
        lembretesAtivosList.appendChild(li);
    });
    
    // Carregar lembretes desativados
    const lembretesDesativadosList = document.getElementById('lembretesDesativados');
    lembretesDesativados.forEach(lembrete => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.dataset.lembrete = JSON.stringify(lembrete);
        li.innerHTML = `
            <strong>${lembrete.titulo}</strong> - Lembrete desativado <br>
            ${lembrete.descricao} <br>
            Repetir: ${lembrete.repeticao} <br>
            Água: ${lembrete.quantidadeAgua} ml <br>
            Dia e Hora: ${lembrete.diaHorario} <br>
            <button class="btn btn-success" onclick="reativarLembrete(this)">Reativar</button>
        `;
        lembretesDesativadosList.appendChild(li);
    });
}

// Carregar os lembretes quando a página for carregada
window.onload = carregarLembretes;
