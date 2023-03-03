function login(input) {
  let index = 0;
  let userName = input[index];
  index++;

  let reverseUser = userName.split("");
  let reverseAdditionallyUser = reverseUser.reverse();
  let password = reverseAdditionallyUser.join("");
  let correctPassword = input[index];
  index++;

  for (let i = 1; i <= 4; i++) {
    if (i === 1 && correctPassword !== password) {
      console.log("Incorrect password. Try again.");
      correctPassword = input[index];
      index++;
    } else if (i === 2 && correctPassword !== password) {
      console.log("Incorrect password. Try again.");
      correctPassword = input[index];
      index++;
    } else if (i === 3 && correctPassword !== password) {
      console.log("Incorrect password. Try again.");
      correctPassword = input[index];
      index++;
    } else if (i === 4 && correctPassword !== password) {
      console.log(`User ${userName} blocked!`);
      correctPassword = input[index];
      index++;
    } else {
      console.log(`User ${userName} logged in.`);
      break;
    }
  }
}
login(["momo", "omom"]);
