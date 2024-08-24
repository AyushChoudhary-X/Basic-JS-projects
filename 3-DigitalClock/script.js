const clock = document.getElementsByClassName("clock")
//classname --> html collection , query/getbyID --> normal 

setInterval(function() {
  let date = new Date ()
clock[0].innerHTML = date.toLocaleTimeString()
}, 1000)