const selectCategory = document.querySelectorAll('.categoryFilter')


for(category of selectCategory){
    category.addEventListener('click',() => {
        console.log(category)
    })
}