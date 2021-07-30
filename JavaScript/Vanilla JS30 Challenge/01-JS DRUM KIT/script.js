function playSound(e){
    // console.log(e);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!audio) return;//Stop the function from running
    audio.currentTime = 0;//Rewind To the start
    audio.play();
    key.classList.add('playing');//adding a class
}

function removeTransition(e){
    //Skip if it is not a transform
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
//Each key gets a event listner added to which is transitionend & when transition ends removeTransition() is called;
keys.forEach(key => key.addEventListener('transitionend',removeTransition));

window.addEventListener('keydown',playSound);
