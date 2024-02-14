let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new Card?";
    } else if (sum === 21) {
        message = "Wohoo! you've got the Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the Game!";
        isAlive = false;
    }
     console.log(hasBlackJack);
     console.log(isAlive);
     console.log(message);
}