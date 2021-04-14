// string methods

const myString = 'I am a string. ';

const replaceStringWithWord = myString.replace('string', 'word');  // i am a word.
const indexOfI = myString.indexOf('i'); //10
const lastIndexOfi = myString.lastIndexOf('i');  //10
const arrayOfLetters = myString.split('');  //[]...]
const includesWordString = myString.includes('string'); // true
const stringLength = myString.length; //27
const stringPad = myString.padEnd(20, '-');   // o a, a string.-
const justASlice = myString.slice(5, 9); // "a st"
const removeWhiteSpace = myString.trim(); 



console.log(myString.toLowerCase)

//pop up methods

const myAlertValue = alert('this is a pop up'); //undefined
const myConfirmValue = confirm('Are you sure?');  //true
const myPromptValue = prompt('What is your name?');  // "V"
console.log(myAlertValue, myConfirmValue, myPromptValue);

// math properties
const random = Math.random() * 10;
const floored = Math.floor(random);

console.log(floored);

const ceiling = Math.ceil(random);
console. log(ceiling);


// date objects

