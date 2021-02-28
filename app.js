"use strict";

let chronometer = document.querySelector(".chronometer");
let startButton = document.querySelector("#start-btn");
let clearButton = document.querySelector("#clear-btn");
let [h, m, s] = [0, 0, 0];
let timerInterval;

function start() {
    startButton.onclick = () => stop();
    startButton.value = "Stop!";
    //remove onclick start function
    timerInterval = setInterval(() => {
        chronometer.textContent = `${h}:0${m}:0${s}`.replace(
            /\d(?=\d{2})/g,
            ""
        ); //.replace takes a regex that matches a number (\d, in our case 0) only if that number is followed by two numbers ((?=\d{2})). This way, if the string literal gets a three digit number, the 0 is replaced by an empty string, maintaining the format.
        s++;
        if (s > 59) {
            s = 0;
            m++;
            if (m > 59) {
                m = 0;
                h++;
            }
        }
    }, 1000);
}

function stop() {
    startButton.onclick = () => start();
    startButton.value = "Continue!";
    console.log("this works");
    clearInterval(timerInterval);
}

function clear() {
    startButton.onclick = () => start();
    startButton.value = "Start!";
    clearInterval(timerInterval);
    [h, m, s] = [0, 0, 0];
    chronometer.textContent = `${h}:0${m}:0${s}`;
}

startButton.onclick = () => start();
clearButton.onclick = () => clear();

//To do
//Improve the code. Idea: organize everything into objects and turn functions into methods.
