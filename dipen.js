// Function to show World Clock
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

// Function to show Set Alarm
function showSetAlarm() {
  const content = document.getElementById('content');
  content.innerHTML = `
    <h2>Set Alarm</h2>
    <input type="time" id="alarm-time" />
    <button onclick="setAlarm()">Set Alarm</button>
    <ul id="alarm-list"></ul>
  `;
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
        <button onclick="startStopwatch()">Start</button>
        <button onclick="stopStopwatch()">Stop</button>
        <button onclick="resetStopwatch()">Reset</button>
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

        // Real time updater
        stopwatchInterval = setInterval(() => {
          elapsedTime = Date.now() - startTime;
        }, 100); // update real time every 100ms (not critical)

        // Fake millisecond spinner
        displayInterval = setInterval(() => {
          fakeMilliseconds += 80; // spin quickly!
          if (fakeMilliseconds >= 1000) fakeMilliseconds = 0;
          updateDisplay(elapsedTime);
        }, 15); // refresh display very fast
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

// Function to show Normal Watch
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
  showNormalWatch(); // Show normal clock by default
};
