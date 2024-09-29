let recs = 0;
let recedo = 0;

let manterdo = false;
let manterbk = 0;

document.getElementById('usuario').addEventListener('keydown', function(e) {
    if (e.key === ' ') {
      e.preventDefault();  // Impede que o espaço seja inserido
    }
  });

  document.getElementById('senha').addEventListener('keydown', function(e) {
    if (e.key === ' ') {
      e.preventDefault();  // Impede que o espaço seja inserido
    }
  });

  document.getElementById('emailRecuperacao').addEventListener('keydown', function(e) {
    if (e.key === ' ') {
      e.preventDefault();  // Impede que o espaço seja inserido
    }
  });



document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();

    let valido = true;
    const usuario = document.getElementById('usuario')
    const senha = document.getElementById('senha');
    const u_erro = document.getElementById('usuario-erro');
    const s_erro = document.getElementById('senha-erro');
    const l_erro = document.getElementById('login-erro');
    const manterConectado = document.getElementById('Manter-conectado').checked;

    // Resetar erros
    usuario.classList.remove('erro');
    senha.classList.remove('erro');
    u_erro.style.display = 'none';
    s_erro.style.display = 'none';
    l_erro.style.display = 'none';

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

    if (usuario.value.trim().toLowerCase() != usuariox && usuario.value.trim().toLowerCase() != ''  || senha.value.trim() != senhax && senha.value.trim() != '') {
        l_erro.style.display = 'block';
        valido = false;
    }


    if (valido) {
        manterbk = 1;
        localStorage.setItem('manterbk', manterbk);
        window.location.href = "../pag_principal/main.html";
    }
});

document.getElementById('usuario').addEventListener('input', function() {
    this.classList.remove('erro');
    document.getElementById('usuario-erro').style.display = 'none';
    document.getElementById('login-erro').style.display = 'none';
});

document.getElementById('senha').addEventListener('input', function() {
    this.classList.remove('erro');
    document.getElementById('senha-erro').style.display = 'none';
    document.getElementById('login-erro').style.display = 'none';
});

document.getElementById('emailRecuperacao').addEventListener('input', function() {
    this.classList.remove('erro');
    document.getElementById('rec-erro').style.display = 'none';
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

// Seleciona os elementos
const btnEsqueciSenha = document.getElementById('esqueciSenhaBtn');
const modalRecuperacao = document.getElementById('modal_recuperacao');
const fundo = document.getElementById('fundo');
const modalContent = document.querySelector('.modal-content'); // Seleciona o conteúdo do modal

btnEsqueciSenha.addEventListener('click', () => {
    modalRecuperacao.classList.remove('oculto');
    fundo.classList.add('desfocado');          
});


modalRecuperacao.addEventListener('click', (e) => {
    if (!modalContent.contains(e.target)) {
        modalRecuperacao.classList.add('oculto');
        fundo.classList.remove('desfocado');
    }
});




document.addEventListener('DOMContentLoaded', function() {

    const rec = document.getElementById('btn-rec');
    let emailrec = document.getElementById('emailRecuperacao');
    const e_erro = document.getElementById('rec-erro');

    rec.addEventListener('click', function() {

        if (emailrec.value.trim() === '') {
            emailrec.classList.add('erro');
            e_erro.style.display = 'block';
        }
        else{
            recedo = emailrec.value;
            modalRecuperacao.classList.add('oculto');
            fundo.classList.remove('desfocado');   
        }
    });
});


function setItemWithExpiration(key, value, ttl) {
    const now = new Date();

    // Cria um objeto com o valor e o tempo de expiração
    const item = {
        value: value,
        expiry: now.getTime() + ttl, // ttl = tempo em milissegundos
    };

    localStorage.setItem(key, JSON.stringify(item)); // Armazena como string JSON
}

// Função para pegar o valor do localStorage e verificar a expiração
function getItemWithExpiration(key) {
    const itemStr = localStorage.getItem(key);

    // Se não existir, retorna null
    if (!itemStr) {
        return null;
    }

    const item = JSON.parse(itemStr);
    const now = new Date();

    // Verifica se o tempo de expiração já passou
    if (now.getTime() > item.expiry) {
        localStorage.removeItem('manterbk');
        localStorage.removeItem(key); // Remove o item expirado
        return null; // Retorna null se expirado
    }

    return item.value; // Retorna o valor se ainda não expirou
}

const checkbox = document.getElementById('Manter-conectado');

checkbox.addEventListener('change', function() {
if (checkbox.checked){
    manterdo = true;
    setItemWithExpiration('manterx', 'true', 30000);
}else{
    
    manterdo = false;
    localStorage.removeItem('manterx');
}
});




const usuariox = sessionStorage.getItem('usuariox');
console.log("Usuário:" + usuariox);

const senhax = sessionStorage.getItem('senhax');
console.log("Senha:" + senhax);

const mantery = getItemWithExpiration('manterx');
const manterbky = localStorage.getItem('manterbk');

if (mantery === 'true' && manterbky === '1') {
    window.location.href = "../pag_principal/main.html"; 
}