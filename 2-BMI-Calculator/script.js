const form = document.querySelector('form')
//const height = parseInt(document.querySelector('.height').value) //submit ke pahele hi value le leha so empty value

form.addEventListener('submit', function (e){
  e.preventDefault()
  const height = Number(document.querySelector('.height').value)
  const weight = Number(document.querySelector('.weight').value);
  const result = document.querySelector('.result')
  const display = document.querySelector('.display')

  if(height === '' || height <=0 || isNaN(height)){
    result.innerHTML= 'enter valid height'
  } else if (weight === '' || weight <=0 || isNaN(weight)){
    result.innerHTML= 'enter valid weight'
  } else {
  const bmi = (weight/(height*height)).toFixed(2)
  result.innerHTML=`your bmi is ${bmi}`

  if(bmi<=18) {display.innerHTML= "you are underweight"}
  else if(bmi>=25) {display.innerHTML= "you are overweight"}
  else  {display.innerHTML= "you are normalweight"
  }
}
})