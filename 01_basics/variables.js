const accountID = 620224;
let employeeName = "Kreetika";
var accountPassword = "Kreetika@123";
employeeCity = "Bangalore";

console.log("Account ID:", accountID);
console.log("Employee Name:", employeeName);

employeeName = "Kreetika Sharma";
console.log("Updated Employee Name:", employeeName);
console.table([
  " OLD Account ID:",
  accountID,
  "OLD Employee Name : ",
  employeeName,
  "OLD  Account Password:",
  accountPassword,
  "OLD  Employee City:",
  employeeCity,
]);

accountPassword = "Kreetika@1234";
employeeCity = "Bangalore, India";
console.table([
  " UPDATED Account ID:",
  accountID,
  "UPDATED Employee Name : ",
  employeeName,
  "UPDATED Account Password:",
  accountPassword,
  "UPDATED Employee City:",
  employeeCity,
]);
