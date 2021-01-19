const selectCategory = document.querySelectorAll('.categoryFilter')
const db = require('../../src/database/models');


for(const category of selectCategory){
    category.addEventListener('click',async () => {
        const listado = document.querySelector('.articuloListado')
        const products = await db.Product.findAll({
			include: ["categories", "brand"],
        });
        
        if(category == 0){ //0 es mostrar todos

        }else{
            products.filter(product=>product.categories[0].id == category.value)

        }
        
        console.log(category.value)
        
    })

}
