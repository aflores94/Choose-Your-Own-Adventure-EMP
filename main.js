/*----- constants -----*/
const start = document.getElementById('start')

const path1 = document.getElementById('path1')

const path2 = document.getElementById('path2')

const prepper = document.getElementById('prepper')

const normie = document.getElementById('normie')

const scenario = document.getElementById('scenario')

/*----- app's state (variables) -----*/

/*----- cached element references -----*/

/*----- event listeners -----*/
start.addEventListener('click', characterChoice)

prepper.addEventListener('click', gameScreen)

normie.addEventListener('click', gameScreen)

path1.addEventListener('click', leftPath)

path2.addEventListener('click', rightPath)

/*----- functions -----*/

//chooses path 
function leftPath () {
    setTimeout(() => {
      scenario.innerHTML = 'testing testing testing paragraph';
      path1.innerHTML = 'new';
      path2.innerHTML = 'new';
    }, 1000);
    $('scenario').fadeIn(2000)
}


//chooses path
function rightPath() {
    setTimeout(() => {
        scenario.innerHTML = 'testing testing testing paragraph2';
        path1.innerHTML = 'new2';
        path2.innerHTML = 'new2';
    }, 1000);
    $('scenario').fadeIn(2000)
}

//initializes prepper game
function initPrepper() {
    let supplies = {
        car: ['bicycle', 'bug out bag'],
        weapon: ['pistol']
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
