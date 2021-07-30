//Challenge 1: Your age in Days

function ageInDays() {
    var birthyear = prompt("Your year of birth?");
    var ageInDays = (2021 - birthyear) * 365;
    var h1 = document.createElement('h1');
    var textanswer = document.createTextNode('You are ' + ageInDays + ' days old')
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textanswer);
    document.getElementById('flex-box-result').appendChild(h1);
    console.log(ageInDays)
}

function reset() {
    document.getElementById('ageInDays').remove();
}

//Challenge 2: Cat Generator

function generateCat() {
    var image = document.createElement('img');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=mini";
    document.querySelector('#flex-cat-gen').appendChild(image);
}

//Challenge 3: Rock Paper Scissors

function rpsGame(yourChoice) {
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    console.log(humanChoice);
    botChoice = numberToChoice(randToRpsInt());
    console.log(botChoice);
    var result = decideWinner(humanChoice, botChoice);
    console.log(result);
    var message = finalMessage(result);
    // console.log(message)
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissor'][number];
}

function decideWinner(yourChoice, botChoice) {
    var rpsDatabase = {
        'rock': { 'scissor': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'scissor': 0, 'rock': 1, 'paper': 0.5 },
        'scissor': { 'scissor': 0.5, 'rock': 0, 'paper': 1 }
    }

    var yourScore = rpsDatabase[yourChoice][botChoice];
    var botScore = rpsDatabase[botChoice][yourChoice];

    return [yourScore, botScore];
}

function finalMessage([yourScore, botScore]) {
    if (yourScore === 0) {
        return { 'Message': 'You lost!', 'color': 'red' };
    }
    else if (yourScore === 0.5) {
        return { 'Message': 'You tied!', 'color': 'yellow' };
    }
    else {
        return { 'Message': 'You won!', 'color': 'green' };
    }
}

function rpsFrontEnd(humanChoice, botChoice, message) {

    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src,
    }

    //Removing Images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humandiv = document.createElement('div');
    var botdiv = document.createElement('div');
    var messagediv = document.createElement('div');

    humandiv.innerHTML = "<img src='" + imagesDatabase[humanChoice] + "'height=150 width=150 style= 'box-shadow:0px 10px 50px rgba(37, 50, 233, 1);' >";
    document.getElementById('flex-box-rps-div').appendChild(humandiv);

    console.log(message);
    console.log(message.Message);
    console.log(message.color);

    messagediv.innerHTML = " <h1 style = ' color: " + message.color + "; font-size:60px; padding:30px; '>" + message.Message + "</h1>";
    // messagediv.innerHTML = '<h1 style = " color : ${message.color} ;  font-size:60px; padding:30px;" > ${message.Message} </h1>';
    console.log(messagediv)
    document.getElementById('flex-box-rps-div').appendChild(messagediv);

    botdiv.innerHTML = "<img src='" + imagesDatabase[botChoice] + "'height=150 width=150 style= 'box-shadow:0px 10px 50px rgba(243, 38, 24, 1);'>";
    document.getElementById('flex-box-rps-div').appendChild(botdiv);

}

//Challenge 4: Change the color of All Buttons

var all_buttons = document.getElementsByTagName('button');
// console.log(all_buttons);

var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}

// console.log(copyAllButtons);

function buttonColorChange(buttonThingy) {
    if (buttonThingy.value === 'red') {
        buttonRed();
    }
    else if (buttonThingy.value === 'green') {
        buttonGreen();
    }
    else if (buttonThingy.value === 'reset') {
        buttonReset();
    }
    else if (buttonThingy.value === 'random') {
        RandomColors();
    }
}

function buttonRed() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonGreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonReset() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function RandomColors() {
    const r = [Math.floor(Math.random() * (copyAllButtons.length))];
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[Math.floor(Math.random() * (copyAllButtons.length))]);
        // all_buttons[i].classList.add(copyAllButtons[r]);
    }
}

//Challenge 5: BlackJack
let blackJackGame = {
    'you': {
        'scorespan': '#your-blackjack-result',
        'div': '#your-box',
        'score': 0
    },
    'dealer': {
        'scorespan': '#Dealer-blackjack-result',
        'div': '#dealer-box',
        'score': 0
    },
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
    'cardsMap': { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1, 11] },
    'Wins': 0,
    'losses': 0,
    'draws': 0,
    'isStand': false,
    'turnsOver': false,
};

const YOU = blackJackGame['you'];
const DEALER = blackJackGame['dealer'];
const hitSound = new Audio('static/sounds/swish.m4a');
const winSound = new Audio('static/sounds/cash.mp3');
const lossSound = new Audio('static/sounds/aww.mp3');

