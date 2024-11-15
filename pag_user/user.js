const containerPrincipal = document.querySelector('.container__pricinpal');
const campoLogo = document.querySelector('.style_logo');
const itemLogo = document.getElementById('itemMais_logo');
const itemSideBar = document.querySelectorAll('.item__sidebar'); // Alterado para querySelectorAll


const botaoPerfil = document.getElementById('perfilLink');
const botaoHidratacao = document.getElementById('hidratacaoLink');

botaoPerfil.addEventListener('click', (event) => {
    event.preventDefault(); // Impede o comportamento padrão do link
    window.location.href = '../pag_user/user.html'; // Redireciona para outra tela
});

botaoHidratacao.addEventListener('click', (event) => {
    event.preventDefault(); // Impede o comportamento padrão do link
    window.location.href = '../pag_hidratacao/main.html'; // Redireciona para outra tela
});

document.getElementById('button_menu').addEventListener('click', (event) => {
    event.preventDefault(); // Impede o comportamento padrão do link
    window.location.href = '../pag_principal/main.html'; // Redireciona para outra tela
});

const toggleSidebar = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');

toggleSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('expanded');
});


