// Question: Write a 'for' loop that multiplies each elements in the array '[2,4,6]' by 2 and logs the result in a new array named 'multipliedNumbers'.
let numbers = [2, 4, 6];
let multipliedNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  multipliedNumbers.push(numbers[i] * 2);
}

console.log(multipliedNumbers);
