 /*let userName = "per";

 let message = "You have three Notifications";

 let messageToUser = message + ", " + userName + "!";
 console.log(messageToUser);
 */
/*
 let name = "Aman";
 let greeting = "Hi, my name is ";
 let myGreeting = greeting + name;
 console.log(myGreeting);
*/
/*
let points = 4;
let bonusPoints = "10";
let totalPoints = points + bonusPoints;
console.log(totalPoints);
*/
/*
console.log(4 + 5);
console.log("2" + "4");
console.log("5" + 1);
console.log(100 + "100");
*/
/*
let welcomeEl = document.getElementById("welcome-el");
let userName = "Aman";
let greeting = " Welcome Back "
welcomeEl.innerText = greeting + userName;
welcomeEl.innerText += " :)"
*/
/*
let firstName = "Aman";
let lastName = "Ullah";
let fullName = firstName + " " + lastName;
console.log(fullName);
*/
/*
let name = "linda"
let greeting = "Hi There"
function myGreeting() {
    console.log(greeting +", " + name + "!");
}
myGreeting();
*/
/*
let points = 3;
  
function add3Points () {
     points += 3;
}
function removePoints() {
    points -= 1;
}
add3Points();
add3Points();
add3Points();
removePoints();
removePoints();
console.log(points);
*/
/*
console.log("2" + 2);
console.log(11 + 7);
console.log(6 + "5");
console.log("My points: " + 5 + 9);
console.log(2+2);
console.log("11" + "14");
*/
/*
let age = prompt("Enter Your age");
if (age < 20) {
    console.log("You can not enter the club");
} else {
    console.log("Welcome! to our club");
}
*/
/*
let age = 100;
if (age < 100) {
    console.log("Not eligiable");
} else if (age === 100) {
    console.log("Here is Your Birthday Card from King!");
}
else {
    console.log("Not Elegiable, You already gotten one");
}
*/
/*
console.log(4 === 3);
console.log(5 > 2);
console.log(12 > 12);
console.log(3 < 0);
console.log(3 <= 3);
console.log(11 <= 11);
console.log(3 <= 2);
*/
/*
const Aman = ["wordpress Develpor", "Bachelors in Computer Science", "Driving license", "Html", "Css", "JavaScript"];
console.log(Aman[0]);
console.log(Aman[1]);
console.log(Aman[2]);
*/
/*
 const Aman = ["Aman", 25, true];
 let cards = [4,7];
 cards.push(6);
 console.log(cards);
 */
/*
 let message = [
    "Hey how's it going?",
    "I am right, thank you! How about you?",
    "All good been working on my portfolio lately"
 ];
 for (let i=0; i<message.length; i++) {
    console.log(message[i]);
 }
 let newMessage = "Same here!";
 message.push("Same here");
 console.log(message);
 message.pop("Same here");
 console.log(message);
 */
 /*
for (let count=10; count<21; count++) {
    console.log(count);
}
for (let i=1; i<11; i += 2) {
    console.log(i);
}
for (j=10; j<101; j +=10) {
    console.log(j);
}
*/
/*
let sum = 0;
for (i=1; i<1001; i++) {
   if(i%3 === 0 || i%5=== 0) {
    sum += i;
   }

}
console.log(sum);
*/
/*
let card = [7,3,9];
for (let i=0; i<card.length; i++) {
    console.log(card[i]);
}
*/ 
/*
let sentence = ["Hello", "my", "name", "is", "aman"];
let greetingEl = document.getElementById("welcome-el");
for(let i=0; i<sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " ";
}
*/
/*
let player1time = 102;
let player2time = 107;
 function getFastestRaceTime() {
    if(player1time<player2time) {
        return player1time;
    }
    else if(player2time<player1time) {
        return player2time;
    }
    else {
        return player1time;
    }
 }
 let raceTime = getFastestRaceTime();
 console.log(raceTime);
 */
