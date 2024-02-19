/*
function func() { return "function 1";}
function func() { return "function 2";}
console.log(func());
*/
// output: function 2

/*
function func(a) { return "function 1";}
function func(a) { return "function 2";}
console.log(func());
*/
// output: function 2

/*
function func(a) { return "function 1";}
function func(a,b) {return "function 2";}
console.log(func());
*/
// output: function 2

/*
function func(a) { return "function 1";}
function func(a,b) { return "function 2";}
console.log(func(5));
*/
// output: function 2

/*
function func(a) { return "function 1";}
function func(a, b) { return "function 2";}
console.log(func(5,6));
*/
// output: function 2

/*
function func() { return "function 1";}
function func2() { return "function 2";}
console.log(func());
*/
// output: function 1

/*
function func(a) { return "function 1";}
function func2(a) { return "function 2";}
console.log(func2());
*/
// output: function 2

/*
function func(a) { return "function 1";}
function func2(a, b) { return "function 2";}
console.log(func2(5));
*/
// output: function 2

/*
function func(a) { return "function 1";}
function func2(a, b) { return "function 2";}
console.log(func2(5,10));
*/
//output; function 2

/*
function func(a) { return "function 1";}
function func2(a, b) { return "function 2";}
console.log(func(5));
*/
// output: function 1


// JS functions- Check for undefined
/*
 function multiply(a,b) {
    a = typeof a !== 'undefined' ? a : 0;
    b = typeof b !== 'undefined' ? b : 1;
    return a * b
 }
 console.log(multiply(5));
 */
// output: 5

// With defualt parametters  a manual check in the body is no longer necessary 
/*
function multiply( a = 0 , b = 1) {
    return a*b
}
console.log(multiply());  // 0
console.log(multiply(5));  // 5
console.log(multiply(5,5));  // 25
*/

// JS functions- Agrgument object
function myConcat(separator) {
    var result = '';
    // iterate through arguments
    for (let i=1; i<arguments.length; i++);
    
}