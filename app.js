/*
GAME FUNCTION
- Player must guess a number between min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/


// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
   minNum = document.querySelector('.min-num'),
   maxNum = document.querySelector('.max-num'),
   guessBtn = document.querySelector('#guess-btn'),
   guessInput = document.querySelector('#guess-input'),
   message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function() {
   let guess = parseInt(guessInput.value);
   
   if (isNaN(guess) || guess < min || guess > max) {
      setMessage(`Please enter a number between ${min} and ${max}`, 'red');
   }

   if (guess === winningNum) {
      guessInput.disabled = true;
      guessInput.style.borderColor = 'green';
      setMessage(`${guess} is correct, YOU WIN!`, 'green');
   } else {

   }
});

function setMessage(msg, color) {
   message.style.color = color;
   message.textContent = msg;
}



