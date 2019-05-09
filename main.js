/*----- constants -----*/
const start = document.getElementById('start')

const path1 = document.getElementById('path1')

const path2 = document.getElementById('path2')

const prepper = document.getElementById('prepper')

const normie = document.getElementById('normie')

const scenario = document.getElementById('scenario')

const tryAgain = document.getElementById('try_again')

const endGame = document.getElementById('end_game')

const menu = document.getElementById('main_menu')

const gameWin = [
    [1, 1, 1, 1, 0, 0, 1, 1],
    [0, 1, 1, 1, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 1],
]
const gameLoss = [
    [1, 1, 1, 0],
    [0, 1, 1, 1, 0],
]

/*----- app's state (variables) -----*/
let currentArray = []
let supplies = {}

/*----- cached element references -----*/

/*----- event listeners -----*/
start.addEventListener('click', characterChoice)

prepper.addEventListener('click', gameScreen)

normie.addEventListener('click', gameScreen)

path1.addEventListener('click', leftPath)

path2.addEventListener('click', rightPath)

tryAgain.addEventListener('click', redo)

endGame.addEventListener('click', startOver)

menu.addEventListener('click', startOver)

/*----- functions -----*/
init()

//win game
function winGame() {
    $('.paths').fadeOut(1000)

    setTimeout(() => {
        $('.win').fadeIn(1000)
    }, 2000);
}


//end game
function startOver() {
    $('.lose').fadeOut(1000)
    setTimeout(() => {
        currentArray = []
        init()
    }, 1000);
}

//try again 
function redo() {
    $('.lose').fadeOut(1000)
    currentArray.pop()
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
    for (i = 0; i < gameWin.length; i++) {
        if (currentArray.join('') === gameWin[i].join('')) {
            winGame()
        }
    }
    for (i = 0; i < gameLoss.length; i++) {
        if (currentArray.join('') === gameLoss[i].join('')) {
            loseGame()
        }
    }
}

//game play 
function pushText() {
    $('.paths').fadeOut(1000);

    checkStatus()

    for (i = 0; i < gameWin.length; i++) {
        if (currentArray.join('') === gameWin[i].join('')) {
            return
        }
    }
    for (i = 0; i < gameLoss.length; i++) {
        if (currentArray.join('') === gameLoss[i].join('')) {
            return
        }
    }

    setTimeout(() => {
        switch (currentArray.join('')) {
            //at work
            case '':
                scenario.innerHTML = "You're at work. Suddenly the power goes out. You check your phone. It doesn't work. You get up to say something to your coworker. You hear a loud boom and see an explosion in the distance.";
                path1.innerHTML = "Stay put. You don't want to risk leaving when you don't know what's going on.";
                path2.innerHTML = "Leave now. You'll be safer at home.";
                break;
                //choose to stay
            case '0':
                scenario.innerHTML = "It's getting dark."
                path1.innerHTML = ""
                path2.innerHTML = "Go home. You can't wait any longer."
                break;
                //choose to leave
            case '1':
            case '01':
                scenario.innerHTML = "You get your bag and go down to your " + supplies.car + ".Your key doesn't work. Thank god for the manual back up! But the car won't start. You try it again.The manual key doesn't save you this time. Are you really about to walk home?"
                path1.innerHTML = ""
                path2.innerHTML = "Continue";
                break;
                //getting supplies from car
            case '11':
            case '011':
                scenario.innerHTML = "You " + supplies.supplies
                path1.innerHTML = ""
                path2.innerHTML = "Continue";
                break;
                //start to walk 
            case '111':
            case '0111':
                scenario.innerHTML = "As you walk you start to see crazy things. Something is very wrong.";
                path1.innerHTML = "Turn around";
                path2.innerHTML = "Go faster";
                break;
                //choose to turn around 
            case '1110':
            case '01110':
                scenario.innerHTML = "You go back to the office. A few people are still there hanging around. You wait a few hours and eventually the national guard arrives. They aren't letting people leave for their own safety."
                path1.innerHTML = ""
                path2.innerHTML = ""
                break;
                //choose to keep going 
            case '1111':
            case '01111':
                scenario.innerHTML = "Home is still 10 miles away, you're getting thirsty. You see a gas station up ahead.";
                path1.innerHTML = "Stop and get some water.";
                path2.innerHTML = "Keep going";
                break;
                //choose to go to gas station 
            case '11110':
            case '011110':
                scenario.innerHTML = "It's chaotic inside. There are five people crowded around the register. It isn't working and neither is the ATM. People are darting in and out.";
                path1.innerHTML = "Toss a $5 on the counter and get out";
                path2.innerHTML = "Leave with nothing";
                break;
                //choose to take water
            case '111100':
            case '0111100':
                scenario.innerHTML = "You hear a shout from behind you.";
                path1.innerHTML = ""
                path2.innerHTML = "Run";
                break;
                //you make it out of the gas station
            case '1111001':
            case '01111001':
                scenario.innerHTML = "You made it out";
                path1.innerHTML = ""
                path2.innerHTML = "Continue";
                break;
                //choose to not get water
            case '11111':
            case '011111':
            case '111101':
                scenario.innerHTML = "You're parched but you keep going. You're almost there.";
                path1.innerHTML = ""
                path2.innerHTML = "Continue";
                break;
                //make it home 
            case '11110011':
            case '01111001':
            case '111111':
            case '0111111':
            case '1111011':
                scenario.innerHTML = "It's " + supplies.homeTime + " you made it home.";
                path1.innerHTML = ""
                path2.innerHTML = ""
                break;
        }
    }, 1000);

    setTimeout(() => {
        $('.paths').fadeIn(1000);
    }, 1000);
}

//chooses right path, adds text and increments click count
function leftPath() {
    currentArray.push(0)
    pushText()
}

//chooses right path, adds text and increments click count
function rightPath() {
    currentArray.push(1)
    pushText()
}

//initializes prepper game
function initPrepper() {
    pushText()
    supplies.supplies = 'go around to the trunk for your bug out bag and foldable bike'
    supplies.car = 'truck'
    supplies.homeTime = '9pm but'
}

//initializes normie game
function initNormie() {
    pushText()
    supplies.supplies = 'search through your car for anything useful. Some tic-tacs and a half empty water bottle. Fantastic.'
    supplies.car = 'prius'
    supplies.homeTime = '2pm.'
}

//hides character choices, shows game screen, chooses character status
function gameScreen() {
    $(".character-choice").fadeOut(1000);
    $("header").fadeOut(1000);
    if (this === normie) {
        initNormie()
    } else if (this === prepper) {
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
function init() {
    $('.character-choice').fadeOut(0)
    $('.paths').fadeOut(0)
    $('.lose').fadeOut(0)
    $('.win').fadeOut(0)
    $('header').fadeIn(1000)
    $('.menu').fadeIn(1000)
}