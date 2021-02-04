

let cronometer = document.querySelector(".cronometer");
let button = document.querySelector(".start-btn");

function timer() { 
    let seconds = "00";
    let minutes = "00";
    let hours = "00";
    setInterval(() => {
        cronometer.textContent = `${hours}:${minutes}:${seconds}`;
        seconds++;
        if (parseInt(seconds) < 10){
            seconds = "0" + seconds;
        }
        if (seconds == 60){
            minutes++;
            seconds = "00";
            if (parseInt(minutes) < 10){
                minutes = "0" + minutes;
            }
        }
        if (minutes == 60){
            hours++;
            minutes = "00";
            if (parseInt(hours) < 10){
                hours = "0" + hours;
            }
        } 
        }, 1000); 
}

button.addEventListener("click", () => timer());

//To do
//Improve the code. Too many if statements!
//Add a stop function. 
 
 