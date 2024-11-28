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
 document.getElementById('formLembrete')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const titulo = document.getElementById('tituloLembrete').value;
    const descricao = document.getElementById('descricaoLembrete').value;
    const repeticao = document.getElementById('repeticaoLembrete').value;
    const quantidadeAgua = document.getElementById('quantidadeAgua').value;
    const diaHorario = document.getElementById('diaHorarioLembrete').value;
    

    // Formatar a data e hora no padrão brasileiro (dd/mm/yyyy HH:mm)
    const dateObj = new Date(diaHorario);
    const diaHorarioFormatado = dateObj.toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
        
    const lembrete = {
        titulo,
        descricao,
        repeticao,
        quantidadeAgua,
        diaHorario: diaHorarioFormatado,  
        ativo: true
    };
    
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.dataset.lembrete = JSON.stringify(lembrete);
    
    li.innerHTML = `
        <div class="reminder-header">
            <strong>${titulo}</strong>
            <span>${diaHorarioFormatado}</span>
        </div>
        <div class="reminder-content">
            <p>${descricao}</p>
            <div class="reminder-meta">
                <div>Repetir: ${repeticao}</div>
                <div>Água: ${quantidadeAgua} ml</div>
            </div>
            <div>
                <button class="btn btn-warning" onclick="desativarLembrete(this)">Desativar</button>
                <button class="btn btn-primary" onclick="excluirLembrete(this)">Excluir</button>
            </div>
        </div>
    `;
    
    document.getElementById('lembretesAtivos').appendChild(li);
    atualizarLocalStorage();
    event.target.reset();
});

function excluirLembrete(button) {
    const item = button.closest('.list-group-item');
    item.remove();
    atualizarLocalStorage();
}

function desativarLembrete(button) {
    const item = button.closest('.list-group-item');
    const lembrete = JSON.parse(item.dataset.lembrete);
    
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.dataset.lembrete = JSON.stringify(lembrete);
    
    li.innerHTML = `
        <div class="reminder-header">
            <strong>${lembrete.titulo}</strong>
            <span>${lembrete.diaHorario}</span>
        </div>
        <div class="reminder-content">
            <p>${lembrete.descricao}</p>
            <div class="reminder-meta">
                <div>Repetir: ${lembrete.repeticao}</div>
                <div>Água: ${lembrete.quantidadeAgua} ml</div>
            </div>
            <div>
                <button class="btn btn-success" onclick="reativarLembrete(this)">Reativar</button>
                <button class="btn btn-primary" onclick="excluirLembrete(this)">Excluir</button>
            </div>
        </div>
    `;
    
    document.getElementById('lembretesDesativados').appendChild(li);
    item.remove();
    atualizarLocalStorage();
}

function reativarLembrete(button) {
    const item = button.closest('.list-group-item');
    const lembrete = JSON.parse(item.dataset.lembrete);
    
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.dataset.lembrete = JSON.stringify(lembrete);
    
    li.innerHTML = `
        <div class="reminder-header">
            <strong>${lembrete.titulo}</strong>
            <span>${lembrete.diaHorario}</span>
        </div>
        <div class="reminder-content">
            <p>${lembrete.descricao}</p>
            <div class="reminder-meta">
                <div>Repetir: ${lembrete.repeticao}</div>
                <div>Água: ${lembrete.quantidadeAgua} ml</div>
            </div>
            <div>
                <button class="btn btn-warning" onclick="desativarLembrete(this)">Desativar</button>
            </div>
        </div>
    `;
    
    document.getElementById('lembretesAtivos').appendChild(li);
    item.remove();
    atualizarLocalStorage();
}

function atualizarLocalStorage() {
    const lembretesAtivos = [];
    const lembretesDesativados = [];
    
    document.querySelectorAll('#lembretesAtivos .list-group-item').forEach(item => {
        const lembrete = JSON.parse(item.dataset.lembrete);
        lembretesAtivos.push(lembrete);
    });
    
    document.querySelectorAll('#lembretesDesativados .list-group-item').forEach(item => {
        const lembrete = JSON.parse(item.dataset.lembrete);
        lembretesDesativados.push(lembrete);
    });
    
    localStorage.setItem('lembretesAtivos', JSON.stringify(lembretesAtivos));
    localStorage.setItem('lembretesDesativados', JSON.stringify(lembretesDesativados));
}

