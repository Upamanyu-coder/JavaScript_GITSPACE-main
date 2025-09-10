let CityViseted = ["Kathmandu", "Pokhara", "Lalitpur", "Biratnagar", "Birgunj"];

let hardCopyCity = CityViseted;
// CityViseted.pop();
// console.log(hardCopyCity);

// Solution: Use the spread operator to create a shallow copy of the array
let softCopyCity = [...CityViseted];
CityViseted.pop();
console.log(softCopyCity);
console.log(CityViseted);
