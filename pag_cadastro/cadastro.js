let page = 0;
let contador = 0;

let usuariodo;
let emaildo;
let senhado;
let pesado;
let alturado;
let sexodo;
let datado;
let metado;

document.getElementById('btn1').style.display = 'none';

dot1.classList.add('active');

document.getElementById('usuario').addEventListener('keydown', function(e) {
    if (e.key === ' ') {
      e.preventDefault();  // Impede que o espaço seja inserido
    }
  });

  document.getElementById('email').addEventListener('keydown', function(e) {
    if (e.key === ' ') {
      e.preventDefault();  // Impede que o espaço seja inserido
    }
  });

  document.getElementById('senha').addEventListener('keydown', function(e) {
    if (e.key === ' ') {
      e.preventDefault();  // Impede que o espaço seja inserido
    }
  });

  document.getElementById('c_senha').addEventListener('keydown', function(e) {
    if (e.key === ' ') {
      e.preventDefault();  // Impede que o espaço seja inserido
    }
  });

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
    const dot4 = document.getElementById('dot4');

    u_erro.classList.remove('erro');
    s_erro.classList.remove('erro');
    cs_erro.classList.remove('erro');
    e_erro.classList.remove('erro');

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

        usuariodo  = usuario.value;
        senhado  = senha.value;
        emaildo = email.value;

        switch (page) {
            case 0:
                contador=0;
                dot1.classList.add('active');
                dot2.classList.remove('active');
                dot3.classList.remove('active');
                dot4.classList.remove('active');
            
                document.getElementById('btn1').style.display = 'none';
                document.getElementById('pag1').style.display = 'block';
                document.getElementById('pag2').style.display = 'none';
                document.getElementById('pag3').style.display = 'none';
                document.getElementById('pag4').style.display = 'none';

                document.getElementById('dcadastrais').style.display = 'block';
                document.getElementById('dpessoais').style.display = 'none';
                document.getElementById('objetivos').style.display = 'none';
                document.getElementById('confirmacao').style.display = 'none';
                document.getElementById('termos').style.display = 'none';

                document.getElementById('termos2').style.display = 'none';
                document.getElementById('aceito').style.display = 'none';
                break;

            case 1:
                contador=1;
                dot1.classList.remove('active');
                dot2.classList.add('active');
                dot3.classList.remove('active');
                dot4.classList.remove('active');

                document.getElementById('btn1').style.display = 'block';
                document.getElementById('pag1').style.display = 'none';
                document.getElementById('pag2').style.display = 'block';
                document.getElementById('pag3').style.display = 'none';
                document.getElementById('pag4').style.display = 'none';

                document.getElementById('dcadastrais').style.display = 'none';
                document.getElementById('dpessoais').style.display = 'block';
                document.getElementById('objetivos').style.display = 'none';
                document.getElementById('confirmacao').style.display = 'none';
                document.getElementById('termos').style.display = 'none';

                document.getElementById('termos2').style.display = 'none';
                document.getElementById('aceito').style.display = 'none';
                break;

            case 2:
                contador=2;
                dot1.classList.remove('active');
                dot2.classList.remove('active');
                dot3.classList.add('active');
                dot4.classList.remove('active');

                document.getElementById('btn1').style.display = 'block';
                document.getElementById('pag1').style.display = 'none';
                document.getElementById('pag2').style.display = 'none';
                document.getElementById('pag3').style.display = 'block';
                document.getElementById('pag4').style.display = 'none';

                document.getElementById('dcadastrais').style.display = 'none';
                document.getElementById('dpessoais').style.display = 'none';
                document.getElementById('objetivos').style.display = 'block';
                document.getElementById('confirmacao').style.display = 'none';
                document.getElementById('termos').style.display = 'none';

                document.getElementById('termos2').style.display = 'none';
                document.getElementById('aceito').style.display = 'none';
                break;

            case 3:
                contador=3;
                dot1.classList.remove('active');
                dot2.classList.remove('active');
                dot3.classList.remove('active');
                dot4.classList.add('active');

                document.getElementById("user").textContent = usuariodo;
                document.getElementById("mail").textContent = emaildo;
                document.getElementById("nasci").textContent = datado;
                document.getElementById("quilos").textContent = pesado + " Kg";
                document.getElementById("alto").textContent = alturado + " cm";
                document.getElementById("sexo2").textContent = sexodo;

                if(metado === 1){
                    document.getElementById("obj").textContent = "Perca de peso";
                }

                else if(metado ===2) {
                    document.getElementById("obj").textContent = "Ganho de massa";
                }

                else if(metado ===3) {
                    document.getElementById("obj").textContent = "Manutenção do peso";
                }
                

                document.getElementById('btn1').style.display = 'block';
                document.getElementById('pag1').style.display = 'none';
                document.getElementById('pag2').style.display = 'none';
                document.getElementById('pag3').style.display = 'none';
                document.getElementById('pag4').style.display = 'block';

                document.getElementById('dcadastrais').style.display = 'none';
                document.getElementById('dpessoais').style.display = 'none';
                document.getElementById('objetivos').style.display = 'none';
                document.getElementById('confirmacao').style.display = 'block';
                document.getElementById('termos').style.display = 'block';

                document.getElementById('termos2').style.display = 'block';
                document.getElementById('aceito').style.display = 'flex';

                break;

            case 4:
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

document.getElementById('data').addEventListener('input', function () {
    this.classList.remove('erro');
    document.getElementById('nascimento-erro').style.display = 'none';
});

document.getElementById('peso').addEventListener('input', function () {
    this.classList.remove('erro');
    document.getElementById('peso-erro').style.display = 'none';
});

document.getElementById('altura').addEventListener('input', function () {
    this.classList.remove('erro');
    document.getElementById('altura-erro').style.display = 'none';
});

document.getElementById('meta').addEventListener('click', function () {
    this.classList.remove('erro');
    document.getElementById('meta-erro').style.display = 'none';
});

document.getElementById('meta2').addEventListener('click', function () {
    this.classList.remove('erro');
    document.getElementById('meta-erro').style.display = 'none';
});

document.getElementById('meta3').addEventListener('click', function () {
    this.classList.remove('erro');
    document.getElementById('meta-erro').style.display = 'none';
});

document.getElementById('termosaceitos').addEventListener('click', function () {
    this.classList.remove('erro');
    document.getElementById('termos-erro').style.display = 'none';
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
    let valido2 = validarForm2();
    let valido3= validarForm3();
    let valido4 = validarForm4();

    if (valido && page === 0) {
        sessionStorage.setItem('usuariox', usuariodo.toLowerCase());
        sessionStorage.setItem('emailx', emaildo);
        sessionStorage.setItem('senhax', senhado);

        page++;
        valido2 = false;
    }

    if(valido2 && page===1)
    {   
        page++;
        valido3 = false;
    }

    if(valido3 && page===2)
        {      
            page++;
            valido4 = false;
        }
    
    if(valido4 && page===3)
        {    
            page++;
        }

});

document.getElementById('btn1').addEventListener('click', function () {
    // Simula o envio do formulário e executa a lógica de validação
    document.getElementById('register').dispatchEvent(new Event('submit'));

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

function validarForm2() {
    // Implementa a mesma lógica de validação aqui
    let valido2=true;

    const data = document.getElementById('data');
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');
    const sexo = document.getElementById('sexo-btn');
    const meta = document.getElementById('meta');

    const n_erro = document.getElementById('nascimento-erro');
    const p_erro = document.getElementById('peso-erro');
    const a_erro = document.getElementById('altura-erro');
    const sx_erro = document.getElementById('sexo-erro');
    const m_erro = document.getElementById('meta-erro');

    n_erro.classList.remove('erro')
    n_erro.style.display = 'none';
    p_erro.classList.remove('erro')
    p_erro.style.display = 'none';
    a_erro.classList.remove('erro')
    a_erro.style.display = 'none';
    sx_erro.classList.remove('erro')
    sx_erro.style.display = 'none';

    if(contador===0){
        data.classList.remove('erro');
        n_erro.style.display = 'none';

        altura.classList.remove('erro');
        a_erro.style.display = 'none';   

        peso.classList.remove('erro');
        p_erro.style.display = 'none';

        sexo.classList.remove('erro');
        sx_erro.style.display = 'none';
    }

    if (data.value.trim() === '' && contador===1) {
        data.classList.add('erro');
        n_erro.style.display = 'block';
        valido2 = false;
        }

    if (pesado === undefined && contador===1) {
        peso.classList.add('erro');
        p_erro.style.display = 'block';
        valido2 = false;
    } 

    if (alturado === undefined && contador===1) {
        altura.classList.add('erro');
        a_erro.style.display = 'block';
        valido2 = false;
    } 

    if (sexodo === undefined && contador===1) {
        sexo.classList.add('erro');
        sx_erro.style.display = 'block';
        valido2 = false;
    } 

    datado = data.value;

    return valido2;
}

function validarForm3() {

    let valido3=true;

    const meta = document.getElementById('meta');
    const m_erro = document.getElementById('meta-erro');

    m_erro.classList.remove('erro')
    m_erro.style.display = 'none';

    if (metado === undefined && contador===2) {
        meta.classList.add('erro');
        m_erro.style.display = 'block';
        m_erro.style.textAlign = "center";
        valido3 = false;
    } 

    return valido3;
}

function validarForm4() {
    let valido4 = true;
    const checkbox = document.getElementById('termosaceitos');
    const checkboxErro = document.getElementById('termos-erro'); 

    checkboxErro.classList.remove('erro');
    checkboxErro.style.display = 'none'; 

    if (!checkbox.checked && page===3) {
        checkboxErro.classList.add('erro');
        checkboxErro.style.display = 'block';
        valido4 = false; 
    }
    return valido4;
}

function atualizaPeso(valor) {
    pesado = valor;
    document.getElementById('peso-valor').textContent = valor + ' kg';
  }

function atualizaAltura(valor) {
    alturado = valor;
    document.getElementById('altura-valor').textContent = valor + ' cm';
  }


  function selecionaSexo(sexo) {
    const sexo2 = document.getElementById('sexo-btn');

    var botoesSexo = document.querySelectorAll('.sexo-btn svg');

    botoesSexo.forEach(svg => svg.classList.remove('selected'));
    
    document.querySelector(`#sexo-${sexo} svg`).classList.add('selected');

    document.getElementById('sexo-btn').textContent = sexo.charAt(0).toUpperCase() + sexo.slice(1);

    const selecionado = document.querySelector('.sexo-btn svg.selected');
    
    if (selecionado) {
        switch (sexo) {
            case 'feminino':
                sexodo = 'feminino';
                sexo2.classList.remove('erro');
                document.getElementById('sexo-erro').style.display = 'none';
                break;

            case 'masculino':
                sexodo = 'masculino';
                sexo2.classList.remove('erro');
                document.getElementById('sexo-erro').style.display = 'none';
                break;

            default:
                sexodo = 0; 
        }
    } 
    else {
        sexodo = null; 
    }  
    }

    document.addEventListener('DOMContentLoaded', function() {

        const meta1 = document.getElementById('meta');
        const meta2 = document.getElementById('meta2');
        const meta3 = document.getElementById('meta3');
    
        const color6 = getComputedStyle(document.documentElement).getPropertyValue('--color6').trim();
    
        meta1.addEventListener('click', function() {
            metado = 1;
            resetColors();
            meta1.style.color = color6; 
        });
    
        meta2.addEventListener('click', function() {
            metado = 2;
            resetColors();
            meta2.style.color = color6;
        });
    
        meta3.addEventListener('click', function() {
            metado = 3;
            resetColors();
            meta3.style.color = color6;
        });
    
        function resetColors() {
            meta1.style.color = '';
            meta2.style.color = '';
            meta3.style.color = '';
        }
    });
    