/*
 let player1time = 102;
 let player2time = 107;
  function totalRaceTime() {
    return player1time + player2time;
  }
  let totalTime = totalRaceTime();
  console.log(totalTime);
  */
 /*
 let randomnumber = rollDice();
 function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
 }
 console.log(randomnumber);// 0,1,2,3,4,5
 */

 // let flooredNumber = Math.floor(4.45362);
// console.log(flooredNumber);
/*
let hascompletedcourse = true;
let givesCertificate = true;
if (hascompletedcourse === true && givesCertificate === true) {
        generateCertificate();
}
function generateCertificate() {
    console.log("Generating certificate");
}
*/
/*
let hasSolvedChallenge = false;
let hasHintLefts = false;
if(hasSolvedChallenge === false && hasHintLefts === false) {
    showSoloution();
}
function showSoloution() {
    console.log("Showing the soloution");
}
*/
/*
let likeDocumentries = false;
let likeStartups = false;
if(likeDocumentries === true || likeStartups === true) {
    recomendMovie();
}
function recomendMovie() {
    console.log("Hey, checkout this new movie we think you will like!");
}
*/
/*
let course = {
    title: "lear css grid for free",
    lessons: 16,
    creater: "Aman",
    length:    63,
    level: 2,
    isfree: true,
    tags: ["html", "css"]
}
console.log(course["tags"]);
*/
/*
let castle = {
    title: "live like a king in my castle",
    price: 190,
    isSuperHost: true,
    images: ["img/castle1.png", "img/castle2.png"]
}
console.log(castle.price);
console.log(castle.isSuperHost);
*/
// BlackJack app recap exercises
// Objects and functions
/*
let person = {
    name: "Aman",
    age: 25,
    country: "Pakistan"
}
 function logData() {
    console.log(`${person.name} is ${person.age} years old and lives in ${person.country}`);
}
console.log(logData());
*/
// Conditional Statements
/*
let age = 70;
if (age < 6) {
    console.log("Free");
}
else if(age < 18) {
    console.log("Child discount");
}
else if(age < 27  ) {
    console.log("Student Discount");
}
else if(age < 67) {
    console.log("Full Price");
}
else {
    console.log("Senior citizenship Discount")
}
*/
// for loops 
/*
let largeCountries = ["China", "India", "Usa", "Indonessia", "Pakistan"];
console.log("The 5 largest countries in the world:");
for(let i=0; i<largeCountries.length; i++) {
    console.log("_" + largeCountries[i]);
}
*/
// Push() pop() shift() unshif() Challenge 
/*
let largeCountries = ["Tuvalu", "India", "Usa", "Indonessia", "Monaco"];
largeCountries.pop();
console.log(largeCountries);
largeCountries.push("Pakistan");
console.log(largeCountries);
largeCountries.shift();
console.log(largeCountries);
largeCountries.unshift("China");
console.log(largeCountries);
*/
//logicla operators 
/*
let dayOfMonth = 13;
let weekDay = "Friday";
if (dayOfMonth === 13 && weekDay === "Friday") {
    console.log(":)");
}
*/
// Rock paper Scisors
/*
let hands = ["Rock", "Paper", "Scisors"];
function getHand() {
    let randomIndex = Math.floor(Math.random() * 3);
    return hands[randomIndex];
}
console.log(getHand());
*/
// sorting fruits array
/*
let fruit = ["Apple", "Orange", "Apple", "Apple", "orange"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");
 function sortFruit() {
    for(let i=0; i<fruit.length; i++) {
        if(fruit[i] === "Apple") {
            appleShelf.textContent += "Apple"; 
        }
        else if(fruit[i] === "Orange") {
            orangeShelf.textContent += "Orange";
        }
    } 
 }
 sortFruit();
 */
let boxEl = document.getElementById("box-el");
boxEl.addEventListener("click", function() {
    console.log("I want to open the box!");
});