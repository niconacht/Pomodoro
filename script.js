//timer circle is based on code by Mateusz Rybczonec: https://codepen.io/geoffgraham/pen/yLywVbW?editors=1010

let COLOR_CODES = {
    info: {
        color: "green"
    }
};
const FULL_DASH_ARRAY = 283;
const TIME_LIMIT = 1200;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timeInterval = null;
let remainingPathColor = COLOR_CODES.info.color;


const span = document.getElementById("base-timer-label");
 span.innerHTML = `${formatTime(timeLeft)}`;

 const path = document.getElementById("base-timer-path-remaining");
 path.classList.add = "base-timer__path-remaining ${remainingPathColor}";

const startButton = document.getElementById("start");
startButton.addEventListener("click", startTimer);

const stopButton = document.getElementById("stop");
stopButton.addEventListener("click", stopTimer);


function formatTime(time) {
    //the largest round integer less than or equal to the result of time divided by 60
    const minutes = Math.floor(time/60);

    //seconds are the reaminders of the time divided by 60(modulus operator)
    let seconds = time % 60;

    // if the value of seconds is less than 10, then display seconds with a leading zero

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    //output in MM:SS format
    return `${minutes}:${seconds}`;
}


function startTimer() {
    timerInterval = setInterval(() =>{
        //amount of time passed increments by one
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed;

        //update time-left label
        document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
        setCircleDasharray();
    }, 1000);
}


function stopTimer(){
    location.reload();
}


// What fraction of initial time is left
function calculateTimeFraction(){
    return timeLeft/TIME_LIMIT;
}


// Update  dasharray value as time passes, starting with 283
function setCircleDasharray(){
    const circleDasharray = `${(
        calculateTimeFraction() * FULL_DASH_ARRAY).toFixed(0)}  283`;
        document
        .getElementById("base-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray);
}
