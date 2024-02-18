// var varible scope 
/*
function myVar() {
    if(true) {
        var varible1 = "i am var varaible"
        console.log(varible1);
    }
    console.log(varible1);
}
myVar();
*/

// let varaible scope 
/*
function myLet() {
    if(true) {
        let varible1 = "i am let varaible"
        console.log(varible1);
    }
    console.log(varible1);
}
myLet();
*/

// const var scope
function myConstant() {
    const varible1 = "i am const varaible"
    if(true) {
        console.log(varible1);
    }
    console.log(varible1);
}
myConstant();

// Variable intialized with var keyword can change thier value after creation
/*
var age = 20;
 age = 10;
console.log(age);
*/

// Variable intialized with let keyword can also change thier value after creation
/* 
let price = 30;
 price = 50;
 console.log(price);
 */
 
 // Variables intialized with const keyword cannot change thier value after creation
 /*
 const pi = 3.14;
  pi = 10;
  console.log(pi);
  */

  