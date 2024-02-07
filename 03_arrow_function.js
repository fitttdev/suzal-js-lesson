// (parameters) => { function body }


// Traditional function expression
const addTraditional = function(x, y) {
  return x + y;
};

// Arrow function equivalent
const addArrow = (x, y) => x + y;
// Syntactic Sugar
console.log("addTraditional", addTraditional(1, 2));
console.log("addArrow",addArrow(1, 2));
