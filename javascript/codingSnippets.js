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
