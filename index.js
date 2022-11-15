

function clicked(id) {
    /**
     * Function that runs when button is clicked that gets total amount of time user wants to wait for, calls startTimer to start countdown
     * :param id: The ID of the button that is clickdd
     */
    let amount = prompt("How Long Would You Like To Set Your Timer") 
    amount = parseFloat(amount) * 60
    let display = document.querySelector('#time')
    for (let i = 0; i < 1; i ++) {
        startTimer(amount, display)
    }

}

function startTimer(duration, display) {
    /**
     * Function that starts a count down timer based on users duration
     * :param duration: amount of mintutes user wants to set timer for
     * :param display: Query where we want to place text
     */
    var start = Date.now(),
        diff,
        minutes,
        seconds;

    function timer() {
        // get the number of seconds that have elapsed since
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        }

        if (minutes === '00') {
            if (seconds === '00') {
                alert('This is when we are going to email them a reminder');
                window.location.reload()
            }
        }

    };
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
}

// TODO: Write function that sends email to user specified email when timer reads zero
function sendEmail(email) {

}

// This is where im going to edit the color of image based on timer percentage
const xCoord = 1;
const yCoord = 1;
const canvasWidth  = document.getElementById('fireicon').offsetWidth;

console.log(canvasWidth)