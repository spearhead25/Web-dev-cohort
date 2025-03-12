const digital = document.querySelector(".digital-clock");
const hour = document.querySelector(".hour-hand");
const minute = document.querySelector(".minute-hand");
const second = document.querySelector(".second-hand");

function updateClock(){
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let amPm = hours >= 12 ? "PM" : "AM";
    let formHours = hours % 12 || 12;
    let timeString = `${formHours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${amPm}`;
    digital.textContent = timeString;

    let hourDeg = (hours % 12) * 30 + minutes * 0.5;
    let minuteDeg = minutes * 6;
    let secondDeg = seconds * 6;

    hour.style.transform = `rotate(${hourDeg}deg)`;
    minute.style.transform = `rotate(${minuteDeg}deg)`;
    second.style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000);

updateClock();