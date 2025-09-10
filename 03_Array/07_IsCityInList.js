let citiesName = ["Kathmandu", "Pokhara", "Lalitpur", "Biratnagar", "Birgunj"];

let isCityInList = citiesName.includes("Pokhara"); // Check if the city is in the list
console.log(isCityInList); // true

isCityInList = citiesName.includes("pokhara");
console.log(isCityInList); // false
