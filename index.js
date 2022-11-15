

function clicked(id) {
    let amount = prompt("How Long Would You Like To Set Your Timer")

    amount = parseFloat(amount) * 60
    let display = document.querySelector('#time')
    for (let i = 0; i < 1; i ++) {
        startTimer(amount, display)
    }

}

function startTimer(duration, display) {
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

function sendEmail(email) {

}
