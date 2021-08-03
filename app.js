const nav=document.querySelector('nav')

const hamburger=document.querySelector('.hamburger')
const cross=document.querySelector('.cross')

const button = document.querySelector('#form-button')
const username = document.querySelector('#name')
const number=document.querySelector('#number')
const email = document.querySelector('#email')
const message=document.querySelector('#message')

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

const validateForm= function(){
    let k=[];
    const array=[username, email,number, message]
    array.forEach(element => {
        k.push(element.value.length)
       
  });
  return k
}

button.addEventListener('click', function(e){
    const k=validateForm();
  if(k[0]<4){
      e.preventDefault()
      username.placeholder='Name must have atleast 3 characters'
  } 
})

button.addEventListener('click', function(e){
    const k=validateForm();
    if(k[1]<5){
        e.preventDefault()
        email.placeholder='Email is not valid'
    }
})

