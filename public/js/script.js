const selectCategory = document.querySelectorAll('.categoryFilter')


for(const category of selectCategory){
    category.addEventListener('click', (e) => {
        const selected = document.querySelectorAll(`[data-category="${category.value}"]`)
        console.log(selected)
        for (const select of selected){

        }
       /*
        //const listado = document.querySelector('.articuloListado')
        //const products = await db.Product.findAll({
		//	include: ["categories", "brand"],
        //});
        const filtered = document.querySelector('#filtered')
        if(category != 0){ //0 es mostrar todos
            const filter = "<% products.filter(product=>product.categories[0].id == category.value) %>"
            filtered.innerHTML = filter
        }
        */
        
    })

}
