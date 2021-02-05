# JS-Chronometer

Creating a chronometer using JS. Work on progress!
Don't press the button more than once!

## The Idea 

A chronometer must measure time from the moment it's started. To do this, we use template literals with the typical time format hh:mm:ss and a function *timer()* (in app.js). The function declares the variables that go into the template literals (lines 7-9) and starts a *setInterval()* (line 10). The *setInterval()* function repeats its first parameter every specified amount of time. This amount of time is given by the second parameter in line 30.

Every time *timer()* is executed, the amount of seconds is incremented, and the program checks two things:
<li>If the number of seconds is a single digit number, a "0" is appended to it to preserve the format.
<li>If the number of seconds gets to 60, then the number of minutes is incremented, and seconds are set to 0. This action is repeated for minutes and hours.

## Problems

Many. Amongs them:

<li> The most glaring is that there is no way to stop! Will work on this later. SOLVED
<li> The variables are constantly juggled between being strings and numbers. This can be made more elegant. The variables must be strings so we can display single digits in a correct way (for example, 01:02:03). SOLVED 
<li> Too many ifs. There should be no problem since this is just a small chronometer, but for bigger applications loops and ifs should be minimized! sort of SOLVED

