const nav=document.querySelector('nav')

const hamburger=document.querySelector('.hamburger')
const cross=document.querySelector('.cross')

hamburger.addEventListener('click', function(e){
    nav.classList.toggle('hide')
    hamburger.classList.toggle('hide')
})

cross.addEventListener('click', function(e){
    nav.classList.toggle('hide')
    hamburger.classList.toggle('hide')
})

window.onscroll= function(e){
    if(window.pageYOffset<200){
        hamburger.classList.remove('dark')
    }
    else{
        hamburger.classList.add('dark')
    }
}