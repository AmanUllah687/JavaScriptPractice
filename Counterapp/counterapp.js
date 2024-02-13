// document.getElementById("count-el").innerText = 5;
// let count = 9;
// console.log(count);
// let myAge = 25;
// console.log(myAge);
// let count = 5 * 4;
// console.log(count);
// let firstBatch = 5;
// let secondBatch = 8;
// let count = firstBatch + secondBatch;
// console.log(count);
// let myAge = 25;
// let humanDogRatio = 7;
// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);

// let count = 5;
// count = 3;
// console.log(count);
// let bonusPoints = 50;
// console.log(bonusPoints);
// bonusPoints = bonusPoints * 2;
// console.log(bonusPoints);
// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);
// function increment() {
// console.log("The button was clicked");
//}
// function countDown() {
 // console.log(5);
// console.log(4);
// console.log(3);
// console.log(2);
// console.log(1);
// }
// countDown();
// countDown();
// let num = 42;
// function myNumber (){
//   console.log(num);
// }
// myNumber();
// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;
// function totalLapTime(){
//   console.log(lap1 + lap2 + lap3);
// }
// totalLapTime();
// let lapsCopmlted = 0;
// function lapIncrement() {
//  lapsCopmlted = lapsCopmlted + 1;
// }
// lapIncrement();
// lapIncrement();
// lapIncrement();
// console.log(lapsCopmlted);


let saveEl = document.getElementById("save-el");
console.log(saveEl);
let countEl = document.getElementById("count-el");
 console.log(countEl);
 let count = 0;
 function increment() {
   count += 1;
    countEl.textContent = count;
 }
 function save() {
    let countstr = count + " - ";
    saveEl.textContent += countstr;
   console.log(count);
   countEl.textContent = 0;
   count = 0;
 }