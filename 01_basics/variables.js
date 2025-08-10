const accountID = 620224;
let employeeName = "Kreetika";
var accountPassword = "Kreetika@123";
employeeCity = "Bangalore";

/*
  const, let, var
  const - used for constants, cannot be reassigned
  let - used for variables that can be reassigned
  var - used for variables that can be reassigned, but has function scope
  Prefer to use const for constants and let for variables that can change.

  const is block scoped, let is block scoped, var is function scoped.

  
Prefer not use to var
  because of issue in block and function scope
    */

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

console.table([accountID, employeeName, accountPassword, employeeCity]);
