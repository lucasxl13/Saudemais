const containerPrincipal = document.querySelector('.container__pricinpal');
const campoLogo = document.querySelector('.style_logo');
const itemLogo = document.getElementById('itemMais_logo');
const itemSideBar = document.querySelectorAll('.item__sidebar'); // Alterado para querySelectorAll
let datay;

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

let metabolismo;
console.log(datay);

if(sexox=='Feminino'){
    metabolismo = 655 + (9.6*pesox) + (1.8 * alturax) - (4.7 * datay);
}

if(sexox=='Masculino'){
    metabolismo = 66 + (13.7*pesox) + (5 * alturax) - (6.8 * datay);
}

document.getElementById("metabolismo").textContent = metabolismo;
