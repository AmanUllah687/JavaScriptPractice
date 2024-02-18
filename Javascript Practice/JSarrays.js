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
//entries() function is itterator object which return key value pairs of an array
// It does not  change the orginal Array
/*
const cars = ["Honda", "Toyota", "Suzuki" , "Jaguar", "Tesla"];
let itterator = cars.entries();
for (let e of itterator) {
    console.log(e);
}
*/

// Fill Function
// fill() function functions fill the specified elements in an array with static value
// you have to specify the position if not specified it can fill all elements and 
// it ruturns changed array
/*
const array1 = [1,2,3,4]
console.log(array1.fill(0,2,3));
*/

// Filter function
// filter() function create anew array filled with existing arrsy elements that pases a  test 
// filter does not excute a function for empty array elements
// it does not chnge the original array
/*
const words = ["Spray", "limit", "Elite", "Exuburant", "destruction", "present"];
const result = words.filter(words => words.length>6);
console.log(result);
*/

// Find function 
// find() function  returns the value of array element that pasess a test
// The function excutes once for each element in the array if it find a element where 
// functions return a true value it return the vlaue of that elementand does not checked the remaining values
// otherwise it returns undefined
/*
const array1 = [5,12,18,130,44]
let found = array1.find(element => element > 10);
console.log(found);
*/


// Map Function
//map() function returns a new  array as a result of performing a given function on each array
// element .it does not excutes the function for empty elements. it does not change the original array
/*
const array1 = [1,4,9,16];
let result = array1.map(element => element*2);
console.log(result);
*/

//Foreach function
//forEach() method calls a function once for each element
/*
const array1 = ["a", 2, "c"];
array1.forEach(element => console.log(element));
*/

// Reduce function
// reduce() function excutes a reducer function for each array value and it 
// return single value which is function accumalted result 
// it does not change the original array
/*
const array1 = [1,2,3,4];
function reducer(previousValue,currentValue) {
    return (previousValue * currentValue);
}
console.log(array1.reduce(reducer));
*/

// Slice function 
// slice() function returns selected elements of existing array into new array
// it does not change the original
// it takes two parametters start and end
/*
const animals = ["ant", "owl", "camel", "duck", "elephant"];
console.log(animals.slice(2));
console.log(animals.slice(2,4));
console.log(animals.slice(1,5));
console.log(animals.slice(-2));
console.log(animals.slice(2,-1));
*/

// Pop function
// pop() function removes the last element of array and returns it
// pop changes the length of the array  
/*
const plants = ["broccoli", "onion", "cabbage", "tomato"];
console.log(plants.pop());
console.log(plants);
console.log(plants.pop());
console.log(plants);
const plants = ["broccoli", "onion", "cabbage", "tomato"];
console.log(plants.shift());
*/

// Push function
// push() functions add new items at the end of the Array
// it changes the length and returns new length
/*
const animals = ["pigs", "goats", "sheep"];
const count = animals.push("cow");
console.log(count);
console.log(animals);
animals.push("chickens", "cats", "dogs");
console.log(animals);
animals.unshift("firstAnimal");
console.log(animals);
*/

// Flat function
// flat method() creates a new array with alll the elements of the sub array concated 
// recursively upto specfic depth
// by default the depth is 1 we can use infinity parametter for all sub arrays
/*
const numbrs = [1,2,[3,4,5]];
const flatNumbers = numbrs.flat(2);
console.log(flatNumbers);
const numbers1 = [1,2,[3,4,5],[6,7]];
const flatNumbers1 = numbers1.flat(2);
console.log(flatNumbers1);
const numbers2 = [1,2,[3,4,5],[6,7],[8,9],[10,11]];
const flatNumbers2 = numbers2.flat(Infinity);
console.log(flatNumbers2);
*/

// Sort function
// sort() method sorts an array Alphabettically
// it changes orginal Array
/*
const fruits = ["Banana", "Apple", "Orange", "Mango"];
console.log(fruits.sort());
*/

// Reverse function
// reverse methodreverse the elements in an array 
// it changes orginal Array
/*
const fruits = [1,2,3,4,5,6,7,8];
console.log(fruits.reverse());
*/
