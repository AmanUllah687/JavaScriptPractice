let player = { playerName: "Aman", playerChips: 145};
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el");
 playerEl.textContent = player.playerName + ": $" + player.playerChips;

function getRandomcard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if(randomNumber > 10) {
        return 10;
    }
    else if(randomNumber === 1) {
        return 11;
    }
    else {
        return randomNumber;
    }
    }
function startGame(){
    isAlive = true;
    let firstCard = getRandomcard();
    let secondCard = getRandomcard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}
function renderGame() {
    cardsEl.textContent = "Cards ";
    for(let i=0; i<cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    if (sum <= 20) {
        message = "Do you want to draw a new Card?";
    } else if (sum === 21) {
        message = "Wohoo! you've got the Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the Game!";
        isAlive = false;
    }
    sumEl.textContent =  "Sum: " + sum;
    messageEl.textContent = message; 
}
function newCard() {
    if(isAlive === true & hasBlackJack === false) {
    console.log("Drawing a new Card from the deck!");
    let card = getRandomcard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
    }
}