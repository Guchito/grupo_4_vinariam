const form = document.querySelector('form');

const name = document.querySelector('#name');
const detail= document.querySelector('#detail');
const price = document.querySelector('#price');
const stock = document.querySelector('#stock');
const image = document.querySelector('#image');
const productType = document.querySelectorAll('.productoCategoria');
let productCategory ;

//Función que resetea los errores
function resetErrorTip(){
    document.querySelectorAll('.tip').forEach (el => {
        el.classList.remove('error')
    })
}

const errorsElement = document.querySelector(".errors");

for (producto of productType) {
     producto.onclick = function(){ 
        for (let categoria of productType){
            categoria.classList.remove('active')
        }
        this.classList.add('active')
        productCategory = this.getAttribute("category-id")
        console.log(productCategory)
    }  
}

form.addEventListener("submit", (event) => {
    const errors = [];
    
    resetErrorTip()

    errorsElement.innerHTML = '';
    if(name.value.trim().length < 3) {
        errors.push('El nombre debe tener más de 3 caracteres.')
    }
    if(detail.value.trim().length < 10) {
        errors.push('Ingresá una descirpción detallada de al menos 10 caracteres.')
    }
    if(price.value.trim().length <= 0){
        errors.push('Ingresá el valor del producto.')
    } 
    if(stock.value.trim().length <= 0) {
        errors.push('Ingresá al menos una unidad.')
    }

    /*if (productCategory.length <= 0){
        errors.push('Debe seleccionar al menos una categoría de producto.')
    }*/

    if (errors.length) {
        for (const error of errors) {
            errorsElement.innerHTML += `<li>${error}</li>`;
        }
        event.preventDefault();
    }

})


/*function showErrorTip(fieldName){
    document.querySelector(`.tip-${fieldName}`).classList.add('errors')
} ESTO TODAVIA NO LO USO*/ 




