let unCountry = ["Nepal", "India", "China", "USA", "UK"];
let euCountry = ["France", "Germany", "Italy", "Spain", "Greece"];

// Merging two arrays using concat() method
let worldCountry = unCountry.concat(euCountry);
console.log(worldCountry);

// Merging two arrays using spread operator
let worldCountry2 = [...unCountry, ...euCountry];
console.log(worldCountry2);

console.log(worldCountry.length);
console.log(typeof worldCountry2);
