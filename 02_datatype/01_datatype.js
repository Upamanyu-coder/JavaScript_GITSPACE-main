"use strict"; // treat all JS Code as newer ECMAScript version
// alert("Hello, World!"); // we are using nodejs, not browser, so this will not show

let a = 10;
let b = 20;

let c = a + b; // Addition
let sub = a - b; // Subtraction
let mul = a * b; // Multiplication
let div = a / b; // Division
let mod = a % b; // Modulus
let s = null;

console.log("Addition of a and b is: " + c);
console.log("Subtraction of a and b is: " + sub);
console.log("Multiplication of a and b is: " + mul);
console.log("Division of a and b is: " + div);
console.log("Modulus of a and b is: " + mod);
console.log("");
console.log("");
console.log("Value of a is: " + a);
console.log("Value of b is: " + b);
console.log("Value of c is: " + c);
console.log("Value of sub is: " + sub);
console.log("Value of mul is: " + mul);
console.log("Value of div is: " + div);
console.log("Value of mod is: " + mod);
console.log("");
console.log("Type of a is: " + typeof a);

console.table([
  a,
  b,
  c,
  sub,
  mul,
  div,
  mod,
  typeof a,
  typeof b,
  typeof c,
  typeof sub,
  typeof mul,
  typeof div,
  typeof mod,
  typeof s,
  typeof null,
  typeof undefined,
]);
