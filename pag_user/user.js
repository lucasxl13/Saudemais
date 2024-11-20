const containerPrincipal = document.querySelector('.container__pricinpal');
const campoLogo = document.querySelector('.style_logo');
const itemLogo = document.getElementById('itemMais_logo');
const itemSideBar = document.querySelectorAll('.item__sidebar'); // Alterado para querySelectorAll
let datay;

const botaoHome = document.getElementById('homeLink');
const botaoHidratacao = document.getElementById('hidratacaoLink');
const botaoCalorias = document.getElementById('calorialink');
const botaoDieta = document.getElementById('dietalink');
const botaoPerfil= document.getElementById('perfilLink');
const botaoLogout = document.getElementById('logoutlink');


botaoHome.addEventListener('click', (event) => {
    event.preventDefault(); 
    window.location.href = '../pag_principal/main.html';  
});

botaoHidratacao.addEventListener('click', (event) => {
    event.preventDefault(); 
    window.location.href = '../pag_hidratacao/main.html';  
});

botaoCalorias.addEventListener('click', (event) => {
    event.preventDefault(); 
    window.location.href = '../pag_calorias/calorias.html';  
});

botaoDieta.addEventListener('click', (event) => {
    event.preventDefault(); 
    window.location.href = '../pag_dieta/dieta.html';  
});

botaoPerfil.addEventListener('click', (event) => {
    event.preventDefault(); 
    window.location.href = '../pag_user/user.html'; 
});

botaoLogout.addEventListener('click', (event) => {
    event.preventDefault(); 
    
    // Exibe uma janela de confirmação
    const confirmacao = confirm("Tem certeza de que deseja sair?");
    
    if (confirmacao) {
        // Se o usuário confirmar, redireciona para a página de login
        window.location.href = '../pag_login/login.html';
        localStorage.removeItem('manterx');
    } 
});


document.getElementById('button_menu').addEventListener('click', (event) => {
    event.preventDefault(); 
    window.location.href = '../pag_principal/main.html';  
});

const toggleSidebar = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');

toggleSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('expanded');
});

const usuariox = sessionStorage.getItem('usuariox');
const usuariox2 = usuariox.toUpperCase();
document.getElementById("user").textContent = usuariox2;
let logoletra = usuariox2[0];
document.getElementById("logo").textContent = logoletra;

const pesox = sessionStorage.getItem('pesox');
document.getElementById("peso").textContent = pesox;

const alturax = sessionStorage.getItem('alturax');
document.getElementById("altura").textContent = alturax;

const sexox = sessionStorage.getItem('sexox');
document.getElementById("sexo").textContent = sexox;

const metax = sessionStorage.getItem('metax');

if(metax == 1){
    document.getElementById("objetivo").textContent = "Perca de peso";
}

else if(metax ==2) {
    document.getElementById("objetivo").textContent = "Ganho de massa";
}

else if(metax ==3) {
    document.getElementById("objetivo").textContent = "Manutenção do peso";
}

// Função para calcular idade e dias passados
function calcularIdadeEDias(dataString) {
    // Parse a data no formato dd/mm/yyyy
    const partesData = dataString.split('/');
    const dia = parseInt(partesData[0], 10);
    const mes = parseInt(partesData[1], 10) - 1; // Mês começa em 0
    const ano = parseInt(partesData[2], 10);

    // Data especificada
    const dataNascimento = new Date(ano, mes, dia);

    // Data atual
    const dataAtual = new Date();

    // Cálculo de idade
    let idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
    if (
        dataAtual.getMonth() < dataNascimento.getMonth() ||
        (dataAtual.getMonth() === dataNascimento.getMonth() && dataAtual.getDate() < dataNascimento.getDate())
    ) {
        idade--;
    }

    // Data do último aniversário
    const ultimoAniversario = new Date(
        dataAtual.getFullYear(),
        dataNascimento.getMonth(),
        dataNascimento.getDate()
    );

    if (ultimoAniversario > dataAtual) {
        // Se ainda não passou o aniversário deste ano, usamos o do ano anterior
        ultimoAniversario.setFullYear(dataAtual.getFullYear() - 1);
    }

    // Cálculo de dias desde o último aniversário
    const diferencaMilissegundos = dataAtual - ultimoAniversario;
    const diasDesdeUltimoAniversario = Math.floor(diferencaMilissegundos / (1000 * 60 * 60 * 24));

    return {
        idade,
        diasRestantes: diasDesdeUltimoAniversario
    };
}

// Obtém a data do sessionStorage
const datax = sessionStorage.getItem('datax'); // formato: "dd/mm/yyyy"

