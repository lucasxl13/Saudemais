let page = 0;
dot1.classList.add('active');

document.getElementById('register').addEventListener('submit', function (event) {
    event.preventDefault();

    let valido = true;
    const usuario = document.getElementById('usuario');
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');
    const csenha = document.getElementById('c_senha');

    const u_erro = document.getElementById('usuario-erro');
    const s_erro = document.getElementById('senha-erro');
    const cs_erro = document.getElementById('csenha-erro');
    const e_erro = document.getElementById('email-erro');

    const dot1 = document.getElementById('dot1');
    const dot2 = document.getElementById('dot2');
    const dot3 = document.getElementById('dot3');

    usuario.classList.remove('erro');
    senha.classList.remove('erro');
    csenha.classList.remove('erro');
    e_erro.classList.remove('erro')
    u_erro.style.display = 'none';
    s_erro.style.display = 'none';
    cs_erro.style.display = 'none';
    e_erro.style.display = 'none';

    // Verificar se o usuário está vazio
    if (usuario.value.trim() === '') {
        usuario.classList.add('erro');
        u_erro.style.display = 'block';
        valido = false;
    }

    if (email.value.trim() === '') {
        email.classList.add('erro');
        e_erro.style.display = 'block';
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
        cs_erro.textContent = 'Senhas não conferem.';
        valido = false;
    }

    if (valido) {
        switch (page) {
            case 0:
                dot1.classList.add('active');
                dot2.classList.remove('active');
                dot3.classList.remove('active');
                document.getElementById('pag1').style.display = 'block';
                document.getElementById('pag2').style.display = 'none';
                break;

            case 1:
                dot1.classList.remove('active');
                dot2.classList.add('active');
                dot3.classList.remove('active');
                document.getElementById('pag1').style.display = 'none';
                document.getElementById('pag2').style.display = 'block';
                break;

            case 2:
                dot1.classList.remove('active');
                dot2.classList.remove('active');
                dot3.classList.add('active');
                document.getElementById('pag1').style.display = 'none';
                document.getElementById('pag2').style.display = 'none';
                break;

            case 3:
                window.location.href = '../pag_login/login.html';
                break;

        }
    }
});

document.getElementById('usuario').addEventListener('input', function () {
    this.classList.remove('erro');
    document.getElementById('usuario-erro').style.display = 'none';
});

document.getElementById('email').addEventListener('input', function () {
    this.classList.remove('erro');
    document.getElementById('email-erro').style.display = 'none';
});

document.getElementById('senha').addEventListener('input', function () {
    this.classList.remove('erro');
    document.getElementById('senha-erro').style.display = 'none';
});

document.getElementById('c_senha').addEventListener('input', function () {
    this.classList.remove('erro');
    document.getElementById('csenha-erro').style.display = 'none';
});


document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os botões e os campos de entrada
    const mostrarsenha = document.getElementById('mostrarsenha');
    const m_senha = document.getElementById('senha');
    const mostrarcsenha = document.getElementById('mostrarcsenha');
    const m_csenha = document.getElementById('c_senha');
    const senhaIcon = document.getElementById('senha-icon');
    const csenhaIcon = document.getElementById('csenha-icon');

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

    mostrarcsenha.addEventListener('click', function() {
        togglePasswordVisibility(m_csenha, csenhaIcon);
    });
});


document.getElementById('btn2').addEventListener('click', function () {
    // Simula o envio do formulário e executa a lógica de validação
    document.getElementById('register').dispatchEvent(new Event('submit'));

    // Somente avança a página se o formulário for válido
    const valido = validarForm();
    if (valido && page < 3) {
        page++;
    }
});

document.getElementById('btn1').addEventListener('click', function () {
    // Simula o envio do formulário e executa a lógica de validação
    document.getElementById('register').dispatchEvent(new Event('submit'));

    // Somente retrocede a página se o formulário for válido
    if (page > 0) {
        page--;
    }
});

function validarForm() {
    // Implementa a mesma lógica de validação aqui
    let valido = true;
    const usuario = document.getElementById('usuario');
    const email= document.getElementById('email');
    const senha = document.getElementById('senha');
    const csenha = document.getElementById('c_senha');

    if (usuario.value.trim() === '' || email.value.trim() === ''|| senha.value.trim() === '' || csenha.value.trim() === '' || senha.value !== csenha.value) {
        valido = false;
    }
    return valido;
}
function atualizaPeso(valor) {
    document.getElementById('peso-valor').textContent = valor;
  }

function atualizaAltura(valor) {
    document.getElementById('altura-valor').textContent = valor;
  }


  function selecionaSexo(sexo) {
    const botoesSexo = document.querySelectorAll('.sexo-btn');
    
    // Remove a classe 'selected' de todos os botões
    botoesSexo.forEach(btn => btn.classList.remove('selected'));

    // Adiciona a classe 'selected' ao botão clicado
    document.getElementById(`sexo-${sexo}`).classList.add('selected');
}
