const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
//let slicedLetters1 = str.slice(0,3);
//let slicedLetters2 = str.slice(3);
//console.log(slicedLetters1);
//console.log(slicedLetters2)
//let pigLatin = slicedLetters2 + slicedLetters1;
//console.log(pigLatin);

//Use a template literal to print the original and modified string in a descriptive phrase.
//console.log(`${str} in piglatin looks like this: ${pigLatin}.`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let numberToSlice = input.question("How many letters should we relocate?");
 let slicedInput = str.slice(0,numberToSlice);
console.log(slicedInput);
let slicedInput2 = str.slice(numberToSlice);
console.log(slicedInput);
let pigLatin2 = slicedInput2 +slicedInput;
console.log(pigLatin2);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
