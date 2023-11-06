var currentInterval = null; // To keep track of the interval

function startTimer(duration) {
    var timer = duration, minutes, seconds;
    var display = document.getElementById('countdownDisplay');
    
    // Clear any existing timers
    clearInterval(currentInterval);
    
    currentInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(currentInterval); // Clear the interval to stop the timer
            var breaths = Math.floor(duration / 4); // Calculate the number of breaths
            alert('Congrats! You just contributed ' + breaths + ' breaths to our mindfulness mission.'); // Notify the user
            display.textContent = ''; // Optionally reset the display or show some final text
        }
    }, 1000);
}
