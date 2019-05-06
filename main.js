/*----- constants -----*/
const start = document.getElementById('start')

const path1 = document.getElementById('path1')

const path2 = document.getElementById('path2')

const prepper = document.getElementById('prepper')

const normie = document.getElementById('normie')

const scenario = document.getElementById('scenario')

const tryAgain = document.getElementById('try_again')

const endGame = document.getElementById('end_game')

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

tryAgain.addEventListener('click', startOver)

endGame.addEventListener('click', init)

/*----- functions -----*/
init()

//win game
function winGame() {
    $('.paths').fadeOut(2000)
setTimeout(() => {
    $('.win').fadeIn(1000)
}, 2000);
}

//try again 
function startOver(){
    $('.lose').fadeOut(1000)
    characterChoice()
}

//lose game
function loseGame() {

    $('background-image').fadeOut(2000);
    setTimeout(() => {
        $('.lose').fadeIn()
    }, 2000);
}


//checks for win or lose
function checkStatus() {
    if (gamePlay.join('') === gameWin.join('')) {
       winGame()
    } else if (clickR === 3) {
        $('.paths').fadeOut(2000);
        loseGame()
    } else if (clickL === 3) {
        $('.paths').fadeOut(2000);
        loseGame()
    }
}

//chooses right path, adds text and increments click count
function leftPath () {
    clickL = clickL + 1;
    console.log(clickL)

    gamePlay.push(0)

    checkStatus()

    setTimeout(() => {
      scenario.innerHTML = 'testing testing testing paragraph';
      path1.innerHTML = 'new';
      path2.innerHTML = 'new';
    }, 1000);
    $('scenario').fadeIn(2000);
}

//chooses right path, adds text and increments click count
function rightPath() {
    clickR = clickR + 1;
    console.log(clickR)

    gamePlay.push(1)
    
    checkStatus()
 
    setTimeout(() => {
        scenario.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        path1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
        path2.innerHTML = 'Lorem ipsum dolor sit amet';
    }, 1000);
    $('scenario').fadeIn(2000)
}

//initializes prepper game
function initPrepper() {
    scenario.innerHTML = "You're at work. Suddenly the power goes out. You check your phone. It doesn't work. You get up to say something to your coworker. You hear a loud boom and see an explosion in the distance.";
    path1.innerHTML = "Stay put. You don't want to risk leaving when you don't know what's going on.";
    path2.innerHTML = "Leave now. You'll be safer at home.";
    let supplies = {
        car: ['', ''],
        weapon: ['']
    }
}

//initializes normie game
function initNormie() {
    scenario.innerHTML = "You're at work. Suddenly the power goes out. You check your phone. It doesn't work. You get up to say something to your coworker. You hear a loud boom and see an explosion in the distance.";
    path1.innerHTML = "Stay put. You don't want to risk leaving when you don't know what's going on.";
    path2.innerHTML = "Leave now. You'll be safer at home.";
    let supplies = {
        car: ['', ''],
        weapon: ['']
    }
}

//hides character choices, shows game screen, chooses init status
function gameScreen() {
    $(".character-choice").fadeOut(1000);
    $("header").fadeOut(1000);
    setTimeout(() => {
        $(".paths").fadeIn(2000);
    if (this === normie) {
        initNormie()
    }
    else if (this === prepper) {
        initPrepper()
    }
    }, 1000);;
}

//hides menu, displays character choices
function characterChoice() {
    $(".menu").fadeOut(1000);
    $('header').fadeOut(1000);
    setTimeout(() => {
        $(".character-choice").fadeIn(1000)
    }, 1000);;
}
    

function init(){
    $('.character-choice').fadeOut(0)
    $('.paths').fadeOut(0)
    $('.lose').fadeOut(0)
    $('.win').fadeOut(0)
    $('header').fadeIn(1000)
    $('.menu').fadeIn(1000)
}