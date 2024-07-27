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
    html.setAttribute('data-contexto', 'foco');
    image.setAttribute('src', './imagens/foco.png')
})

curtoBT.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto');
    image.setAttribute('src', './imagens/descanso-curto.png')
})

longoBT.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo');
    image.setAttribute('src', './imagens/descanso-longo.png')
})