// Assignment Code
var generateBtn = document.querySelector("#generate");

// Random number function
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// Array to add characters from generatePassword function to
var randomPassword = [];

// Generate the password text
function generatePassword() {
  var charactersNum = prompt("Enter desired password length:"); 
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var special = ["!", "#", "$", "%", "&",  "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "{", "|", "}", "~"];
  var characters = [];

  if (charactersNum > 128 || charactersNum < 8) {
    alert("Password must be between 8 and 128 characters.")
    generatePassword();
  } else {
    if (window.confirm("Click 'okay' to include LOWER CASE letters.")) {
      characters = lowerCase.concat(characters);
    }
    if (window.confirm("Click 'okay' to include UPPER CASE letters.")) {
      characters = upperCase.concat(characters);
    }
    if (window.confirm("Click 'okay' to include numbers.")) {
      characters = num.concat(characters);
    }
    if (window.confirm("Click 'okay' to include special characters.")) {
      characters = special.concat(characters);
    }
    if (characters.length < 1) {
      alert("Please include at least one type of character. ");
      generatePassword();
    } else {
      for(var i = 0; i < charactersNum; i++) {
        randomPassword.push(characters[random(0, characters.length-1)]);
      }
    }
  }
}

// Write password to the #password input

function writePassword() {
  randomPassword = [];
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = randomPassword.join("");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
