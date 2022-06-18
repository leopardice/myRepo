import {differenceInMilliseconds, intervalToDuration} from 'date-fns'

const FORM = document.querySelector(".form");
const FUTURE_DATE_ELEMENT = document.getElementById("future-date");
const errorElement = document.querySelector(".error");
const COUNTDOWN = document.querySelector(".countdown");

let futureDate = "";

FORM.addEventListener('submit', (e) => {
    e.preventDefault();
    getFutureDate();
    render();
    setInterval(render, 1000);
})

function getFutureDate() {
    futureDate = new Date(FUTURE_DATE_ELEMENT.value);
}

function render() {

    let currentDate = Date.now();

    let intervalObject = intervalToDuration({
        start: currentDate,
        end: futureDate
    })

    let timeLeftString = Object.entries(intervalObject).map(item => item.join(": ")).join(" ");
    console.log(timeLeftString);
    COUNTDOWN.innerText = timeLeftString;
}