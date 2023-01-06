//Present the prompts and store the answers to a variable
  //Create an array of prompt texts asking which characters they want
  //When user selects characters, add those to a combined array
  //If combined array is empty, user must select again
  //Prompt the user for number of characters - Check if number of characters is outside 10-64 and if it is alert user
  
  
//Generate the password
  //Randomly select the required number of characters from the combined array
    //For loop that runs for the password length and on each loop randomly generates a number and uses that to select a character from the array
    //Each selected character is appended onto a string held in another variable. Once the loop is done you have the generated password

//Check that the password has the correct characters
  //Run through the string with a find() to see if a character from each of the selected types is in there
  //If one of the finds returns null/undeclared then redo generate password step

//Once password is generated and passed checks, display on screen for user





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

  
var allCharacters = []

// Function to prompt user for password options
function getPasswordOptions() {
  allCharacters = []
  for (i in characterPromptOptions){
    var answer = confirm("Do you want to include " + characterPromptOptions[i] + " characters?");
   if (answer === true){
      allCharacters = allCharacters.concat(characterArrays[i]);
   }
  }
  if (allCharacters.length == 0){alert("You need to choose at least one character type otherwise what am I going to put in the password?"); getPasswordOptions()};
}

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
    var password = "";
    getPasswordOptions();
    getPasswordLength();
    for (let i = 0; i < passwordLength; i++){
      randomPick = Math.floor(Math.random() * (allCharacters.length - 1)) + 0;
      password += allCharacters[randomPick]
    }
return(password)
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

