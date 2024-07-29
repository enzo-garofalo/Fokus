const html = document.querySelector('html');
const focoBT = document.querySelector('.app__card-button--foco');
const curtoBT = document.querySelector('.app__card-button--curto');
const longoBT = document.querySelector('.app__card-button--longo');

const timer = document.querySelector('#timer');
const image = document.querySelector('.app__image');
const title = document.querySelector('.app__title');

const duracaoFoco = 1500; 
const duracaoDescansoCurto = 300; 
const duracaoDescansoLongo = 900; 

focoBT.addEventListener('click', () => {
    alterarContexto('foco');
})

curtoBT.addEventListener('click', () => {
    alterarContexto('descanso-curto');
})

longoBT.addEventListener('click', () => {
    alterarContexto('descanso-longo');
})

function alterarContexto(contexto){
    html.setAttribute('data-contexto', contexto)
    image.setAttribute('src', `./imagens/${contexto}.png`)
}