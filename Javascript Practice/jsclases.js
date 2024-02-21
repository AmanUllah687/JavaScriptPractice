// Defining classes in JS
 
// Class based
  /*
  public class Employee {
    public string Name = "";
    public string dept = "general";
  }
  Employee eobj = new Employee();
  console.Writeline(eobj.dept);
  */


  // Prototype based 
  /*
 function Employee() {
    this.Name = "";
    this.dept = "general";
 }
  var eobj = new Employee();
  console.log(eobj.dept);
  */

  // class declarations 
  /*
  class Rectangle {
    constructor(hieght, width) {
        this.hieght = hieght;
        this.width = width;
    }
  }
  console.log(new Rectangle(2,3));
  */


  // Hoisting 
  // hoisting is the javascript default behavior of moving declarations to the top
 /*
  x = 5
  var x;
  console.log(x);  // 5
  */

 /*
 var x;
 x = 5;
 console.log(x);  // 5
 */

 /*
 fName = "Ali"
 lName = "Zaffar"
 var fName, lName;
 console.log(fName, lName);   // Ali Zaffar
 */

 /*
 var fName, lName;
 fName = "Ali"
 lName = "Zaffar"
 console.log(fName, lName);   // Ali Zaffar
 */

 // Varaibles and constants declared with let and const keyword are not hoisted
 /*
 x = 5;
 let x;
 console.log(x); // gives error
 */

/*
x = 5;
const x;
console.log(x); // gives error 
*/



// JS only hoist declarations not initializations
/*
var x = 5;
var y = 7;
console.log(x + y); // 12
*/

/*
var x = 5;
console.log(x + y); // NaN
var y = 7; 
*/

/*
var x = 5;
var y;
console.log(x + y); // NaN
*/

/*
var x = 5;
 y = 7;
 console.log(x + y);  // 12
 var y;
 */

 // an important diffrence between  function declaration & 
 // class declaration  is that function declartions are hoisted and class declarations are not.
  // class declaration
  /*
  var rect = new Rectangle();
  class Rectangle {}
  */
 // output:   Cannot access 'Rectangle' before initialization

 // function declration 
 /*
 var sqr = new Square();
 function Square(a, b) {
  return a *b;
 }
 console.log(Square(3,6)); // 18
 */

 // Defining a class using constructor
// Unnamed
/*
let Rectangle = class {
    constructor(hieght, width) {
        this.hieght = hieght;
        this.width = width;
    }
};
console.log(Rectangle.name);   // Rectangle
*/

// Named
/*
let Rectangle = class Rectangle2 {
    constructor(hieght, width) {
        this.hieght = hieght;
        this.width = width;
    }
};
console.log(Rectangle.name);    // Rectangle2
*/

// Constructors getter methods 
// getter 
/*
class Rectangle {
  constructor(hieght,width) {
    this.hieght = hieght;
    this.width = width;
  }
// getter
 get area(){
  return this.calcArea();
 }
 // Method
 calcArea() {
  return this.hieght * this.width;
 }
}
const square = new Rectangle(10,10);
console.log(square.area);  // 100
console.log(square.calcArea());  // 100
*/

// setter
/*
class Rectangle {
  constructor(hieght,width) {
    this.hieght = hieght;
    this.width = width;
  }
  //getter
  get Hieght() {
    return this.hieght;
  }
  // Setter
  setHieght(hieght) {
    this.hieght = hieght;
  }
}
var rect = new Rectangle(10,20);
console.log(rect.Hieght);
rect.setHieght(20);
console.log(rect.Hieght);
*/

// Static Methods
/*
 class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
 static distance(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.hypot(dx, dy);
 }
}
const p1 = new Point(5,5);
const p2 = new Point(10,10);
p1.distance;
p2.distance;
console.log(Point.distance(p1, p2));
*/
// Public field declarations
/*
class Rectangle {
  hieght = 0;
  width;
  constructor(hieght, width) {
    this.hieght = hieght;
    this.width = width;
  }
  get Hieght() {
      return this.hieght;
  }
  setHieght(hieght) {
    this.hieght = hieght;
  }
}
var rect = new Rectangle(10,15);
console.log(`Hieght of Rectangle is ${rect.Hieght} cm`);
// Hieght of Rectangle is 10 cm
console.log(rect.Hieght);
// 10
rect.setHieght(20);
console.log(rect.Hieght);
// 20
*/
// Private field declarations
/*
class Rectangle {
  #hieght = 0;
  #width;
  constructor(hieght,width) {
    this.#hieght = hieght;
    this.#width = width;
  }
  get Hieght() {
    return this.#hieght;
  }
  setHieght(hieght) {
    this.#hieght = hieght;
  }
}
var rect = new Rectangle(10,15);
console.log(`Hieght of Rectangle is ${rect.Hieght} cm`); // Hieght of rectangle is 10 cm 
console.log(rect.Hieght); // 10
rect.setHieght(25);
console.log(rect.Hieght);
*/

// Inheritance
/*
 class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise`);
  }
 }
 class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  speak() {
    console.log(`${this.name} barks`);
  }
 }
 var d = new Dog(`Random Dog`);
 console.log(d.speak());
*/
  

// solving The Problem of Simple Project Hierarchy
/*
 class Employee {
  constructor(name,dept) {
    this.name = ""
    this.dept = "General"
  }
 }
 class Manager extends Employee {
  
  constructor(reports) {
    reports = [];
    super(reports); 
  }
 }
 class WorkerBee extends Employee {
  constructor(projects) {
    projects = "";
    super(projects);
    this.projects = [""]
  }
 }
  class SalesPerson extends WorkerBee {
    constructor(qouta) {
      qouta = 100;
      super(qouta);
      this.dept = "sales"
    }
  }
  class Engineer extends WorkerBee {
    constructor(machine) {
      machine = "";
      super(machine);
      this.dept = "Engineering";
    }
  }
 var obj = new Engineer();
 const value = obj.dept;
 console.log(value);
 */
 class Calculator {
  constructor (a,b) {
    this.a = a;
    this.b = b;
  }
  Addition() {
    return this.a + this.b;
  }
  Substraction() {
    return this.a - this.b;
  }
  Multiplication() {
    return this.a * this.b;
  }
  getdivide() {
    return this.a / this.b;
  }
 }
 var result = new Calculator(10,5);
 let value  = result.getdivide();
 console.log(value);