document.querySelector('#BlackJack-hit-button').addEventListener('click', blackJackHit);
document.querySelector('#BlackJack-stand-button').addEventListener('click', dealerLogic);
document.querySelector('#BlackJack-deal-button').addEventListener('click', blackJackDeal);

function blackJackHit() {
    if (blackJackGame['isStand'] === false) {
        let card = randomCard();
        showCard(YOU, card);
        updateScore(card, YOU);
        showScore(YOU);
    }
}

function randomCard() {
    let rindex = Math.floor(Math.random() * 13);
    return blackJackGame.cards[rindex];
}

function showCard(activeplayer, card) {
    if (activeplayer.score <= 21) {
        let cardImage = document.createElement('img');
        cardImage.src = `static/images/${card}.png`;
        hitSound.play();
        document.querySelector(activeplayer.div).appendChild(cardImage);
    }
}

function blackJackDeal() {

    if (blackJackGame['turnsOver'] === true) {

        blackJackGame['isStand'] = false;

        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
        for (i = 0; i < yourImages.length; i++) {
            yourImages[i].remove();
        }

        for (i = 0; i < dealerImages.length; i++) {
            dealerImages[i].remove();
        }

        YOU['score'] = 0;
        DEALER['score'] = 0;

        document.querySelector('#your-blackjack-result').textContent = 0;
        document.querySelector('#Dealer-blackjack-result').textContent = 0;
        document.querySelector('#your-blackjack-result').style.color = 'white';
        document.querySelector('#Dealer-blackjack-result').style.color = 'white';
        document.querySelector('#BlackJack-result').textContent = "Let's play";
        document.querySelector('#BlackJack-result').style.color = 'black';

        blackJackGame['turnsOver'] = false;
    }
}

function updateScore(card, activeplayer) {
    if (card === 'A') {
        //If adding 11 keeps me below 21 then add 11 otherwise 1.
        if (activeplayer.score + blackJackGame.cardsMap[card][1] < 21) {
            activeplayer.score += blackJackGame.cardsMap[card][1];
        } else {
            activeplayer.score += blackJackGame.cardsMap[card][0];
        }
    } else {
        activeplayer.score += blackJackGame.cardsMap[card];
    }
    // console.log(activeplayer.score)
}

function showScore(activeplayer) {
    if (activeplayer['score'] > 21) {
        document.querySelector(activeplayer['scorespan']).textContent = 'BUST!';
        document.querySelector(activeplayer['scorespan']).style.color = 'red';
    } else {
        document.querySelector(activeplayer.scorespan).textContent = activeplayer.score;
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic() {

    blackJackGame['isStand'] = true;

    while (DEALER['score'] < 16) {
        let card = randomCard();
        showCard(DEALER, card);
        updateScore(card, DEALER);
        showScore(DEALER);
        await sleep(1000);
    }

    if(blackJackGame['turnsOver'] === false){
        blackJackGame['turnsOver'] = true;
        let winner = computeWinner();
        showResult(winner);
    }
}

function computeWinner() {

    let winner;

    if (YOU['score'] <= 21) {
        if (YOU['score'] > DEALER['score'] || DEALER['score'] > 21) {
            // console.log("Won");
            blackJackGame['Wins']++;
            winner = YOU;
        } else if (YOU['score'] < DEALER['score']) {
            // console.log("Lost");
            blackJackGame['losses']++;
            winner = DEALER;
        }
        else if (YOU['score'] === DEALER['score']) {
            // console.log("draw");
            blackJackGame['draws']++;
        }
    } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
        // console.log("You Lost");
        blackJackGame['losses']++;
        winner = DEALER;
    } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
        // console.log("You drew");
        blackJackGame['draws']++;
    }

    // showResult(winner);

    return winner;
}

function showResult(winner) {

    let message, messagecolor;

    if (blackJackGame['turnsOver'] === true) {

        if (winner === YOU) {
            document.querySelector('#wins').textContent = blackJackGame['Wins'];
            message = 'you won';
            messagecolor = 'green';
            winSound.play();
        } else if (winner === DEALER) {
            document.querySelector('#losses').textContent = blackJackGame['losses'];
            message = 'you lost';
            messagecolor = 'red';
            lossSound.play();
        } else {
            document.querySelector('#draws').textContent = blackJackGame['draws'];
            message = 'you drew';
            messagecolor = 'black';
        }

        document.querySelector('#BlackJack-result').textContent = message;
        document.querySelector('#BlackJack-result').style.color = messagecolor;

    }

}



