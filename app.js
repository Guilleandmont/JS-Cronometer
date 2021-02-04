

let chronometer = document.querySelector(".chronometer");
let button = document.querySelector(".start-btn");

function timer() { 
    let seconds = "00";
    let minutes = "00";
    let hours = "00"; // Set times as variables, so we can use them in string literals.
    setInterval(() => {
        chronometer.textContent = `${hours}:${minutes}:${seconds}`;
        seconds++;
        if (parseInt(seconds) < 10){ //Add 0 to the number of seconds when < 10, to preserve the time format.
            seconds = "0" + seconds;
        }
        if (seconds == 60){ //When 60, seconds are reset to 0 and minutes are incremented.
            minutes++; 
            seconds = "00";
            if (parseInt(minutes) < 10){ //Add 0 to the number of minutes when < 10.
                minutes = "0" + minutes;
            }
        }
        if (minutes == 60){ //When 60, minutes are reset to 0 and hours are incremented.
            hours++;
            minutes = "00";
            if (parseInt(hours) < 10){ //Add 0 to the number of hours when < 10.
                hours = "0" + hours;
            }
        } 
        }, 1000); //setInterval takes milliseconds as its second argument. In short, the function is repeated every 1000 milliseconds (or every second.)
}

button.addEventListener("click", () => timer());

//To do
//Improve the code. Too many if statements!
//Add a stop function. 
 
 