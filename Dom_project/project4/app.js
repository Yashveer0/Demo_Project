

    let randamNum = Math.round( (Math.random() * 99) + 1);

   const submit = document.querySelector('#subt');
   const userInput = document.querySelector('#guessField');

   const guseSlot = document.querySelector('.guesses');
   const remaining = document.querySelector('.lastResult');

   const lowOrHi = document.querySelector('.lowOrHi');
   const startOver = document.querySelector('.resultParas');

   const p = document.createElement('p');

   let prevGuess = []
   let numGuess = 1

   let playGame = true

   if(playGame) {
    submit.addEventListener('click', (e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
   }

     function validateGuess(guess) {
        
        if(isNaN(guess)) {
            alert('Plase enter valid number ')
        } else if (guess < 1) {
            alert('plase enter value more than 1')
        } else if (guess > 100) {
            alert('plase enter value less than 100')
        } else {
            prevGuess.push(guess);
            if(numGuess === 11) {
                displayGuess(guess);
                displayMassage(`Game over. Random Number was ${randamNum}`)
                endGame();
             } else {
                displayGuess(guess);
                checkGuess(guess);
             }
        }


     }

   function checkGuess(guess){

    if(guess === randamNum) {
        displayMassage('You guessed it Right')
        endGame()
    } else if (guess < randamNum){
        displayMassage('Number is TOO Low')
    } else if(guess > randamNum){
        displayMassage('Number is TOO High')

    }


   }

   function displayGuess(guess) {
     
    userInput.value = ''
    guseSlot.innerHTML += `${guess} , `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`

   }

   function displayMassage(massage){
    lowOrHi.innerHTML = `<h2>${massage}</h2>`

   }

   function  endGame() {
    userInput.innerHTML = ``
    userInput.setAttribute('disabled', '');
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame"'>Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame();
   }


   function newGame() {
   const newGameButton = document.querySelector('#newGame');
   newGameButton.addEventListener('click' , (e)=> {
    randamNum = Math.round( (Math.random() * 99) + 1);
     prevGuess = []
     numGuess = 1
     guseSlot.innerHTML = ''
     remaining.innerHTML =`${11 - numGuess}`
     userInput.removeAttribute('disabled')
     startOver.removeChild(p)
     playGame = true
     displayMassage(`New Game`)
       })       
   }
    


   


   



