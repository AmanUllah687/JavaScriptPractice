//Concat Function
//concat() functions Joins or concat two Arrays and return a new String
/*
const item1 = ["Apple", "MAngo", "Orange"];
const item2 = ["Banana", "Grapes", "Pineapple"];
let items = item2.concat(item1);
console.log(items);
*/

//Copywithin Function
//copywithin() functions copies the array element in other position in an array 
//overwriting the existing elements and returns the changed array
/*
const fruits = ["Banana", "Apple", "orange", "Mango"];
console.log(fruits.copyWithin(2,0));
const fruits1 = ["Banana","Apple", "orange" , "Mango", "kiwi"];
console.log(fruits1.copyWithin(2,1,2));
*/

//Entries function
//entrie() function is itterator object which return key value pairs of an array
// It does not  change the orginal Array
/*
const cars = ["Honda", "Toyota", "Suzuki" , "Jaguar", "Tesla"];
let itterator = cars.entries();
for (let e of itterator) {
    console.log(e);
}
*/
// Fill Function
// fill function functions fill the specified elements in an array with static value
// you have to specify the position if not specified it can fill all elements and 
// it ruturns changed array
/*
const array1 = [1,2,3,4]
console.log(array1.fill(0,2,3));
*/