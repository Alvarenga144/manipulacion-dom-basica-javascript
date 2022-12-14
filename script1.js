const h2 = document.querySelector('h2');
const frm = document.querySelector('#formu');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const btnCalculos = document.querySelector('#btnEnviar');
const pResult = document.querySelector('#result');

/* 
frm.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    // console.log({event});
    event.preventDefault();
    let first = parseInt(input1.value);
    let second = parseInt(input2.value);
    const realNumb = first + second;

    pResult.innerHTML = "La suma mas cachimbona de todo el mundo: " + realNumb + " " + " :D";
}
*/

btnCalculos.addEventListener('click', sumarInputValues);

function sumarInputValues(event) {
    // console.log({event});
    // event.preventDefault();
    let first = parseInt(input1.value);
    let second = parseInt(input2.value);
    const realNumb = first + second;

    pResult.innerHTML = "La suma mas cachimbona de todo el mundo: " + realNumb + " " + " :D";
}