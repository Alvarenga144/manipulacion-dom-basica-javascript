// tomando del html

const h2 = document.querySelector('h2');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pdi');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h2,
    p,
    parrafito,
    pid,
    input, 
});

//h2.innerHTML = 'Juas juas <br> Mas juas juas';
//h2.innerText = 'Juas juas <br> Mas juas juas';

//console.log(h2.getAttribute('class'));
//h2.setAttribute('class', 'rojo');

//h2.classList.add('morado');
//h2.classList.remove('verde');
//h2.classList.toggle('');
//h2.classList.contains('');

//input.value = 'troleadisimoo';

const img = document.createElement('img');
img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png');
console.log(img);
// borramos contenido del p
pid.innerHTML = "";

pid.append(img);
