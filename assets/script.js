var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
var choices;

punctuation = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
uppercase = ['A', 'B','C' ,'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var generateBtn = document.querySelector('#generate');

generateBtn.addEventListener('click', function () {
  ps = generatePassword();
  document.getElementById('#password').placeholder = ps;
});

function generatePassword() {
  enter = parseInt(prompt('How many characters? 8-32'));
  
    if (!enter) {
      alert('This needs a value')
    } 
    else if (enter < 8 || enter > 32) {
      enter = parseInt(prompt('You must enter a value between 8 and 32'));
    } else {
        confirmUppercase = confirm('Generate with Uppercase Characters?');
        confirmLowercase = confirm('Generate with Lowercase Characters?');  
        confirmCharacter = confirm('Generate with Special Characters?');
        confirmNumber = confirm('Generate with Numbers?');
    };

    if (!confirmUppercase && !confirmLowercase && !punctuation && !numbers) {
      choices = alert('You must choose a criteria.');
    } 
    else if (confirmUppercase && confirmLowercase && punctuation && numbers){
      choices = lowercase.concat(uppercase, numbers, punctuation);
    } 
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
      choices = puncuation.concat(number, uppercase);
    } 
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = puncuation.concat(number, lowercase);
    } 
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = puncuation.concat(lowercase, uppercase);
    } 
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(lowercase, uppercase);
    } 
    else if (confirmCharacter && confirmNumber) {
        choices = puncuation.concat(number);
    } 
    else if (confirmCharacter && confirmLowercase) {
        choices = puncuation.concat(lowercase);
    } 
    else if (confirmCharacter && confirmUppercase) {
        choices = puncuation.concat(uppercase);
    } 
    else if (confirmLowercase && confirmNumber) {
        choices = lowercase.concat(number);
    } 
    else if (confirmLowercase && confirmUppercase) {
        choices = lowercase.concat(uppercase);
    } 
    else if (confirmNumber && confirmUppercase) {
        choices = number.concat(uppercase);
    } 
    else if (confirmCharacter) {
      choices = puncuation;
    } 
    else if (confirmNumber) {
        choices = number;
    } 
    else if (confirmLowercase) {
        choices = lowercase;
    } 
    else if (confirmUppercase) {
        choices = space.concat(uppercase);
    };

    var password = [];
    
    for (var i = 0; i < enter; i++) {
      var pickChoices = choices[Math.floor(Math.random() * choices.length)];
      password.push(pickChoices);
    }

    var ps = password.join('');
    writePassword(ps);
    return ps;
}

function writePassword(ps) {
  document.querySelector('#password').textContent = ps;
}

// console.log(ps);