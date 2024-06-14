console.log(varVariable); // Output: undefined
var varVariable = 10;

console.log(letVariable); // Uncaught ReferenceError: Cannot access 'letVariable' before initialization
let letVariable = 20;

console.log(constVariable); // Uncaught ReferenceError: Cannot access 'constVariable' before initialization
const constVariable = 30;
