let random =Math.floor(Math.random()*100 + 1)
console.log(random);

const userInput = document.querySelector(".guessfield")
const submit = document.querySelector(".submit")
const guessSlot =document.querySelector(".guesses")
const remaining = document.querySelector(".remaining")
const result=document.querySelector(".result")
const startOver = document.querySelector(".newGame")

let numGuesses = 0;
const p = document.createElement('p')

submit.addEventListener("click" , function(e){
  const guess=Math.floor(userInput.value)
  validateguess(guess)
})

function validateguess(guess){
   if(isNaN(guess)) {
    displayMessage("enter a valid number")
   }
   else if (guess < 1 ) {
    displayMessage("enter number greater than 1")
  }
  else if (guess>100 )  {
    displayMessage("enter number less than 100")
  }
  else {
     numGuesses++;
     checkGuess(guess)
     displayHistory(guess)
   }
}

function checkGuess(guess){
  if(guess === random) {
    displayMessage("Your guess is correct")
    endGame()
  }
  else if (guess < random) {
    displayMessage("Your guess is low")
  }
  else if (guess > random) {
    displayMessage("Your guess is high")
  }
}

function displayHistory(guess){
  guessSlot.innerHTML += `${guess} , `
  remaining.innerHTML = 10 - numGuesses
  if(numGuesses === 10) {
    displayMessage(`Game Over. The random number was ${random}`)
    endGame()
  }
}

function displayMessage(message){
  result.innerHTML = message
  userInput.value = ''
}

function endGame (){
  userInput.setAttribute('disabled','')
  p.innerHTML= `<input type="button" value="Start New Game" class="start"></input>`
  startOver.appendChild(p)
  newGame()
}

function newGame (){
  const start = document.querySelector('.start')
  start.addEventListener("click" , function(e){
    random =Math.floor(Math.random()*100 + 1)
    userInput.removeAttribute('disabled')
    guessSlot.innerHTML = ''
    remaining.innerHTML = ''
    numGuesses = 0
    startOver.removeChild(p)
    result.innerHTML=''
  })
}