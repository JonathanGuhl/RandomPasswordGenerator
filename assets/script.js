// Global variables ------ Lines 2-14
var generateBtn = document.querySelector("#generate");

var passwordLength;
var upperCaseConfirmation;
var lowerCaseConfirmation;
var numbersConfirmation;
var specialConfirmation;
var userChoices;

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var special = ["!", "(", ")", "?", "[", "]", "`", "~", ";", ":", "#", "$", "%", "^", "&", "*", "+", "="];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Creates prompt when you click on the "Generate Password" button
generateBtn.addEventListener("click", writePassword);

// First Prompt after clicking the button --------- (ALL PROMPTS CODE LINES 27-50!)
function generatePassword() {
passwordLength = prompt("Enter your desired password length. Pick anything between 8 and 128 and then answer the questions. You must select at least one character type for a password to generate. ")
  console.log("Password Length " + passwordLength);

// Alert if no input is registered
  if (!passwordLength) {
    alert("Password length wasn't specified!")
  }
//Prompt in case the user doesnt follow the password length criteria
  else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must select a password length between 8 and 128 characters.")
  }
//When the password length criteria is realized, the user it met with a series of prompts relating to potential desired password characters
  else {
    numbersConfirmation = confirm("Would you like your password to contain numbers?");
    console.log("Did user add numbers? " + numbersConfirmation);
    specialConfirmation = confirm("What about special characters?");
    console.log("Did user add special characters? " + specialConfirmation);
    upperCaseConfirmation = confirm("Want to add upper case letters?");
    console.log("Did user add upper case letters? " + numbersConfirmation);
    lowerCaseConfirmation = confirm("Last but not least, would you like lower case letters?");
    console.log("Did user add lower case letters? " + numbersConfirmation);

  };

// In case the user selects nothing to be added, they'll be alerted to select at least one 
  if (!numbersConfirmation && !specialConfirmation && ! upperCaseConfirmation && !lowerCaseConfirmation) {
     userChoices = alert("You must select on category");
    console.log(userChoices);
  }

// All options selected
  else if (lowerCaseConfirmation && upperCaseConfirmation && numbersConfirmation && specialConfirmation) {
    userChoices = lowerCase.concat(upperCase, special, numbers);
    console.log(userChoices);
  }
// Three options selected ------- LINES 64-83;
  else if (lowerCaseConfirmation && upperCaseConfirmation && numbersConfirmation) {
  userChoices = lowerCase.concat(upperCase, numbers);
  console.log(userChoices);
  }

  else if (lowerCaseConfirmation && upperCaseConfirmation && specialConfirmation) {
  userChoices = lowerCase.concat(upperCase, special);
  console.log(userChoices);
  }

  else if (lowerCaseConfirmation && specialConfirmation && numbersConfirmation) {
  userChoices = lowerCase.concat(special, numbers);
  console.log(userChoices);
  }

  else if (upperCaseConfirmation && specialConfirmation && numbersConfirmation) {
  userChoices = upperCase.concat(special, numbers);
  console.log(userChoices);
  }
// Two options selected ------ Lines 84-113
  else if (lowerCaseConfirmation && upperCaseConfirmation) {
    userChoices = lowerCase.concat(upperCase);
    console.log(userChoices);
  }

  else if (lowerCaseConfirmation && numbersConfirmation) {
    userChoices = lowerCase.concat(numbers);
    console.log(userChoices);
  }

  else if (lowerCaseConfirmation && specialConfirmation) {
    userChoices = lowerCase.concat(special);
    console.log(userChoices);
  }

  else if (upperCaseConfirmation && numbersConfirmation) {
    userChoices = upperCase.concat(numbers);
    console.log(userChoices);
  }

  else if (upperCaseConfirmation && specialConfirmation) {
    userChoices = numbers.concat(special);
    console.log(userChoices);
  }

  else if (specialConfirmation && numbersConfirmation) {
    userChoices = special.concat(numbers);
    console.log(userChoices);
  }

// One option selected ------- Lines 115-134
  else if (lowerCaseConfirmation) {  
    userChoices = lowerCase;
    console.log(userChoices);
  }

  else if (upperCaseConfirmation) {  
    userChoices = upperCase;
    console.log(userChoices);
  }

  else if (specialConfirmation) {  
    userChoices = special;
    console.log(userChoices);
  }

  else if (numbersConfirmation) {  
    userChoices = numbers;
    console.log(userChoices);
  }
// // Two options selected ------ Lines 83-111 ------ ***** starting all option groups with lowerCase to make it more uniform ******* 
//   else if (lowerCaseConfirmation && upperCaseConfirmation) {
//     userChoices = lowerCase.concat(upperCase);
//     console.log(userChoices);
//   }

//   else if (lowerCaseConfirmation && numbersConfirmation) {
//     userChoices = lowerCase.concat(numbers);
//     console.log(userChoices);
//   }

//   else if (lowerCaseConfirmation && specialConfirmation) {
//     userChoices = lowerCase.concat(special);
//     console.log(userChoices);
//   }

//   else if (upperCaseConfirmation && numbersConfirmation) {
//     userChoices = upperCase.concat(numbers);
//     console.log(userChoices);
//   }

//   else if (upperCaseConfirmation && specialConfirmation) {
//     userChoices = numbers.concat(special);
//     console.log(userChoices);
//   }

//   else if (specialConfirmation && numbersConfirmation) {
//     userChoices = special.concat(numbers);
//     console.log(userChoices);
//   }
// // Three options selected ------- LINES 113-131;
//   else if (lowerCaseConfirmation && upperCaseConfirmation && numbersConfirmation) {
//     userChoices = lowerCase.concat(upperCase, numbers);
//     console.log(userChoices);
//   }

//   else if (lowerCaseConfirmation && upperCaseConfirmation && specialConfirmation) {
//     userChoices = lowerCase.concat(upperCase, special);
//     console.log(userChoices);
//   }

//   else if (lowerCaseConfirmation && specialConfirmation && numbersConfirmation) {
//     userChoices = lowerCase.concat(special, numbers);
//     console.log(userChoices);
//   }

//   else if (upperCaseConfirmation && specialConfirmation && numbersConfirmation) {
//     userChoices = upperCase.concat(special, numbers);
//     console.log(userChoices);
//   }
// // All options selected
//   else if (lowerCaseConfirmation && upperCaseConfirmation && numbersConfirmation && specialConfirmation) {
//     userChoices = lowerCase.concat(upperCase, special, numbers);
//     console.log(userChoices);
//   };

  var passwordGeneration = [];
// for loop to generate random characters ---- var passwordGeneration referenced line 15
  for (var i = 0; i < passwordLength; i++) {
  var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
  passwordGeneration.push(allChoices);
  console.log(allChoices);
}

// Displays the password 
var password = passwordGeneration.join("");
console.log("Your new password is " + password)
return password;

};

