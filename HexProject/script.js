const hexagonElements = document.querySelectorAll('[data-hexagon]');
const player1Element = document.querySelector('[data-player1]');
const player2Element = document.querySelector('[data-player2]');
let blueTurn;
const BLUE_CLASS = "blue";
const RED_CLASS = "red";
//const elapsedTimeText = document.getElementsByClassName("timeelapsed");


start()

//swap rule

function start() {
    blueTurn = false;
    //alert("The game has started!");
    player1Element.classList.add("turn");
    //stopwatch
    hexagonElements.forEach(hexagon => {
        hexagon.addEventListener("click", handleClick, {once: true})
    });
}

function handleClick(e) {
    console.log("clicked");
    const hexagon = e.target;
    const currentClass = blueTurn ? BLUE_CLASS : RED_CLASS;
    placeMark(hexagon, currentClass);
    //check win
    swapTurns();
    swapText();
}

var stopWatch = ( function() {

    /* private members */
    let seconds = 0;
    let minutes = 0;
    const elapsedTimeText = document.querySelector("[timeelapsed]");
     
    return {
        start : function(){
            console.log(seconds)
            setInterval (handleTime(),1000)
        },
        handleTime : function(){
            seconds ++;
            if (seconds === 60){
                minutes ++;
                seconds = 0;
                elapsedTimeText.innerText = minutes + ':' + seconds;
            }
            
        }
    }
})();

function placeMark(hexagon, currentClass){
    hexagon.classList.add(currentClass);
}

function swapTurns() {
    blueTurn = !blueTurn;
}

function swapText() {
    if (blueTurn){
        player1Element.classList.remove("turn");
        player2Element.classList.add("turn");
    } else {
        player2Element.classList.remove("turn");
        player1Element.classList.add("turn");
    }
}