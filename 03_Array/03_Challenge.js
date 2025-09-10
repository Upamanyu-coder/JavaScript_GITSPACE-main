let CityViseted = ["Kathmandu", "Pokhara", "Lalitpur", "Biratnagar", "Birgunj"];
CityViseted[CityViseted.length] = "Butwal"; // Its a old way to add new element in array
console.log(CityViseted);

// Modern way to add new element in array
CityViseted.push("Dhangadhi");
console.log(CityViseted);
