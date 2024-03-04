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
/*
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
*/
// Problem 3 finding the HCF of two numbers 
/*
 const number1 = 24;
 const number2 = 36;
 let hcf;
 for (let i=1; i<= number1 && i<= number2; i++) {
    if(number1 % i == 0 && number2 % i == 0) {
      hcf = i;
    }
 }
 console.log(`HCF of ${number1} and ${number2} is ${hcf}`);
 */
 function lcmFunction(a, b) {
  let larger = Math.max(a, b);
  let smaller = Math.min(a, b);
  for (let i = larger; ; i += larger) {
      if (i % smaller === 0) {
          return i;
      }
  }
};
let LCM = lcmFunction(49,56);
console.log(LCM);

// project eular problem 4
/*
let largestPrimeFactor = 2;

  for (let divisor = 2; number > 1; divisor++) {
    while (number % divisor === 0) {
      largestPrimeFactor = divisor;
      number /= divisor;
    }
  return largestPrimeFactor;
}
console.log(largestPrimeFactor);
*/
// finding the index of traget value in a array
/*
const numbers = [1,4,2,6,2];
const isEqual = (element) => element === 2;
let index1 = numbers.findIndex(isEqual);
let index2 = numbers.findLastIndex(isEqual);
console.log(`The value 2 is at index of ${index1} and ${index2} of given array`);
*/