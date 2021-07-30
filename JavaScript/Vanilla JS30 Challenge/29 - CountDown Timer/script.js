let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
function timer(seconds){
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds*1000;
    displayTimeLeft(seconds);
    displayEndTime(then);
    countdown =  setInterval(()=>{
        const secondsLeft = Math.round((then - Date.now())/1000);
        //Check we should stop it or not
        if(secondsLeft < 0){
            clearInterval(countdown);
            return;
        }
        //Displaying
        displayTimeLeft(secondsLeft);
    },1000);
}

function displayTimeLeft(seconds){
    const minutes =Math.floor(seconds/60);
    const remSeconds = seconds % 60;
    const display = `${minutes< 10 ? '0':''}${minutes}:${remSeconds < 10 ? '0':''}${remSeconds}`;
    timerDisplay.textContent = display;
    document.title = display;
    // console.log({minutes,remSeconds});
}

function displayEndTime(timestamp){
    const end = new Date(timestamp);
    const hour = end.getHours();
    const adjustedHour = hour>12 ? hour -12 :hour;
    const minutes = end.getMinutes();
    endTime.textContent = `${adjustedHour< 10 ? '0':''}${adjustedHour}:${minutes < 10 ? '0':''}${minutes}`;
}

function startTimer(){
    timer(this.dataset.time);
}

buttons.forEach(button => button.addEventListener('click',startTimer));
document.customForm.addEventListener('submit',function(e){
    e.preventDefault();
    const mins = this.minutes.value;
    // console.log(mins);
    timer(mins*60);
    this.reset();
})

