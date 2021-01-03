const hexagonElements = document.querySelectorAll('[data-hexagon]');
const turnElement = document.querySelector('[data-turn]');
var audio = document.getElementById('sound');
var elapsedTimeText = document.getElementById('timeelapsed');
let turn;
const BLUE_CLASS = "blue";
const RED_CLASS = "red";
//just for testing; this may be blue in practice, and it will be const
var player = 'red';
//const elapsedTimeText = document.getElementsByClassName("timeelapsed");


start()

//swap rule

function start() {
    //alert("The game has started!");
    if (player === 'red'){
        turn = true;
        turnElement.classList.add(player);
        turnElement.classList.add('yes');
    } else {
        turn = false;
        turnElement.classList.add(player);
    }

    measureTime();

    //should not be at start i think?? 
    //It should check if it is turn constantly and stop allowing click
    if (turn) {
        hexagonElements.forEach(hexagon => {
        hexagon.addEventListener("click", handleClick, {once: true})
        });
    }
}

function handleClick(e) {
    audio.play();
    e.target.classList.add(player)
    //check win
    swapTurns();
    swapText();
}

function swapTurns() {
    //turn = !turn; 

    //remove later; this is for testing
    turnElement.classList.remove('yes');
    turnElement.classList.remove(player);
    if (player === 'red') {
       player = 'blue';
    } else {
        player = 'red';
    }
    turnElement.classList.add(player);
}

function swapText() {
    turnElement.classList.toggle("yes");
}

function measureTime() {
    startTime = performance.now();
    timerInterval = setInterval(function printTime() {
    elapsedTime = performance.now() - startTime;
    elapsedTimeText.innerText = timeToString(elapsedTime);
    }, 1000);
}

function timeToString(time) {

    time /= 1000;
    let ss = Math.floor(time%60);
    time -= ss;
    let mm = Math.floor(time/60);

    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
  
    return formattedMM.toString() + ':' + formattedSS.toString();
}

