const selectCategory = document.querySelectorAll('.categoryFilter'); // Selecciono todas las categorias
const selectFilter = document.querySelector('.selectFilter'); // Selecciono todo el dropdows

selectFilter.addEventListener('change',(e)=>{     
    for(const category of selectCategory){
    
        const selected = document.querySelectorAll(`[data-category="${e.target.value}"]`)
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
        
    }
})
