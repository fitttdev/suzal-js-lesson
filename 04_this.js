// Node.js Environment:
// In Node.js, the behavior of this largely depends on how a 
// function is called. If a function is called as a method
//  of an object, this refers to the object itself. Otherwise,
//  in the global context or when called using call() or apply(),
//  this refers to the global object (global in Node.js).

const obj0 = {
  name: 'Suzal',
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  }
};

obj0.greet();

// Browser Environment:
// 1. Global Object: In the global context of a browser environment,
//  this refers to the global object (window in browsers).

// 2. Event Handlers: When a function is used as an event handler, 
// this typically refers to the element that triggered the event.


// 3. Method Invocation/Class:
// If a function is called as a method of an object, this typically 
// refers to the object itself/class.

class ThisClass {
  constructor() {
    this.name = 'Nima';
  }
  greet() {
    console.log(`Hello, ${this.name}!`);
  }
}


class Lesson {
  constructor() { }
  greet() {

  }
}

const l = new Lesson()
