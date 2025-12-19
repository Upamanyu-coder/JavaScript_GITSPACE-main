/* write a do..while loop that prompts the user to enter
 their favorite tea until they enter "quit". 
 Store each tea in an array named teas. After the loop, 
 log the teas array to the console. */

let teas = [];
let tea;

do {
  tea = prompt("Enter your favorite tea (type 'quit' to stop):");

  if (tea !== "quit") {
    teas.push(tea);
  }
} while (tea !== "quit");

console.log(teas);
