// Assignment Code
var generateBtn = document.querySelector("#generate");

// Random number function
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// Array to add characters from generatePassword function to
var randomPassword = [];

// Generate the passoword text
function generatePassword() {
  var charactersNum = prompt("Enter desired password length:"); 
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var special = ["!", "@", "#", "$", "%", "&", "?"];

  for(var i = 0; i < charactersNum; i++) {
    var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var special = ["!", "@", "#", "$", "%", "&", "?"];
    var characters = [lowerCase, upperCase, num, special];
    var cat = characters[random(0, characters.length-1)];
    randomPassword.push(cat[random(0, cat.length-1)]);
  }
}

// Write password to the #password input

function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = randomPassword.join("");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
