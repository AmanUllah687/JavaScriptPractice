/*
const Student = {
     fullName : "Aman", age : 25, cgpa : 2.89, isPass : true,
};
console.log(Student.fullName);
Student["age"] = Student["age"] + 1;
console.log(Student.age);
Student["fullName"] = "Rahul Sharma";
console.log(Student["fullName"]);
const Product = {
     name : "Parker joker Standard CT Ball Pen (Black)", rating : 4, price : 270, offer: 5,
isDeal : true,
}; 
console.log(Product);
const Profile = {
     userName : "shradakhapra", isFollow: true, Message : false, posts : 195, followers : 5690000, following : 4,
     nickName: "Shrada Khapra", email : "@shradakhapra", profesion : "Enterpreneour", 
};

console.log(typeof Profile["userName"]);
//Arthematic operators
let a = 5;
let b = 2;
console.log("a =", a, "&  b =", b);
console.log("a+b =", a+b);
console.log("a-b =", a-b);
console.log("a*b =", a*b);
console.log("a/b =", a/b);
console.log("a%b =", a%b);
console.log("a**b =", a**b);
//Unary operators
let c = 5;
let d = 2;
console.log("c =", c, "&  d =", d);
c--;
console.log(c);
console.log("c++ =", c++);
console.log(" c =", c);
console.log("--d =", --d);
console.log("d-- =", d--);
console.log("d =", d);
/*
//Assigment operators
let a = 5;
let b = 2;
a **= 4;//a ** 4
console.log("a =", a);
a += 4;//a = a + 4
console.log("a =", a);
a -= 4;//a = a - 4
console.log("a =", a);
a *= 4;//a = a * 4
console.log("a =", a);
a /= 4;//a = a / 4
console.log("a =", a);
a %= 4;//a = a % 4
console.log("a =", a);*/
/*
let a = 5;
let b = 2;
console.log("a != b", a != b);
let c = 5;
let d = "5";
console.log("c == d", c !== d)
let e = 5:
let f = 3;*/
/* logical And opr*/
/*
let a = 6;
let b = 5;

let cond1 = a > b;//true
let cond2 = a === 6;//true
console.log("cond1  && cond2", cond1 && cond2);
*/
/*
//logical or opr
let a = 6;
let b = 5;
 console.log("cond1 || Cond2", a < b || a === 6);
 */
