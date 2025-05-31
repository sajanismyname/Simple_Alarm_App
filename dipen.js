
    function showWorldClock() {
  const content = document.getElementById('content');
  content.innerHTML = `
    <h2>World Clock</h2>
    <p>Select a timezone:</p>
    <select id="timezone">
      <option value="America/New_York">New York</option>
      <option value="Europe/London">London</option>
      <option value="Asia/Tokyo">Tokyo</option>
    </select>
    <p id="world-clock-time"></p>
  `;
  updateWorldClock();
  setInterval(updateWorldClock, 1000);
}

    function updateWorldClock() {
  const timezone = document.getElementById('timezone').value;
  const now = new Date().toLocaleString('en-US', { timeZone: timezone });
  document.getElementById('world-clock-time').textContent = now;
}


    function showSetAlarm() {
  const content = document.getElementById('content');
  content.innerHTML = `
  <div class="alarm-container">
    <h2>Set Alarm</h2>
    <div class="alarm=controls">
    <input type="time" id="alarm-time" />
    <button onclick="setAlarm()">Set Alarm</button>
    </div>
    <ul id="alarm-list"></ul>
    </div>
  `;
}

  function setAlarm() {
  const alarmTime = document.getElementById('alarm-time').value; 
  if (!alarmTime) {
    alert('Please select a time for the alarm.');
    return;
  }
  const alarmList = document.getElementById('alarm-list');
  const alarmItem = document.createElement('li');
  alarmItem.textContent = `Alarm set for ${alarmTime}`;
  alarmList.appendChild(alarmItem);
  }
  let alarmSet = false;

    function showAlarm(){
    const alarmTime = document.getElementById('alarm-time').value;
    if(alarmTime){
      
      alert(`Alarm set for ${alarmTime}`);
    }

    setInterval(() => {
      if (alarmSet && alarmTime) {
        const now = new Date();
        const currentTime = now.toTimeString().slice(0, 5); 
        if (currentTime === alarmTime) {
          alert("⏰ Alarm! Time's up!");
          alarmSet = false; 
        }
      }
    }, 1000); 

    }


    let stopwatchInterval;
    let displayInterval;
    let startTime;
    let elapsedTime = 0;
    let running = false;
    let fakeMilliseconds = 0;

    function showStopwatch() {
      const content = document.getElementById('content');
      content.innerHTML = `
        <h2>StopWatch:</h2>
        <p id="stopwatch-time">00:00:00.000</p>
        <div id="button-group">        <button id="start" onclick="startStopwatch()">Start</button>
        <button id="stop" onclick="stopStopwatch()">Stop</button>
        <button id="reset" onclick="resetStopwatch()">Reset</button>
        </div>
      `;
    }

    function updateDisplay(secondsOnly) {
      const timeElement = document.getElementById('stopwatch-time');
      const hours = String(Math.floor(secondsOnly / 3600000)).padStart(2, '0');
      const minutes = String(Math.floor((secondsOnly % 3600000) / 60000)).padStart(2, '0');
      const seconds = String(Math.floor((secondsOnly % 60000) / 1000)).padStart(2, '0');
      const milliseconds = String(fakeMilliseconds).padStart(3, '0');
      timeElement.textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
    }

    function startStopwatch() {
      if (!running) {
        running = true;
        startTime = Date.now() - elapsedTime;

        
        stopwatchInterval = setInterval(() => {
          elapsedTime = Date.now() - startTime;
        }, 100);
        
        displayInterval = setInterval(() => {
          fakeMilliseconds += 80; 
          if (fakeMilliseconds >= 1000) fakeMilliseconds = 0;
          updateDisplay(elapsedTime);
        }, 15); 
      }
    }

    function stopStopwatch() {
      if (running) {
        clearInterval(stopwatchInterval);
        clearInterval(displayInterval);
        running = false;
      }
    }

    function resetStopwatch() {
      stopStopwatch();
      elapsedTime = 0;
      fakeMilliseconds = 0;
      updateDisplay(0);
    }


function showNormalWatch() {
  const content = document.getElementById('content');
  content.innerHTML = `
    <h2>Normal Watch</h2>
    <p>TimeZone:Kathmandu</p>
    <p id="normal-watch-time"></p>
  `;
  updateNormalWatch();
  setInterval(updateNormalWatch, 1000);
}

function updateNormalWatch() {
      const now = new Date();
      const timeString = now.toLocaleTimeString();
      document.getElementById('normal-watch-time').textContent = timeString;
    }

window.onload = function () {
  showNormalWatch(); 
};
