
let listaNumerosSorteados = [];
let numeroMaximoAleatorio = 5;
let numeroTentativas = 1;



exibirMensagemInicial('Jogo do Número Secreto','Escolha um numero entre 1 e ' + numeroMaximoAleatorio);
let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag,mensagem) {
    let texto = document.querySelector(tag);
    texto.innerHTML = mensagem;
    //responsiveVoice.speak(mensagem,'Brazilian Portuguese Female',{rate:1.2});
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(mensagem);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}


function verificarChute() {
    
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1','Acertou!');
        exibirTextoNaTela('p','Você descobriu o Número Secreto ' + numeroSecreto + ' com ' + numeroTentativas + ' tentativas');
        numeroTentativas = 1;  
        document.getElementById('reiniciar').removeAttribute('disabled');
    }        
    else {
        exibirTextoNaTela('p','Você errou o Número Secreto ' + numeroSecreto);
        numeroTentativas++;
        }
    limparCampo();
    
    
}

function limparCampo() {
    chute = document.querySelector('input').value ='';
}

function gerarNumeroAleatorio() {
    
    let numeroEscolhido =  parseInt(Math.random() * numeroMaximoAleatorio + 1);
    console.log(numeroEscolhido);
    let quantidadeElementosLista = listaNumerosSorteados.length;
    if (quantidadeElementosLista == numeroMaximoAleatorio) {
        let listaNumerosSorteados=[];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
    
}

function exibirMensagemInicial(titulo,mensagem){
    exibirTextoNaTela('h1',titulo);
    exibirTextoNaTela('p',mensagem);
}

function reiniciarJogo(){
    exibirMensagemInicial('Jogo do Número Secreto','Escolha um numero entre 1 e ' + numeroMaximoAleatorio);
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}