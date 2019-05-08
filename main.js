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

const gameLoss = [0, 0, 0]

/*----- app's state (variables) -----*/
let clickR = 0
let clickL = 0
let currentArray = []
let pathState = [clickL, clickR]
let gamePlay = '00'
let supplies = {}

/*----- cached element references -----*/

/*----- event listeners -----*/
start.addEventListener('click', characterChoice)

prepper.addEventListener('click', gameScreen)

normie.addEventListener('click', gameScreen)

path1.addEventListener('click', leftPath)

path2.addEventListener('click', rightPath)

try_again.addEventListener('click', redo)

endGame.addEventListener('click', startOver)

/*----- functions -----*/
init()

//win game
function winGame() {
    setTimeout(() => {
    $('.paths').fadeOut(500)
    }, 1000);

    setTimeout(() => {
        $('.win').fadeIn(1000)
    }, 1000);
}

//start over 
function startOver() {
    $('.lose').fadeOut(1000)
    setTimeout(() => {
        currentArray = []
        gamePlay = '00'
        init()
    }, 1000);
}

//try again 
function redo(){
    $('.lose').fadeOut(1000)
    currentArray.pop()
    // gamePlay = gamePlay - the last thing modified
    pushText()
}

//lose game
function loseGame() {
    $('.paths').fadeOut(1000)
    setTimeout(() => {
        $('.lose').fadeIn(1000)
    }, 2000);
}

//checks for win or lose
function checkStatus() {
    if (currentArray.join('') === gameWin.join('')) {
        winGame()
    } else if (currentArray.join('') === gameLoss.join('')) {
        loseGame()
    // } else if ( healthPoints <= 0) {
    //     loseGame()
    }
}

// function health() {
//     if (gamePlay === '') {
//     let healthPoints = healthPoints - 1
// }

//game play 
function pushText() {
    $('.paths').fadeOut(1000);

    checkStatus()

    if (currentArray.join('') === gameWin.join('')) {
        return
    } else if (currentArray.join('') === gameLoss.join('')) {
        return
    }

    setTimeout(() => {
    switch (gamePlay) {
        case '00':
            scenario.innerHTML = "You're at work. Suddenly the power goes out. You check your phone. It doesn't work. You get up to say something to your coworker. You hear a loud boom and see an explosion in the distance.";
            path1.innerHTML = "Stay put. You don't want to risk leaving when you don't know what's going on.";
            path2.innerHTML = "Leave now. You'll be safer at home.";
            break;
        case '10':
            scenario.innerHTML = "It's getting dark."
            path1.innerHTML = ""
            path2.innerHTML = "Go home. You can't wait any longer." 
            break;
        case '01': case '11':
            scenario.innerHTML = "You grab your bag and head down to your " + supplies.car + '. You start to walk.';
            path1.innerHTML = ""
            path2.innerHTML = "Continue";
            break;
        case '02': case '12':
            scenario.innerHTML = "As you walk you start to see crazy things. Something is very wrong.";
            path1.innerHTML = "Turn around";
            path2.innerHTML = "Go faster";
            break;
        case '03': case '13':
            scenario.innerHTML = "Home is still almost 10 miles away. You're getting thirsty. There is a gas station up ahead but it seems chaotic inside.";
            path1.innerHTML = "Stop and get water.";
            path2.innerHTML = "Keep going";
            break;
        }
    }, 1000);

    setTimeout(() => {
        $('.paths').fadeIn(1000);
    }, 1000);
}

//chooses right path, adds text and increments click count
function leftPath () {
    clickL = clickL + 1;
    pathState.splice(0, 1, clickL)
    gamePlay = pathState.join('')

    currentArray.push(0)

    pushText()
}

//chooses right path, adds text and increments click count
function rightPath() {
    clickR = clickR + 1;
    pathState.splice(1, 1, clickR)
    gamePlay = pathState.join('')

    currentArray.push(1)

    pushText()
}

//initializes prepper game
function initPrepper() {
    pushText()
    supplies.car = 'truck'
    supplies.weapon = 'gun'
}

//initializes normie game
function initNormie() {
    pushText()
    supplies.car = 'prius'
    supplies.weapon = 'none'
}

//hides character choices, shows game screen, chooses character status
function gameScreen() {
    $(".character-choice").fadeOut(1000);
    $("header").fadeOut(1000);
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
    $('header').fadeOut(1000);
    setTimeout(() => {
        $(".character-choice").fadeIn(1000)
    }, 1000);;
}
    
//initialize menu screen 
function init(){
    $('.character-choice').fadeOut(0)
    $('.paths').fadeOut(0)
    $('.lose').fadeOut(0)
    $('.win').fadeOut(0)
    $('header').fadeIn(1000)
    $('.menu').fadeIn(1000)
}