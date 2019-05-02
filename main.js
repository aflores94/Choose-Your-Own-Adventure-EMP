/*----- constants -----*/
const start = document.getElementById('menu')

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
function initPrepper() {
    console.log('clicked')
}

function initNormie() {
    console.log('clicked')
}

function leftPath () {
    console.log('clicked')
}

function rightPath() {
    console.log('clicked')
}

function characterChoice() {
    console.log('clicked')
}