//logicall not opr
/*
let a = 6;
let b = 5;
console.log("!(6<5)",!(a < b ))
*/
/*
let age = 16;
if(age >= 18) {
     console.log("you can Vote");
}
if (age < 18) {
     console.log("You cannot Vote");
}
let mode = "blue"
let color;
if(mode === "Dark") {
     color = "Black"
}
 else {
     color = "White";
}
console.log(color);
*/
/*
let age = 16;

if(age >= 18) {
     console.log("You Can Vote")
}
else {
     console.log("You cant Vote")
}*/
/*
let num = 7;
 
if(num%2 === 0) {
     console.log(num, "is even");
}
else {
     console.log(num, "is odd");
}
*/
/*
let mode = "yellow"
let color;
 
if(mode === "dark") {
     color = "black";
}
else if(mode === "blue") {
     color = "blue";
}
else if(mode === "Pink") {
     color = "pink";
}
else {
     color = "white";
}
console.log(color);/*
*/
//Ternary Operators
/*
let age = 14;

let result = age >=18 ? "adult" : "not adult"

console.log(result);
*/
/*
let score = prompt("Enter your Score");
let grade;
if(score >= 80 && score <= 100) {
     grade = "A";
}
else if(score >= 70 && score <= 79) {
     grade = "B";
}
else if(score >= 60 && score <= 69 ) {
     grade = "C";
}
else if(score >= 50 && score <= 59) {
     grade = "D";
}
else if(score >= 0 && score <= 49) {
     grade = "F";
}
console.log(grade);
*/
//for loop
/*
for(let i=1; i<=5; i++) {
     console.log("i =", i);
}
let sum = 0;
let n = 6;
for(let i=1; i<=n; i++){
     sum = sum + i;
}
console.log(sum, "is sum");
console.log("loop has ended");
*/
/*
let i = 20;

do {
     console.log("apna college");
     i++;
}while(i<=10);
*/
//do- while loop
/*
let i = 1;
do {
     console.log("i =", i);
     i++;
}while(i<=10);
*/
//for of loop
/*
let str = "javascript"
 
let size = 0;
for(let i of str) {
     console.log("i =", i);
     size++;
}
console.log(size);
*/
//for in loop
/*
let student = {
     name: "Aman",
     age: 20,
     cgpa: 2.7,
     ispass: true,
};
for(let k in student){
     console.log("key is", k ,"value ", student[k]);
}
*/
//practice Question no 1
/*
for(let num=0; num<=100; num++){
 if(num%2 !== 0){
     console.log(num, "is odd");
 }
}
*/
// practice question
/*
let gamenum = 25;
let usernum = prompt("Guess the Number:");
while(gamenum != usernum){
     usernum = prompt("you entered the wrong num. Guess again:");
}
console.log("Congratulations, You entered the Right number");
*/
//Strings in javaScript
/*
let str = "Apnacollege"
console.log(str[9]);
*/
//Teplate litterals
/*
let obj = {
     item : "pen",
     cost : 10,
};
let output =`The cost of ${obj.item} is ${obj.cost} Rupees ${1+2+3}`;
console.log(output);
*/
// escape charecters
/*
let str = "apna\tcollege";
console.log(str.length);
*/
//string Methods 
/*
let str = "ApnaCollege";
let  newStr = str.toUpperCase();
console.log(str);
console.log(newStr);
//strings are immutable
*/
/*
let str = "ApnaCollege"
let newStr = str.toLowerCase();
console.log(newStr);
*/
/*
let str = "      Apna college  js      "
let newStr = str.trim();
console.log(newStr); 
*/
/*
let str = "Apnacollege"
let newString = str.slice(0,5);
console.log(newString);
*/
/*
let str = "1234567"
let newStr = str.slice(1,6);
console.log(newStr);
*/
/*
let str1 = "Apna"
let str2 = "College"
let res = str1.concat(str2);
console.log(res);
*/
/*
let str1 = "Apna";
let str2 = "College"
let res = str1 + str2 + 123;
console.log(res);
*/
/*
let str = "hello"
console.log(str.replace("h","m"));
*/
/*
let str = "hellolololo"
console.log(str.replaceAll("lo","p"));
*/
/*
let str = "IloveJS"
console.log(str.replace("I","S"));
*/
/*
let Name = prompt("Enter your Full Name witout spaces:");
console.log(Name);
let username = `@${Name.toLowerCase()}${Name.length}`;
console.log(username);
*/
/*
let marks = [50,60,70,80,90,100];
console.log(marks);
console.log(marks.length);//property
let heros = ["ironman", "antman", "thor", "hulk", "ShaktiMan", "Spiderman"];
console.log(heros);
heros[0] = "lokie";
console.log(heros[0]);
*/
/*
let heros = ["Ironman", "Antman", "thor", "hulk", "Shaktiman", "Spiderman"];
for(let i=0; i<heros.length; i++) {
     console.log(heros[i]);
}
*/
/*
let fname = "kaleemUllah";
for(let i=0; i<fname.length; i++){
     console.log(fname[i]);
}
*/
/*
let str = "apnacollege"
for(let st of str) {
     console.log(st);
}
*/
/*
let cities = ["lahore", "Karachi", "Islmabad", "Rawalpindi", "Peshawar"];
for(let city of cities) {
     console.log(city.toUpperCase());
}
*/
/*
let marks = [85,97,44,37,76,60];
let sum = 0;
for(let val of marks) {
     sum += val;
}
let avg = sum/marks.length
console.log(`Average marks of the class is ${avg}`);
*/
/*
let items = [250,645,300,900,50];
let i = 0;
for(let val of items) {
     let offer = val/10;
     items[i]  = items[i] - offer;
     console.log(`value after Applying offer ${items[i]}`);
     i++;
}
console.log(items);
*/
/*
let items = [250,645,300,900,50];
for(let i=0; i<items.length; i++){
     let offer = items[i]/10;
     items[i] = items[i] - offer;
}
console.log(items);
*/
//String MEthods
/*
let fooditems = ["Orange","Apple","Mango","Strawberry"];
console.log(fooditems.push("cherry","Watermelon","Peach"));
console.log(fooditems);
*/
/*
let foodItems = ["Orange","Apple", "Mango", "Strawberry","chery","Peach"];
let deletedItems = foodItems.pop("Peach");
console.log(foodItems);
console.log("Deleted item", deletedItems);
*/
/*
let foodItems = ["Orange", "Apple", "Mango", "Strawberry", "cherry", "Peach"];
console.log(foodItems.toString());
console.log(foodItems);
let marks = [40,50,60,70,80,90];
console.log(marks.toString());
*/
/*
let marvelHeros = ["Ironman", "Spiderman", "Thor"];
let dcHeros = ["SuperMan","Batman", "Flash"];
let indianHeros = ["Shaktiman", "Krish"];
let heros = marvelHeros.concat(dcHeros,indianHeros);
console.log(heros);
console.log(marvelHeros);
console.log(dcHeros);
*/
/*
let heros = ["Thor","loki","Hawkeye"]
heros.unshift("antman");
console.log(heros);
*/
/*
let heros = ["Thor","loki","Hawkeye"]
heros.shift("antman");
console.log(heros);
*/
/*
let heros = ["thor", "loki", "antman", "Hawkaye", "krish"]
console.log(heros.slice(1,4));
console.log(heros);
*/
/*
let arr = [1,2,3,4,5,6,7];
console.log(arr.splice(2,2,101,102));
console.log(arr);
*/
/*
let arr = [1,2,3,4,5,6,7];
console.log(arr.splice(2,0,101));
console.log(arr);
*/
/*
let arr = [1,2,3,4,5,6,7,8];
console.log(arr.splice(3,1));
console.log(arr);
*/
/*
let arr = [1,2,3,4,5,6,7,8]
console.log(arr.splice(3,1,101));
console.log(arr);
*/
/*
let arr = [1,2,3,4,5,6,7,8,9]
console.log(arr.splice(4));
console.log(arr);
*/
/*
let comapnies = ["Bloomberg", "Microsof","Uber","Google", "IBM", "Netflix"];
comapnies.shift();
console.log(comapnies);
*/
/*
let comapnies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
comapnies.splice(2,1,"ola");
console.log(comapnies);
*/
/*
let comapnies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
comapnies.push("Amazon");
console.log(comapnies);
*/
/*
function myfunction(){
     console.log("Apna collage");
     console.log("We are laerning Js");
     console.log("Apna collage");
     console.log("We are laerning Js");
}
myfunction();
myfunction();
*/
/*
function myfunction(msg, n){
     console.log(msg,n);
}
myfunction("My Name is Aman", 100);
*/
/*
function sum(a, b) {
     console.log(a+b);
}
sum(1,4);
*/
/*
function sum(a, b){
     console.log(a);
     console.log(b);
     s = a + b;
     return s;
}
let value = sum(3,4);
console.log(value);
*/
/*
function sum(a, b){
 return a+b;
}
console.log(sum(8,8));
*/
/*
function mul(a, b){
     return a*b;
}
console.log(mul(5,5));
*/
/*
const arrowSum = (a, b)=> {
     console.log(a+b);
}
console.log(arrowSum(4,4));
*/
/*
const arrowMul = (a, b)=>{
     console.log(a*b);
}
console.log(arrowMul(5,5));
*/
/*
const arrowSum = (a, b)=>{
     return a+b;
}
console.log(arrowSum(4,4));
*/
/*
const arrowMul = (a, b)=>{
     return a*b;
}
console.log(arrowMul(5,5));
*/
/*
const helloWorld = ()=> {
     console.log("hello");

};
console.log(helloWorld());
*/
/*
function countVowels(str){
     let count = 0;
     for(let char of str){
          if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
               count++;
          }
          else if(char === "A" || char === "E" || char === "I" || char === "O" || char === "U"){
               count++;
          }
     }
     return count;
}
console.log(countVowels("kAleemullah"));
*/
/*
const countVow = (str)=>{
          let count = 0;
          for(let char of str){
               if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
                    count++;
               }
               else if(char === "A" || char === "E" || char === "I" || char === "O" || char === "U"){
                    count++;
               }
          }
          return count;
     }
     console.log(countVow("kAleemullah"));
     */
    /*
    function abc(){
     console.log("hello");
    }
    function myfunction(abc){
     return abc;
    }
    */
   /*
   let arr = [1,2,3,4,5,6];
   arr.forEach(function printValue(val) {
     console.log(val);
   });
   */
  /*
  let arr = ["Pune", "Mumbai", "lucknow"];
  arr.forEach((val, indx, arr)=> {
     console.log(val.toUpperCase(),indx,arr);
  });
  //
  higher order functions or methods are those functions or methods which take another functions as  a parametter
  or return the the other function as thier value
  */
 /*
 let arr = [1,2,3,4];
 arr.forEach(function findSquare(val){
     console.log(val*val);
 });
*/
/*
 let arr = [1,2,3,4];
 arr.forEach((val)=> {
     console.log(val*val);
 });
 */
/*
 let arr = [1,2,3,4];
  let calcSquare = (val)=> {
     console.log(val*val);
  }
arr.forEach(calcSquare);
*/
/*
function abc(){
     console.log("hello");
    }
    function myfunction(abc){
     return abc;
    }
    console.log(myfunction(abc)());
    */
   /*
   let num = [60,70,80,90];
  let newNum = num.map(val => {
     return(val*val);
   });
   console.log(newNum);
   */
  /*
  let num = [10,20,30,40];
  let newNum = num.map(value=> {
     return value *2;
  })
  console.log(newNum);
*/
/*
let num = [1,2,3,4,5,6,7]
let evenArr = num.filter(value => {
     return value % 2 === 0;
});
console.log(evenArr);
*/
/*
let num =[1,2,3,4,5,6,7]
let oddArr = num.filter(value => {
     return value % 2 !== 0;
});
console.log(oddArr);
*/
let num = [1,2,3,4,5,6,7];
let newArr = num.filter(value => {
     return value > 3;
});
console.log(newArr);