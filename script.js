const html = document.querySelector('html');
const focoBT = document.querySelector('.app__card-button--foco');
const curtoBT = document.querySelector('.app__card-button--curto');
const longoBT = document.querySelector('.app__card-button--longo');
const botoes = document.querySelectorAll('.app__card-button')

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

let intervaloID = null 
let duracaoFoco = 5;
let duracaoDescansoCurto = 300; 
let duracaoDescansoLongo = 900; 


musicaFocoInput.addEventListener('change', () =>{
    if(musica.paused){
        musica.play();
    } else {
        musica.pause();
    }
});

focoBT.addEventListener('click', () => {
    alterarContexto('foco');
    focoBT.classList.add('active');
})

curtoBT.addEventListener('click', () => {
    alterarContexto('descanso-curto');
    curtoBT.classList.add('active');
})

longoBT.addEventListener('click', () => {
    alterarContexto('descanso-longo');
    longoBT.classList.add('active');
})

function alterarContexto(contexto){
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
    if(duracaoFoco <= 0){
        beep.play();
        zerar()
        alert('Tempo finalizado!');
        return
    }
    duracaoFoco -= 1;
    console.log('Cronômetro: ' + duracaoFoco);
}

startPauseBT.addEventListener('click', () => {
    iniciarOuPausar();
});

function iniciarOuPausar(){
    if(intervaloID){
        pause.play();
        zerar();
        return
    }
    play.play();
    intervaloID = setInterval(contagemRegressiva, 1000);
}
function zerar(){
    clearInterval(intervaloID);
    intervaloID = null;
}