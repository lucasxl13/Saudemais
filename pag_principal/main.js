const toggleButton = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');
const containerPrincipal = document.querySelector('.container__pricinpal');
const campoLogo = document.querySelector('.style_logo')
const itemLogo = document.getElementById('itemMais_logo')


toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('show');
    containerPrincipal.classList.toggle('opacity');
});