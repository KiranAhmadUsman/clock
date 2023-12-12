const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

function time() {
    const date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    if (secs === 0) {
        mins = date.getMinutes();
    }

    if (hours < 10) {
        hour.innerText = `0${hours}`;
    } else {
        hour.innerText = hours;
    }

    if (mins < 10) {
        min.innerText = `0${mins}`;
    } else {
        min.innerText = mins;
    }

    if (secs < 10) {
        sec.innerText = `0${secs}`;
    } else {
        sec.innerText = secs;
    }
}

setInterval(time, 1000);
