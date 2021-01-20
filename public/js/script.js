const selectCategory = document.querySelectorAll('.categoryFilter')


for(const category of selectCategory){
    category.addEventListener('click', (e) => {
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
                one.style.display='block'
            }
        }
    })
}
