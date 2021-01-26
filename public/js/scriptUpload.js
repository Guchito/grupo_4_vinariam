const form = document.querySelector('form');

const name = document.querySelector('#name');
const detail= document.querySelector('#detail');
const price = document.querySelector('#price');
const stock = document.querySelector('#stock');
const image = document.querySelector('#image');

const errorsElement = document.querySelector(".errors");
 
form.addEventListener("submit", (event) => {
    const errors = [];

    errorsElement.innerHTML = '';
    if(name.value.trim().length < 3) {
        errors.push('El nombre debe tener más de 2 caracteres')
    }
    if(detail.value.trim().length < 10) {
        errors.push('Debe ingresar una descirpción detallada del producto.')
    }
    if(price.value.trim().length <= 0){
        errors.push('Debe ingresar el valor del producto.')
    } 
    if(stock.value.trim().length <= 0) {
        errors.push('Debe cargar una unidad como mínimo de este producto.')
    }
    //Falta hacer que la imagen sea un archivo valido
    if (errors.length) {
        form.submit()
        for (const error of errors) {
            errorsElement.innerHTML += `<li>${error}</li>`;
        }
        event.preventDefault();
    }

})


*function showErrorTip(fieldName){
    document.querySelector(`.tip-${fieldName}`).classList.add('error')
}

function resetErrorTip(){
    document.querySelectorAll('.tip').forEach (el => {
        el.classList.remove('error')
    })
}