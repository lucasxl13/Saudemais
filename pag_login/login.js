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
