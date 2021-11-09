const links= document.querySelectorAll('.link')
const container= document.querySelector('.texte')
const contenu= document.querySelectorAll('.content')

container.addEventListener('click', (e)=>{
    const id = e.target.dataset.id
    if(id){
        links.forEach(el=>{
            el.classList.remove('active')
            e.target.classList.add('active')
        })

        contenu.forEach(contentText=>{
            contentText.classList.remove('active')
        })
        const element= document.getElementById(id)
        element.classList.add('active')
    }


})