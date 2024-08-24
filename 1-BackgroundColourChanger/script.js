const button = document.querySelectorAll('.button')
const body = document.querySelector("body")
button.forEach( (button) => {
  button.addEventListener('click',function(e) {
    body.style.backgroundColor = e.target.id 
  })
})


   