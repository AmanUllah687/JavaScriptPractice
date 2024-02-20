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
