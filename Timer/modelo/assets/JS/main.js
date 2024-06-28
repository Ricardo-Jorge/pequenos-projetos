function relogio() {
    
const relogio = document.querySelector('.relogio');
    
function criaTimer(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {hour12:false, timeZone: 'UTC'})
};

let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaTimer(segundos);
    }, 1000)
}

document.addEventListener('click', function(e) {
    const element = e.target;
    
    if(element.classList.contains('iniciar')){
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    }
    if(element.classList.contains('pausar')){
        clearInterval(timer);
        relogio.classList.add('pausado');
    }
    if(element.classList.contains('zerar')){
        relogio.classList.remove('pausado');
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }
})
}
relogio();

