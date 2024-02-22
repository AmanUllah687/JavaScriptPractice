let firstCard = 10;
let secondCard = 11;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el")
function startGame(){
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
    console.log("Drawing a new Card from the deck!");
    let card = 7
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
}