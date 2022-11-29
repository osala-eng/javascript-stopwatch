let run = false;
let timerMillis = 0;
let timerSecs = 0;
let [timerMins, timerHrs] = [0, 0];
const startBtn = document.getElementById('start_button');
const stopBtn = document.getElementById('stop_button');
const resetBtn = document.getElementById('reset_button');
const spinnerObj =  document.getElementById('spinner');

const runTimer = () => {
    if (run) {
      const maxTime = 1000;
      const min = 60;
      const ten = 10;
      const one = 1;
      const day = 24;
      const oneHundred = 100;
      let timer;
      let secs;
      let mins;
      let hrs;

      timerMillis+=6;
      if (timerMillis >= maxTime) {
        timerMillis = 0;
        timerSecs++;
      }

      if (timerSecs >= min) {
        timerSecs = 0;
        timerMins++;
      }

      if (timerMins >= min){
        timerMins = 0;
        timerHrs++;
      }

      if (timerHrs >= day){
        timerHrs = 0;
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

      if (timerMins < ten) {
        mins = `0${timerMins}`;
      }
      else {
        mins = `${timerMins}`;
      }

      if (timerHrs < ten) {
        hrs = `0${timerHrs}`;
      }
      else {
        hrs = `${timerHrs}`;
      }

      document.getElementById('milli_seconds').innerHTML = timer;
      document.getElementById('seconds').innerHTML = secs;
      document.getElementById('minutes').innerHTML = mins;
      document.getElementById('hours').innerHTML = hrs;

      setTimeout(runTimer, one);
    }
  };

startBtn.addEventListener('click', () => {
  spinnerObj.className = 'xspinner';
  spinnerObj.style.animationPlayState = 'running';
  run = true;
  runTimer();
});

stopBtn.addEventListener('click', () => {
  spinnerObj.style.animationPlayState = 'paused';
  run = false;
});

resetBtn.addEventListener('click', () => {
  run = false;
  timerMillis = 0;
  timerSecs = 0;
  timerHrs = 0;
  timerMins = 0;
  document.getElementById('milli_seconds').innerHTML = '000';
  document.getElementById('seconds').innerHTML = '00';
  document.getElementById('minutes').innerHTML = '00';
  document.getElementById('hours').innerHTML = '00';
  spinnerObj.className = 'reset-spinner';
});
