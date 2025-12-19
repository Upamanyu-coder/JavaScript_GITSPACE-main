// storing 0- 99 in an array named numbers.

let numbers = [];
let i = 0;

while (i < 100) {
  if (i % 2 === 0) {
    numbers.push(i);
  }
  i++;
  console.log(numbers);
}
