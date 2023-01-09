// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var characterArrays = [
  lowerCasedCharacters,
  upperCasedCharacters,
  numericCharacters,
  specialCharacters
]
var characterPromptOptions = [
  'lower case',
  'upper case',
  'numeric',
  'special'
]
var characterSelections =[
  false,false,false,false
]

  
var allCharacters = []


// Function to prompt user for password options
// If the user confirms on the prompts then we add the characters for that type to the allCharacters array. We later select the password characters from that array.
// We also change the relating element in characterSelections to true so we can then use that array in checkPassword() to see that the required character types are in the password.
// If the user doesn't choose any of the types then we start the function again
function getPasswordOptions() {
  characterSelections =[false,false,false,false]
  allCharacters = []
  for (i in characterPromptOptions){
    var answer = confirm("Do you want to include " + characterPromptOptions[i] + " characters?");
   if (answer === true){
      allCharacters = allCharacters.concat(characterArrays[i]);
      characterSelections[i] = true
   }
  }
  if (allCharacters.length == 0){alert("You need to choose at least one character type"); getPasswordOptions()};
}

var password = "";
var passwordLength = 0


// Function for setting length of password
// Prompt the user for a password length, if the length is not between 10 or 64 we alert the user and start the function over
function getPasswordLength(){
  passwordLength = 0
  passwordLength = parseInt(prompt("Enter a password length from 10 to 64"));
    if(isNaN(passwordLength)){alert("Enter a number!");getPasswordLength()};
    if(passwordLength < 10 || passwordLength > 64){alert("The number must be between 10 and 64!");getPasswordLength()};
}

// Function to generate password with user input
// We randomly pick a character from the allCharacters array created earlier and add them to a string. Loop through picking a character for the number of loops in the passwordLength variable, so we get the correct number of characters for the password.
// We then run the checkPassword function on the created string to confirm that the password contains at least one of each selected character.
// If the password fails that test, then we run the password generator again.
// I estimate the chance of generating an incorrect password is at most 0.75^10 = 6% (if you want all character types and the minimum password length of 10). So we usually won't have to regenerate the password and very rarely more than twice. In theory though the generator could run forever if you're very unlucky.
function generatePassword() {
  console.log("Generating new password")
  password = "";
    for (let i = 0; i < passwordLength; i++){
      randomPick = Math.floor(Math.random() * (allCharacters.length)) + 0;
      password += allCharacters[randomPick]
    }
  console.log("Generated password is " + password)
  if(checkPassword(password) === false){console.log("Generated password failed test");generatePassword();}
return(password)
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  getPasswordOptions();
  getPasswordLength();
  generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Check that the generated password is suitable
// Searching through the string to check that all the required character types are present, using the characterSelections array to know which types we need.
function checkPassword(password){
  acceptable = true
  for (i in characterSelections){
    if (characterSelections[i] === true){
        console.log("Checking that password includes " + characterPromptOptions[i] + " character")
        var stringIncludesChar = characterArrays[i].some(x => password.includes(x));
        if (stringIncludesChar === false){acceptable = false; console.log("Character type missing")}

      }
    }
  return(acceptable)
  }



// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

