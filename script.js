const html = document.querySelector('html');
const focoBT = document.querySelector('.app__card-button--foco');
const curtoBT = document.querySelector('.app__card-button--curto');
const longoBT = document.querySelector('.app__card-button--longo');
const botoes = document.querySelectorAll('.app__card-button')
const botaoPausar = document.querySelector('.app__card-primary-butto-icon')
const iniciarOuPausarBT = document.querySelector('#start-pause span')

const timer = document.querySelector('#timer');
const image = document.querySelector('.app__image');
const title = document.querySelector('.app__title');

const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('./sons/luna-rise-part-one.mp3');
musica.loop = true;
const beep = new Audio('./sons/beep.mp3');
const play = new Audio('./sons/play.wav');
const pause = new Audio('./sons/pause.mp3')

const startPauseBT = document.querySelector('#start-pause')

let intervaloID;
let tempoDecorrido = 1500;

musicaFocoInput.addEventListener('change', () =>{
    if(musica.paused){
        musica.play();
    } else {
        musica.pause();
    }
});

focoBT.addEventListener('click', () => {
    tempoDecorrido = 1500;
    alterarContexto('foco');
    focoBT.classList.add('active');
})

curtoBT.addEventListener('click', () => {
    tempoDecorrido = 300;
    alterarContexto('descanso-curto');
    curtoBT.classList.add('active');
})

longoBT.addEventListener('click', () => {
    tempoDecorrido = 900;
    alterarContexto('descanso-longo');
    longoBT.classList.add('active');
})

function alterarContexto(contexto){
    mostrarTempo();
    botoes.forEach(function(contexto){
        contexto.classList.remove('active')
    });
    html.setAttribute('data-contexto', contexto)
    image.setAttribute('src', `./imagens/${contexto}.png`)
    switch (contexto) {
        case 'foco':
            title.innerHTML = `                
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
                `
            break;
        case 'descanso-curto':
            title.innerHTML = `
            Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `
            break;
        case 'descanso-longo':
            title.innerHTML = `
            Hora de voltar à superfície.<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `
            break;
        default:
            break;
    }
}

const contagemRegressiva = () =>{
    if(tempoDecorrido <= 0){
        beep.play();
        alert('Tempo finalizado!');
        zerar()
        return
    }
    tempoDecorrido -= 1;
    mostrarTempo();
}

startPauseBT.addEventListener('click', () => {
    iniciarOuPausar();
});

function iniciarOuPausar(){
    if(intervaloID){
        botaoPausar.setAttribute('src', `./imagens/play_arrow.png`)
        iniciarOuPausarBT.textContent = `Começar`;
        pause.play();
        zerar();
        return
    }
    play.play();
    iniciarOuPausarBT.textContent = `Pausar`;
    botaoPausar.setAttribute('src', `./imagens/pause.png`)
    intervaloID = setInterval(contagemRegressiva, 1000);
}
function zerar(){
    clearInterval(intervaloID);
    intervaloID = null;
}

function mostrarTempo(){
    const tempo = new Date(tempoDecorrido * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'})
    timer.innerHTML = `${tempoFormatado}`
}

mostrarTempo();