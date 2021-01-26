const form = document.querySelector('form');

const name = document.querySelector('#name');
const detail= document.querySelector('#detail');
const price = document.querySelector('#price');
const stock = document.querySelector('#stock');
const image = document.querySelector('#image');
const productType = document.querySelector('.selectorCategoria');


const errorsElement = document.querySelector(".errors");
 
form.addEventListener("submit", (event) => {
    const errors = [];
    
    resetErrorTip()

    errorsElement.innerHTML = '';
    if(name.value.trim().length < 3) {
        errors.push('El nombre debe tener más de 2 caracteres')
    }
    if(detail.value.trim().length < 10) {
        errors.push('Ingresá una descirpción detallada de al menos 10 caracteres.')
    }
    if(price.value.trim().length <= 0){
        errors.push('Ingresá el valor del producto.')
    } 
    if(stock.value.trim().length <= 0) {
        errors.push('Debe cargar una unidad como mínimo.')
    }
    /*if(productType...(ALGO){
        errors.push('Selecciona el tipo de producto que querés cargar.')
    } QUIERO QUE ME OBLIGUE A SELECCIONAR ALGUNO DE LOS 4 TIPOS DE PRODUCTO */

    if (errors.length) {
        for (const error of errors) {
            errorsElement.innerHTML += `<li>${error}</li>`;
        }
        event.preventDefault();
    }

})


function showErrorTip(fieldName){
    document.querySelector(`.tip-${fieldName}`).classList.add('error')
}

function resetErrorTip(){
    document.querySelectorAll('.tip').forEach (el => {
        el.classList.remove('error')
    })
}

