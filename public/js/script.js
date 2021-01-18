const selectCategory = document.querySelectorAll('.categoryFilter')


for(category of selectCategory){
    category.addEventListener('click',() => {
        console.log(value) // no se porque, siempre me toma value 6
    })
}