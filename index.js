let run = false;
let timerMillis = 0;
let timerSecs = 0;
const startBtn = document.getElementById('start_button');
const stopBtn = document.getElementById('stop_button');
const resetBtn = document.getElementById('reset_button');

const runTimer = () => {
    if (run) {
      const maxTime = 1000;
      const min = 60;
      const ten = 10;
      const one = 1;
      const oneHundred = 100;
      let timer;
      let secs;

      timerMillis+=10;
      if (timerMillis >= maxTime) {
        timerMillis = 0;
        timerSecs++;
      }

      if (timerSecs >= min) {
        timerSecs = 0;
      }

      if (timerMillis < ten) {
        timer = `00${timerMillis}`;
      } else if (timerMillis < oneHundred) {
        timer = `0${timerMillis}`;
      } else {
        timer = `${timerMillis}`;
      }

      if (timerSecs < ten) {
        secs = `0${timerSecs}`;
      }
      else {
        secs = `${timerSecs}`;
      }

      document.getElementById('milli_seconds').innerHTML = timer;
      document.getElementById('seconds').innerHTML = secs;

      setTimeout(runTimer, one);
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
  timerMillis = 0;
  document.getElementById('milli_seconds').innerHTML = '000';
  document.getElementById('seconds').innerHTML = '00';
});
