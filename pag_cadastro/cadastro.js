document.getElementById('register').addEventListener('submit', function(event) {
    console.log('Submit event triggered'); // Verifica se o evento está sendo disparado
    event.preventDefault();

    let valido = true;
    const usuario = document.getElementById('usuario');
    const senha = document.getElementById('senha');
    const csenha = document.getElementById('c_senha');
    const u_erro = document.getElementById('usuario-erro');
    const s_erro = document.getElementById('senha-erro');
    const cs_erro = document.getElementById('csenha-erro');
    const dot1 = document.getElementById('dot1');
    const dot2 = document.getElementById('dot2');
    const dot3 = document.getElementById('dot3');

    // Remove estilos de erro
    usuario.classList.remove('erro');
    senha.classList.remove('erro');
    csenha.classList.remove('erro');
    u_erro.style.display = 'none';
    s_erro.style.display = 'none';
    cs_erro.style.display = 'none';

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

    // Verificar se a confirmação da senha está vazia
    if (csenha.value.trim() === '') {
        csenha.classList.add('erro');
        cs_erro.style.display = 'block';
        valido = false;
    }

    // Verificar se as senhas conferem
    if (senha.value !== csenha.value) {
        csenha.classList.add('erro');
        cs_erro.style.display = 'block';
        cs_erro.textContent = 'Senhas não conferem.'; // Mensagem de erro específica
        valido = false;
    }

    if (valido) {
        dot1.classList.remove('active');
        dot2.classList.add('active');
        document.getElementById('usuario').style.display = 'none';
        document.getElementById('senha').style.display = 'none';
        document.getElementById('c_senha').style.display = 'none';
        document.getElementById('pag2').style.display = 'block';
    }
});

// Limpar erros ao digitar
document.getElementById('usuario').addEventListener('input', function() {
    this.classList.remove('erro');
    document.getElementById('usuario-erro').style.display = 'none';
});

document.getElementById('senha').addEventListener('input', function() {
    this.classList.remove('erro');
    document.getElementById('senha-erro').style.display = 'none';
});

document.getElementById('c_senha').addEventListener('input', function() {
    this.classList.remove('erro');
    document.getElementById('csenha-erro').style.display = 'none';
});
