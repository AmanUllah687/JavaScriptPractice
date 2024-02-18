// Initializing  two  arrays with mixed data types
/*
const mixedArray1 = [1, "Hello", true, 3.14, { key: "value" }];
const mixedArray2 = ["apple", 42, false, { name: "John", age: 25 }, null];
//Using copy within function with optinal parametter 'end'
let resultArray = mixedArray2.copyWithin(3,0,5);
console.log(resultArray);
// using copy within function with no optinal parametter
let resultArray1 = resultArray.copyWithin(3,0);
console.log(resultArray1);
// using entries function on resultant array
const itterator = resultArray1.entries();
for (let e of itterator) {
    console.log(e);
}
//using fill function with all the paremetters
console.log(resultArray1.fill(0,0,3));
//using fill function with two  paremetters
console.log(resultArray1.fill(5,3))
// using fill function with one parametters
console.log(resultArray1.fill(8));
console.log(resultArray1);
*/
 const words = ['spray', 'limit', 'elite', 'deodrant', 'destruction', 'present'];
 // using filter function
 let result = words.filter(word => word.length > 6);
 console.log(result);
 console.log(words);
 // using find function
 let result1 = words.find(word => word.length > 6);
 console.log(result1);
 console.log(words);
// Using Map function
let mapArray = words.map(word => word + "hi");
console.log(mapArray);

