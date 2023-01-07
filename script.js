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
function getPasswordLength(){
  passwordLength = 0
  passwordLength = parseInt(prompt("Enter a password length from 10 to 64"));
    if(isNaN(passwordLength)){alert("Enter a number!");getPasswordLength()};
    if(passwordLength < 10 || passwordLength > 64){alert("The number must be between 10 and 64!");getPasswordLength()};
}

// Function to generate password with user input
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

