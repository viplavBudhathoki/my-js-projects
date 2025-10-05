// Day 3: Strings & String Methods, Numbers & Math, Mini Projects

// Strings in JavaScript
// string is a sequence of characters enclosed in quotes: " ", ' ', ` ` (template literals).

let name = "Viplav"; // " " can be used for strings
let message = "A hardworking guy"; // ' ' can be used to include double quotes inside the string without escaping
let template = `Welcome, ${name}!`; // ` ` backticks (template literals) can be used for variable interpolation, multi-line strings and expressions inside strings
// template literal with variable interpolation

// Basic String Properties

let str = "Javascript";

console.log(str.length); // output: 10
console.log(str[0]); // output: J
console.log(str[str.length-1]) // output: t
console.log(str.toUpperCase()); // output: JAVASCRIPT
console.log(str.toLowerCase()); // output: javascript
// string.includes(substring, startIndex)
console.log(str.includes("z")); // output: false
console.log(str.includes("Java",0)); // output: true
console.log(str.includes("script")); // output: true
// string.startsWith(substring, position)
console.log(str.startsWith("java")); // output: false
console.log(str.startsWith("script",5)); // output: false
console.log(str.startsWith("Java",0)); // output: true
console.log(str.startsWith("Script",4)); // output: false
// string.indexOf(substring, startIndex)
console.log(str.indexOf("a")); // output: 1
console.log(str.indexOf("a",2)) // output: 3
console.log(str.indexOf("t")) // output: 9
// string.slice(start, end)
console.log(str.slice(0)); // output: Javascript
console.log(str.slice(3,5)); // output: as
console.log(str.slice(4)); // output: script
console.log(str.slice(-6)); // output: script
// string.replace(oldSubstring, newSubstring)
console.log(str.replace("script", "rana")); // output: Javarana
console.log(str.replace("a", "u")); // output: Juvarana
let newStr = str.slice(0, 3) + "u" + str.slice(4); 
console.log(newStr)// output: Javuscript
// string.split(separator, limit)
let words = str.split(" ");
console.log(words); // output: ['Javascript']
let letters = str.split("a");
console.log(letters); // output: ['J', 'v', 'script']
let limited = str.split(" ", 1);
console.log(limited); // output: ['Javascript']
// string.trim()
let stri = "    Java Script   "
console.log(stri.trim()); // output: Java Script
console.log(stri.length); // output: 18
let trimmed = stri.trim();
console.log(trimmed); // output: Java Script
console.log(trimmed.length) // output: 11

// Numbers & Math

// Basic Math Operations

let a = 10;
let b = 3;
console.log(a + b); // output: 13
console.log(a - b); // output: 7
console.log(a * b); // output: 30
console.log(a / b); // output: 3.3333333333
console.log(a % b); // output: 1 → remainder

console.log(Math.round(3.6)); // output: 4 → rounds to nearest integer
console.log(Math.floor(3.9)); // output: 3 → rounds down
console.log(Math.ceil(3.1));  // output: 4 → rounds up
console.log(Math.pow(2, 3));  // output: 8 → 2^3
console.log(Math.sqrt(16));   // output: 4 → square root
console.log(Math.abs(-5)); // output: 5 → ignores negative sign
console.log(Math.min(2, 5, 1)); // output: 1 → smallest number
console.log(Math.max(2, 5, 1)); // output: 5 → largest number

console.log(Math.random());  // Output: random decimal between 0 and 1
console.log(Math.floor(Math.random() * 10)); // Output: random integer from 0 to 9 // Explanation: Math.random() * 10 gives decimal 0–10, Math.floor() rounds down to nearest integer
console.log(Math.floor(Math.random() * 10) + 1); // Output: random integer from 1 to 10 // Explanation: same as above, but +1 shifts the range from 0–9 to 1–10
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  // Generates random integer between min and max (inclusive)
  // Step 1: Math.random() → decimal 0–1
  // Step 2: Multiply by (max - min + 1) → range length
  // Step 3: Math.floor() → round down to integer 0–(max-min)
  // Step 4: + min → shift to desired range min–max
}
console.log(getRandom(50, 100)); // Output: random integer between 50 and 100 inclusive, e.g., 73, 50, 100



// Mini Projects

// Word Counter -> Count how many words are in: "I will be successful developer"

let count = "I will be successful developer";
// 'count' stores the sentence we want to analyze

let eachWords = count.trim().split(" ");
// Step 1: count.trim() → removes any extra spaces at the start and end of the string
// Step 2: .split(" ") → splits the string into an array of words wherever there is a space
// Result: eachWords = ["I", "will", "be", "successful", "developer"]

console.log(eachWords.length);
// Output: 5
// Explanation: .length is a property of the array that tells how many elements it has
// Here, it gives the number of words in the sentence


// Guess the Number Game -> Let the user guess a random number between 1 and 10.

let randomNumber = Math.floor(Math.random() * 10) + 1; 
// Random number between 1 and 10 is picked by the computer

let guess = parseInt(prompt("Guess a number between 1 to 10")); 
// Ask the user to guess a number

if (guess === randomNumber){
    alert("Correct! You guessed the number."); 
    // If guess is right, show success
} else {
    alert(`Wrong! The number was ${randomNumber}`); 
    // If guess is wrong, show the correct number
}

// Calculator Program

// Get the input element where the display will show numbers and results
const display = document.getElementById("display");

// Append the clicked number or operator to the display
function appendToDisplay(input){
  display.value += input; // Add input to current display value
}

// Clear the display
function clearDisplay(){
  display.value = ""; // Reset display to empty
}

// Calculate the result of the expression in the display
function calculate(){
  try{
    display.value = eval(display.value); // Evaluate the expression
  } catch (error){
    display.value = "Error"; // Show error if the expression is invalid
  }
}


