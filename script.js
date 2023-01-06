//Present the prompts and store the answers to a variable
  //Create an array of prompt texts asking which characters they want
  //Loop through the array prompting the user each time and save the response as boolean to another array
  //If all booleans are false then alert user that they must pick something
  //Prompt the user for number of characters - Check if number of characters is outside 10-64 and if it is alert user
  
  
//Generate the password
  //Take the arrays for the character types the user has selected and combine into one array
  //Randomly select the required number of characters from that array
    //For loop that runs for the password length and on each loop randomly generates a number and uses that to select a character from the array
    //Each selected character is appended onto a string held in another variable. Once the loop is done you have the generated password

//Check that the password has the correct characters
  //Run through the string with a find() to see if a character from each of the selected types is in there
  //If one of the finds returns null/undeclared then redo generate password step

//Once password is generated and passed checks, display on screen for user


var characterPromptOptions = [
  'lowercase',
  'uppercase',
  'numeric',
  'special'
]

  
var characterSelections = [false,false,false,false]

var allCharacters = []


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
  specialCharacters,
  numericCharacters,
  lowerCasedCharacters,
  upperCasedCharacters
]

// Function to prompt user for password options
function getPasswordOptions() {
  for (i in characterPromptOptions){
   var answer = prompt("Do you want to include " + i + "characters?");
   characterSelections[i] = answer;
   if (answer === true){
      allCharacters = allCharacters.concat(characterArrays[i])
   }
  }
  if (allCharacters.length === 0){alert("You need to pick at least one character type otherwise what am I going to put in the password?"); getPasswordOptions()}
}

// Function for setting length of password
function getPasswordLength(){
  var passwordLength = prompt("Enter a password length from 10 to 64")
    if(typeOf(passwordLength) =! number){alert("Enter a number!");getPasswordLength()}
    if(passwordLength < 10 || passwordLength > 64){"It's not complicated... The number must be between 10 and 64!";getPasswordLength()}
}

// Function to generate password with user input
function generatePassword() {

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

