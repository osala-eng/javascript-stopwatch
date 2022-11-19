let run = false
let timerMillis = 0;
let startBtn = document.getElementById("start_button");
let stopBtn = document.getElementById("stop_button");
let resetBtn = document.getElementById("reset_button");

startBtn.addEventListener("click", () => {
    run = true;
    runTimer();
});

stopBtn.addEventListener("click", () => {
    run = false;
});

resetBtn.addEventListener("click", () => {
    run = false;
    timerMillis = 0;
    document.getElementById("milli_seconds").innerHTML = "000"
})

function runTimer() {
    if (run) {
        timerMillis++;
        if (timerMillis >= 1000) {
            timerMillis = 0
        }

        let timer = timerMillis < 10 ? `00${timerMillis}` : timerMillis < 100 ?
            `0${timerMillis}` : `${timerMillis}`;

        document.getElementById("milli_seconds").innerHTML = timer;
        setTimeout(runTimer, 10)
    }
}