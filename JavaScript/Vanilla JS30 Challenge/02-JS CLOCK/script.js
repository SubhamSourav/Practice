
let secondHand = document.querySelector(".second-hand");
let minutesHand = document.querySelector(".min-hand");
let hourHand = document.querySelector(".hour-hand");

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const secondsDegrees = ((seconds/60)*360) + 90;
    const minutesDegrees = ((minutes/60)*360) + 90;
    const hourDegrees = ((hours/60)*360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    console.log(hours,minutes,seconds)
}

setInterval(setDate,1000);