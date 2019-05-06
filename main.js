/*----- constants -----*/
const start = document.getElementById('start')

const path1 = document.getElementById('path1')

const path2 = document.getElementById('path2')

const prepper = document.getElementById('prepper')

const normie = document.getElementById('normie')

const scenario = document.getElementById('scenario')

const tryAgain = document.getElementById('try_again')

const gameWin = [1, 0, 1]

/*----- app's state (variables) -----*/
let clickR = 0
let clickL = 0
let gamePlay = []

/*----- cached element references -----*/

/*----- event listeners -----*/
start.addEventListener('click', characterChoice)

prepper.addEventListener('click', gameScreen)

normie.addEventListener('click', gameScreen)

path1.addEventListener('click', leftPath)

path2.addEventListener('click', rightPath)

tryAgain.addEventListener('click', characterChoice)

/*----- functions -----*/
//win game
function winGame() {
console.log('you win!')    
}


//lose game
function loseGame() {
    $('.paths').fadeOut(2000);
    $('background-image').fadeOut(2000);
    setTimeout(() => {
        $('.lose').css('visibility', 'visible').fadeIn()
    }, 2000);
}


//checks for win or lose
function checkStatus() {
    if (gamePlay.join('') === gameWin.join('')) {
        winGame()
    } else if (clickR === 3) {
        loseGame()
    } else if (clickL === 3) {
        loseGame()
    }
}

//chooses right path, adds text and increments click count
function leftPath () {
    clickL = clickL + 1;
    console.log(clickL)

    gamePlay.push(0)

    setTimeout(() => {
      scenario.innerHTML = 'testing testing testing paragraph';
      path1.innerHTML = 'new';
      path2.innerHTML = 'new';
    }, 1000);
    $('scenario').fadeIn(2000);

    checkStatus()
}

//chooses right path, adds text and increments click count
function rightPath() {
    clickR = clickR + 1;
    console.log(clickR)

    gamePlay.push(1)
    
    setTimeout(() => {
        scenario.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        path1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
        path2.innerHTML = 'Lorem ipsum dolor sit amet';
    }, 1000);
    $('scenario').fadeIn(2000)

    checkStatus()
}

//initializes prepper game
function initPrepper() {
    let supplies = {
        car: ['', ''],
        weapon: ['']
    }
    console.log("let's play prepper style")
}

//initializes normie game
function initNormie() {
    let supplies = {
        car: ['', ''],
        weapon: ['']
    }
    console.log("let's play normie style")
}

//hides character choices, shows game screen, chooses init status
function gameScreen() {
    $(".character-choice").fadeOut(1000);
    $("header").fadeOut(1000);
    $(".paths").css('visibility', 'visible').fadeIn(2000);
    if (this === normie) {
        initNormie()
    }
    else if (this === prepper) {
        initPrepper()
    }
}

//hides menu, displays character choices
function characterChoice() {
    $(".menu").fadeOut(1000);
    setTimeout(() => {
        $(".character-choice").css('visibility', 'visible').fadeIn(2000)
    }, 1000);;
        }
