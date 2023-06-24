// function sayHi() {
//   console.log(name);
//   console.log(age);
//   var name = 'Lydia';
//   let age = 21;
// }

// console.log(sayHi());

// <--------------------------->

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

// <--------------------------->
// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius,
// };

// console.log(shape.diameter());
// console.log(shape.perimeter());

// <--------------------------->

// +true;
// !'Lydia';

// <--------------------------->

// const bird = {
//   size: 'small',
// };

// const mouse = {
//   name: 'Mickey',
//   small: true,
// };

// <--------------------------->
// let c = { greeting: 'Hey!' };
// let d;

// d = c;
// c.greeting = 'Hello';
// console.log(d.greeting);


//<---------------------------->
// let a = 3;
// let b = new Number(3);
// let c = 3;

// console.log(a == b);
// console.log(a === b);
// console.log(b === c);

//<---------------------------->

// class Chameleon {
//   static colorChange(newColor) {
//     this.newColor = newColor;
//     return this.newColor;
//   }

//   constructor({ newColor = 'green' } = {}) {
//     this.newColor = newColor;
//   }
// }

// const freddie = new Chameleon({ newColor: 'purple' });
// console.log(freddie.colorChange('orange'));

//<------------------------------------->

// let greeting;
// greetign = {}; // Typo!
// console.log(greetign);


//<-------------------------------------->

// function bark() {
//   console.log('Woof!');
// }

// bark.animal = 'dog';


//<----------------------------------------->
// function bark() {
//   console.log("Woof!");
// }

// bark.animal = "dog";

//<----------------------------------------->
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const member = new Person("Lydia", "Hallie");
// Person.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// console.log(member.getFullName());

//TypeError

//<----------------------------------------->
// All object have prototypes.
// A: true
// B: false
// Answer
// Answer: B
// All objects have prototypes, except for the base object. 
// The base object is the object created by the user, or
//  an object that is created using the new keyword. 
//  The base object has access to some methods and properties, 
//  such as .toString. This is the reason why you can use built-in 
//  JavaScript methods! All of such methods are available on the prototype. 
//  Although JavaScript can't find it directly on your object, it goes down 
//  the prototype chain and finds it there, which makes it accessible for you.