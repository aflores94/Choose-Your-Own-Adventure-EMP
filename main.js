/*----- constants -----*/
const start = document.getElementById('start')

const path1 = document.getElementById('path1')

const path2 = document.getElementById('path2')

const prepper = document.getElementById('prepper')

const normie = document.getElementById('normie')


/*----- app's state (variables) -----*/

/*----- cached element references -----*/

/*----- event listeners -----*/
start.addEventListener('click', characterChoice)

prepper.addEventListener('click', initPrepper)

normie.addEventListener('click', initNormie)

path1.addEventListener('click', leftPath)

path2.addEventListener('click', rightPath)

/*----- functions -----*/
//initialize game (path options appear)

function leftPath () {
    console.log('clicked')
}

function rightPath() {
    console.log('clicked')
}

function initPrepper() {
    $(".character-choice").fadeOut(1000);
    setTimeout(() => {
        $(".paths").css('display', 'grid').fadeIn(2000)
    }, 1000);;
}

function initNormie() {
    $(".character-choice").fadeOut(1000);
    setTimeout(() => {
        $(".paths").css('display', 'grid').fadeIn(2000)
    }, 1000);;
}

function characterChoice() {
    $(".menu").fadeOut(1000);
    setTimeout(() => {
    $(".character-choice").css('display', 'grid').fadeIn(2000)
    }, 1000);;
        }