// Se a data existir, realiza o cálculo e exibe os resultados
if (datax) {
    const resultado = calcularIdadeEDias(datax);

    datay = resultado.idade;

    // Exibe os resultados no mesmo ID, considerando o número de dias
    const idadeElement = document.getElementById("idade");
    if (resultado.diasRestantes === 0) {

        const idadeFormatada = resultado.idade > 0 && resultado.idade < 10 ? `0${resultado.idade}` : resultado.idade;

        const unidadeAno = resultado.idade === 1 ? "ano" : "anos";
    

        const mensagem = "Feliz Aniversário!";
        let mensagemColorida = "";
    
        // Define um array de cores (excluindo o amarelo)
        const cores = ["red", "orange", "green", "blue", "indigo", "violet"];
    
        // Aplica um span para cada letra
        for (let i = 0; i < mensagem.length; i++) {
            const letra = mensagem[i];
            if (letra.trim() === "") {
                // Adiciona espaços sem estilizar
                mensagemColorida += letra;
            } else {
                mensagemColorida += `<span class="letra" data-index="${i}">${letra}</span>`;
            }
        }
    
        idadeElement.innerHTML = `${idadeFormatada} ${unidadeAno} - 🎉 ${mensagemColorida}`;
    
        // Função para animar as cores
        const letras = document.querySelectorAll(".letra");
        let corIndex = 0;
    
        setInterval(() => {
            letras.forEach((letra, index) => {
                const cor = cores[(corIndex + index) % cores.length]; // Alterna cores para cada letra
                letra.style.color = cor;
            });
            corIndex++; // Incrementa o índice das cores
        }, 100); // Intervalo de 500ms para alternar as cores
    }
    else {
    const idadeFormatada = resultado.idade > 0 && resultado.idade < 10 ? `0${resultado.idade}` : resultado.idade;
    const unidadeAno = resultado.idade === 1 ? "ano" : "anos";
    idadeElement.textContent = `${idadeFormatada} ${unidadeAno} e ${resultado.diasRestantes} dias`;
    }
} else {
    // Caso a data não esteja no sessionStorage
    document.getElementById("idade").textContent = "Data não encontrada.";
}


const imcx = pesox / ((alturax / 100) * (alturax / 100));
document.getElementById("imc").textContent = imcx.toFixed(2);
if(imcx<18.50){
    document.getElementById("imcstatus").textContent = ' - Magreza';
}
else if(imcx>=18.50 && imcx<=24.99){
    document.getElementById("imcstatus").textContent = ' - Normal'; 
}
else if(imcx>24.99 && imcx<=29.99){
    document.getElementById("imcstatus").textContent = ' - Sobrepeso'; 
}
else if(imcx>29.99 && imcx<=39.99){
    document.getElementById("imcstatus").textContent = ' - 	Obesidade'; 
}
else if(imcx>39.99){
    document.getElementById("imcstatus").textContent = ' - 	Obesidade Grave'; 
}


let metabolismo;

if(sexox=='Feminino'){
    metabolismo = 655 + (9.6*pesox) + (1.8 * alturax) - (4.7 * datay);
}

if(sexox=='Masculino'){
    metabolismo = 66 + (13.7*pesox) + (5 * alturax) - (6.8 * datay);
}

document.getElementById("metabolismo").textContent = metabolismo.toFixed(2);;




// PESO
const btnpeso = document.getElementById('btn_peso');
const btncpeso = document.getElementById('btn_cpeso');
const pesomodif = document.querySelector('.pesomodif');
const pesoValorSpan = document.getElementById('peso-valor');
const pesoSlider = document.getElementById('peso-slider');

// Inicializa o slider de peso
if (pesox) {
    pesoSlider.value = pesox; 
    pesoValorSpan.textContent = `${pesox} kg`;
} else {
    pesoSlider.value = 70;
    pesoValorSpan.textContent = `70 kg`;
}

// Exibe o controle do peso
btnpeso.addEventListener('click', () => {
    document.querySelector('.user-metap').style.display = "none";
    pesomodif.style.display = "block";
});

// Atualiza o valor do peso
function atualizaPeso(valor) {
    pesoValorSpan.textContent = `${valor} kg`;
    sessionStorage.setItem('pesox', valor);
}

// Fecha o controle de peso
btncpeso.addEventListener('click', () => {
    document.querySelector('.user-metap').style.display = "block";
    pesomodif.style.display = "none";
    location.reload();
});

// ALTURA
const btnaltura = document.getElementById('btn_altura');
const btncaltura = document.getElementById('btn_caltura');
const alturamodif = document.querySelector('.alturamodif');
const alturaValorSpan = document.getElementById('altura-valor');
const alturaSlider = document.getElementById('altura-slider');

// Inicializa o slider de altura
if (alturax) {
    alturaSlider.value = alturax; 
    alturaValorSpan.textContent = `${alturax} cm`;
} else {
    alturaSlider.value = 150;
    alturaValorSpan.textContent = `150 cm`;
}

// Exibe o controle da altura
btnaltura.addEventListener('click', () => {
    document.querySelector('.user-metaa').style.display = "none";
    alturamodif.style.display = "block";
});

// Atualiza o valor da altura
function atualizaAltura(valor) {
    alturaValorSpan.textContent = `${valor} cm`;
    sessionStorage.setItem('alturax', valor);
}

// Fecha o controle da altura
btncaltura.addEventListener('click', () => {
    document.querySelector('.user-metaa').style.display = "block";
    alturamodif.style.display = "none";
    location.reload();
});

const btnobj = document.getElementById('btn_obj');
const btncobj1 = document.getElementById('obj1');
const btncobj2 = document.getElementById('obj2');
const btncobj3 = document.getElementById('obj3');
const objmodif = document.querySelector('.objmodif');

btnobj.addEventListener('click', () => {
    document.querySelector('.user-metao').style.display = "none";
    objmodif.style.display = "block";
});

btncobj1.addEventListener('click', () => {
    document.querySelector('.user-metao').style.display = "block";
    objmodif.style.display = "none";
    sessionStorage.setItem('metax',1);
    location.reload();
});

btncobj2.addEventListener('click', () => {
    document.querySelector('.user-metao').style.display = "block";
    objmodif.style.display = "none";
    sessionStorage.setItem('metax',2);
    location.reload();
});

btncobj3.addEventListener('click', () => {
    document.querySelector('.user-metao').style.display = "block";
    objmodif.style.display = "none";
    sessionStorage.setItem('metax',3);
    location.reload();
});