function showWorldClock(){
    const clockTime = document.getElementById('content');

    Content.innerHTML = ` 
    <h2>World Clock</h2>
    <P>select a timezone</P>
    <select id="timezone">
    <option Value='America/New_york'>New York<option>
    <option Value ='Europe/London'>London<option>
    </select>
    <p id="world-clock"
    `
}