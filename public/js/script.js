const selectCategory = document.querySelectorAll('.categoryFilter')
for(const category of selectCategory){
    category.addEventListener('click', () => {
        const selected = document.querySelectorAll(`[data-category="${category.value}"]`)
        const all = document.querySelectorAll('.articuloListado')
        for (const one of all){
            one.style.display='none'
        }
        for (const select of selected){
            select.style.display="block"
        }
        if(selected.length==0){
            for (const one of all){
                console.log('hola')
                one.style.display='block'
            }
        }
    })
}

