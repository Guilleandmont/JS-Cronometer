# JS-Chronometer

Creating a chronometer using JS. Work on progress!

## The Idea

A chronometer must measure time from the moment it's started. To do this, we use template literals with the typical time format hh:mm:ss and a function _timer()_ (in app.js). The function declares the variables that go into the template literals (lines 7-9) and starts a _setInterval()_ (line 10). The _setInterval()_ function repeats its first parameter every specified amount of time. This amount of time is given by the second parameter in line 30.

Every time _timer()_ is executed, the amount of seconds is incremented, and the program checks two things:

<li>If the number of seconds is a single digit number, a "0" is appended to it to preserve the format.
<li>If the number of seconds gets to 60, then the number of minutes is incremented, and seconds are set to 0. This action is repeated for minutes and hours.
