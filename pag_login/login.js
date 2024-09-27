let contador = 0;

document.getElementById('login').addEventListener('submit', function(event) {
    console.log('Submit event triggered'); // Verifica se o evento está sendo disparado
    event.preventDefault();

    let valido = true;
    const usuario = document.getElementById('usuario');
    const senha = document.getElementById('senha');
    const u_erro = document.getElementById('usuario-erro');
    const s_erro = document.getElementById('senha-erro');
    const manterConectado = document.getElementById('Manter-conectado').checked;

    // Resetar erros
    usuario.classList.remove('erro');
    senha.classList.remove('erro');
    u_erro.style.display = 'none';
    s_erro.style.display = 'none';

    // Verificar se o usuário está vazio
    if (usuario.value.trim() === '') {
        usuario.classList.add('erro');
        u_erro.style.display = 'block';
        valido = false;
    }

    // Verificar se a senha está vazia
    if (senha.value.trim() === '') {
        senha.classList.add('erro');
        s_erro.style.display = 'block';
        valido = false;
    }

    if (valido) {
        window.location.href = "../pag_principal/main.html";
    }
});

document.getElementById('usuario').addEventListener('input', function() {
    this.classList.remove('erro');
    document.getElementById('usuario-erro').style.display = 'none';
});

document.getElementById('senha').addEventListener('input', function() {
    this.classList.remove('erro');
    document.getElementById('senha-erro').style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os botões e os campos de entrada
    const mostrarsenha = document.getElementById('mostrarsenha');
    const m_senha = document.getElementById('senha');
    const senhaIcon = document.getElementById('senha-icon');


    // Função para alternar a visibilidade da senha e mudar o ícone
    function togglePasswordVisibility(input, icon) {
        if (input.type === 'password') {
            input.type = 'text';
            icon.src = '../hide.png'; // Muda o ícone para o ocultar senha
        } else {
            input.type = 'password';
            icon.src = '../show.png'; // Muda o ícone para mostrar senha
        }
    }

    mostrarsenha.addEventListener('click', function() {
        togglePasswordVisibility(m_senha, senhaIcon);
    });
});
