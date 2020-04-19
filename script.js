
function formatTimeLeft(time) {
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

//Starting Value:
const TIME_LIMIT = 1200;

// Initially, no time has passed, but this will count up
// and subtract from the TIME_LIMIT
let timePassed = 0;
let timeLeft = TIME_LIMIT;

let timeInterval = null;

const span = document.getElementById("base-timer-label");
//const span = container.getElementById("base-timer-label");
 span.innerHTML = `${formatTimeLeft(timeLeft)}`;





// const startButton = document.getElementById("start");
// startButton.addEventHandler("click", );





//reset startButton
//stop button (mainly does the same thing)

// function startPomodoro(e){
//   //count down 25 min
//
//   //show countdown in display as timeout
//   //show countdown as emptying circle
//   //show "5 min break" on display
//   //count down 5 minutes
//   //blink 15 secs if 5 minutes are over (noise?)
//   //restart counter
//
// }
//
// function countDown(minutes){}
//
// function blink15(){}
//
// function startOver(){}
//
// function takeBreak(){}
//
//
// function showCircle(){}
