// Project Eular Problem 1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000
/*
let sum = 0;
for (i=1; i<1000; i++) {
   if(i%3 === 0 || i%5=== 0) {
    sum += i;
   }

}
console.log(sum);
*/

// Project Eular Problem 2
let fibonacciSeries = [0, 1];
for (let i = 2; i < 4000000; i++) {
      fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
}
let sum = 0
for(let num of fibonacciSeries) {
if( num%2 == 0) {
   sum += num;
}
}
console.log(sum);