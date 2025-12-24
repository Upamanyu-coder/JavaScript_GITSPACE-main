function loginMessage(username) {
  if (!username) {
    console.log("Enter The Name");
    return;
  }
  return `You are logged in as ${username}`;
}

console.log(loginMessage("Yubraj"));
