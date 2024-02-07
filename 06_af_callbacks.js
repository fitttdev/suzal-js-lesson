// Array of numbers
// Idea is that arrow func and callback can be used together.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100000000];

// Traditional function declaration as a callback
function isEven(num) {
  return num % 2 === 0;
}

const evenNumbers1 = numbers.filter(isEven);
console.log("Even numbers (traditional function):", evenNumbers1);

// Arrow function as a callback

const evenNumbers2 = numbers.filter(num => calllback(isEven(num)));
console.log("Even numbers (arrow function):", evenNumbers2);
