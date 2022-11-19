let run = false;
let timerMillis = 0;
const startBtn = document.getElementById('start_button');
const stopBtn = document.getElementById('stop_button');
const resetBtn = document.getElementById('reset_button');

const runTimer = () => {
    if (run) {
      const maxTime = 1000;
      timerMillis++;
      if (timerMillis >= maxTime) {
        timerMillis = 0;
      }
      const ten = 10;
      const oneHundred = 100;
      let timer;
      if (timerMillis < ten) {
        timer = `00${timerMillis}`;
      } else if (timerMillis < oneHundred) {
        timer = `0${timerMillis}`;
      } else {
        timer = `${timerMillis}`;
      }
      document.getElementById('milli_seconds').innerHTML = timer;
      setTimeout(runTimer, ten);
    }
  };

startBtn.addEventListener('click', () => {
  run = true;
  runTimer();
});

stopBtn.addEventListener('click', () => {
  run = false;
});

resetBtn.addEventListener('click', () => {
  run = false;
  timerMillis = 0;
  document.getElementById('milli_seconds').innerHTML = '000';
});
