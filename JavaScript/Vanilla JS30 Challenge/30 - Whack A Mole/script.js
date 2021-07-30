const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const button = document.querySelector('button');
let lastHole;
let timeUp = false; 
let score = 0;
let click = false;

function randTime(min,max){
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes){
    const idx = Math.floor(Math.random()*holes.length);
    const hole = holes[idx];
    // console.log(hole);
    if(hole === lastHole){
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function peep(){
    const time = randTime(200,1000);//200,1000
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(()=>{
        hole.classList.remove('up');
        if(!timeUp)peep();
    },time);
    // console.log(time,hole);
}

function startGame(){
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(()=> timeUp = true,10000);
}

function bonk(e){

    if(!e.isTrusted) return;//Cheater
    if(!click){
        score++;
        click = true;
    }
    this.classList.remove('up');
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click',bonk));
moles.forEach(mole => mole.addEventListener('transitionend',()=>click = false));
button.addEventListener('click',startGame);