// Carregar lembretes ao iniciar a página
window.onload = function() {
    const lembretesAtivos = JSON.parse(localStorage.getItem('lembretesAtivos') || '[]');
    const lembretesDesativados = JSON.parse(localStorage.getItem('lembretesDesativados') || '[]');
    
    lembretesAtivos.forEach(lembrete => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.dataset.lembrete = JSON.stringify(lembrete);
        
        li.innerHTML = `
            <div class="reminder-header">
                <strong>${lembrete.titulo}</strong>
                <span>${lembrete.diaHorario}</span>
            </div>
            <div class="reminder-content">
                <p>${lembrete.descricao}</p>
                <div class="reminder-meta">
                    <div>Repetir: ${lembrete.repeticao}</div>
                    <div>Água: ${lembrete.quantidadeAgua} ml</div>
                </div>
                <div>
                    <button class="btn btn-warning" onclick="desativarLembrete(this)">Desativar</button>
                </div>
            </div>
        `;
        
        document.getElementById('lembretesAtivos').appendChild(li);
    });
    
    lembretesDesativados.forEach(lembrete => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.dataset.lembrete = JSON.stringify(lembrete);
        
        li.innerHTML = `
            <div class="reminder-header">
                <strong>${lembrete.titulo}</strong>
                <span>${lembrete.diaHorario}</span>
            </div>
            <div class="reminder-content">
                <p>${lembrete.descricao}</p>
                <div class="reminder-meta">
                    <div>Repetir: ${lembrete.repeticao}</div>
                    <div>Água: ${lembrete.quantidadeAgua} ml</div>
                </div>
                <div>
                    <button class="btn btn-success" onclick="reativarLembrete(this)">Reativar</button>
                    <button class="btn btn-primary" onclick="excluirLembrete(this)">Excluir</button>
                </div>
            </div>
        `;
        
        document.getElementById('lembretesDesativados').appendChild(li);
    });
};

document.getElementById('toggleButton').addEventListener('click', () => {
    const container = document.getElementById('lembretesContainer');
    container.classList.toggle('flipped');
});

  // Definir os dados do gráfico
  const ctx = document.getElementById('historicoConsumo').getContext('2d');
  const historicoConsumoChart = new Chart(ctx, {
      type: 'bar', // Tipo do gráfico
      data: {
          labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'], // Rótulos dos dias
          datasets: [{
              label: 'Consumo de Água (ml)', // Rótulo do gráfico
              data: [2000, 1500, 1800, 2100, 2500, 2200, 1900], // Valores de consumo para cada dia
              backgroundColor: 'rgba(75, 192, 192, 0.2)', // Cor de fundo das barras
              borderColor: 'rgba(75, 192, 192, 1)', // Cor das bordas das barras
              borderWidth: 1 // Espessura das bordas
          }]
      },
      options: {
          responsive: true, // Torna o gráfico responsivo
          scales: {
              y: {
                  beginAtZero: true // Garante que o gráfico comece do zero no eixo Y
              }
          }
      }
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    // Verifica se o usuário já escolheu não mostrar novamente
    if (!localStorage.getItem('naoMostrarModal') || localStorage.getItem('naoMostrarModal') === 'false') {
        // Exibe o modal
        var myModal = new bootstrap.Modal(document.getElementById('modalHidratacao'));
        myModal.show();
    }
});

// Quando o botão "Salvar" for clicado
document.getElementById('salvarQuantidadeAgua').addEventListener('click', function () {
    const quantidadeAgua = document.getElementById('quantidadeAguaModal').value;
    alert(`Você adicionou ${quantidadeAgua}ml de água.`);

    // Verifica se o usuário marcou a opção de "Não mostrar novamente"
    if (document.getElementById('naoMostrarNovamente').checked) {
        localStorage.setItem('naoMostrarModal', 'true'); // Salva a preferência do usuário
    }
    else {
        localStorage.setItem('naoMostrarModal', 'false'); // Salva a preferência do usuário
    }

    // Fecha o modal
    var myModal = bootstrap.Modal.getInstance(document.getElementById('modalHidratacao'));
    myModal.hide();
});

// Quando o modal for fechado diretamente (não pela opção de "Salvar")
document.querySelector('.btn-close').addEventListener('click', function () {
    // Se o checkbox não estiver marcado, ainda assim armazena 'true' para garantir que o modal não apareça novamente
    localStorage.setItem('naoMostrarModal', 'true');
});


  