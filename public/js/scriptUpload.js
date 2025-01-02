const form = document.querySelector('form');

const name = document.querySelector('#name');
const detail= document.querySelector('#detail');
const price = document.querySelector('#price');
const stock = document.querySelector('#stock');
const image = document.querySelector('#image');
const productType = document.querySelectorAll('.productoCategoria');
let productCategory = "" ;

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
        errors.push('El nombre debe tener al menos 3 caracteres.')
    }
    if(detail.value.trim().length < 10) {
        errors.push('Enter a detailed description of at least 10 characters.')
    }
    if(price.value.trim().length <= 0){
        errors.push('Enter the value of the product.')
    } 
    if(stock.value.trim().length <= 0) {
        errors.push('Enter at least one unit.')
    }
    if (productCategory == ""){
        errors.push('You must select at least one product category.')
        window.alert("Select what type of product you want to upload.");
    }
    if (image.value == "") {
        errors.push('You must upload the product image.');
    } else {
        const ext = this.image.files[0].type;
        if(!(ext == "image/jpeg" || ext == "image/png" || ext == "image/csv" || ext == "image/jpg")){
            errors.push('The avatar has an invalid extension');
        }
    }
    if (errors.length) {
        for (const error of errors) {
            errorsElement.innerHTML += `<li>${error}</li>`;
        }
        event.preventDefault();
    }

})





