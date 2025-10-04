// 1. Functions

// i. Function Declaration

// function with parameter
function sayHello(){ 
    console.log("Hello, Viplav"); // output: Hello, Viplav
}

sayHello();

// function with parameter
function greet(name){ 
    return "Sewaro," + " " + name;
}

console.log(greet("Buba")); // output: Sewaro, Buba

// function with default parameter
function multiply(x, y = 2){
    return x * y;
}

console.log(multiply(5)); // output: 10
console.log(multiply(5,10)); // output: 50

// function returning the string
function getFullName(fullName, lastName){
    return fullName + " " + lastName;
}

console.log(getFullName("Viplav", "Budhathoki")); // output: Viplav Budhathoki

// function used inside another function

function square(num){
    return num * num;
}

function sumOfSquares(a, b){
    return square(a) + square(b);
}

console.log(sumOfSquares(4,5)); // output: 41


// ii. Function Expressions

// function expression with basic

const hello = function(){
    console.log("Hello, its me Viplav.");
}

hello(); // output: Hello, its me Viplav.

// function expression with parameters

const multiplication = function(a, b){
    return a * b;
}

console.log(multiplication(10,10)); // output: 100

// anonymous with default parameter

const wave = function (name = "user"){
    return "Hi," + name;
}

console.log(wave()); // output: Hi, user

// return object

const createUser = function(username, age){
    return {username, age};
};

console.log(createUser("Sankalpa Limbu", 20)); // output: username: Sankalpa Limbu, age: 20

// Function expression inside another

// Higher-order function
const operate = function(a, b, fn) {
    return fn(a, b);
};
// Call it with anonymous function
const result = operate(5, 5, function(x, y) {
    return x + y;
});
console.log(result); // output: 10


// iii. Arrow Function (ES6)

const userName = () => console.log("Hi, I am a successful person.");
userName(); // output: Hi, I am a successful person.

const add = (a, b) => console.log("Addition: ", a + b);
add(5,5); // output: Addition: 10

const squaree = n => n * n;
console.log(squaree(5)); // Output: 25

const getUser = (name, age) => ({ name, age });
console.log(getUser("Yashoda Limbu", 20)); // Output: { name: 'Yashoda Limbu', age: 20 }

const greeting = (name = "Friend") => `Hello, ${name}`;
console.log(greeting());          // Output: Hello, Friend
console.log(greeting("Viplav"));  // Output: Hello, Viplav




// 2. Conditional Statements

// a) if / else if / else

let age = 18;

if (age < 18) {
  console.log("You are underage");
} else if (age === 18) {
  console.log("You just became an adult");
} else {
  console.log("You are an adult");
}

// b) Switch Case

let day = 3;

switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Another day");
}

// Output: Wednesday

// c) Ternary Operator (Short if…else)

let umer = 20;
let status = umer >= 18 ? "Adult" : "Minor";
console.log(status);

// Output: Adult




// 3. Loops

// a) for loop

for (let b = 1; b <= 5; b++) {
  console.log("Number:", b);
}

// b) while loop

let i = 1;
while (i <= 5) {
  console.log("Count:", i);
  i++;
}

// c) for...of (for arrays)

const fruits = ["apple", "banana", "mango"];

for (let fruit of fruits) {
  console.log(fruit);
}

// d) for...in (for objects)

const student = { name: "Viplav", age: 22 };

for (let key in student) {
  console.log(key, ":", student[key]);
}

// e) do…while loop

let a = 1;
do {
    console.log("Iteration " + a);
    a++;
} while (a <= 5);

// break and continue

for (let i = 1; i <= 5; i++) {
    if (i === 3) continue; // skip 3
    if (i === 5) break;    // stop at 5
    console.log(i);
}

// Output:
// 1
// 2
// 4



// Calculator

// Function declaration named 'calculator' with 3 parameters: a, b, and operator
function calculator(a, b, operator) {

    // If operator is '+', perform addition
    if (operator === "+") {
        return a + b;

    // If operator is '-', perform subtraction
    } else if (operator === "-") {
        return a - b;

    // If operator is '*', perform multiplication
    } else if (operator === "*") {
        return a * b;

    // If operator is '/', perform division
    } else if (operator === "/") {

        // Check for division by zero
        if (b === 0) {
            return "Error: cannot be divide by 0"; // Prevents dividing by zero
        }

        return a / b; // Normal division result

    // If operator does not match any valid symbol
    } else {
        return "Invalid Operator"; // Handles unsupported operators like "&"
    }
}

// Function test calls with different operations
console.log(calculator(5, 3, "+"));    // output: 8
console.log(calculator(10, 5, "-"));   // output: 5
console.log(calculator(2, 2, "*"));    // output: 4
console.log(calculator(100, 100, "/"));// output: 1
console.log(calculator(100, 0, "/"));  // output: Error: cannot be divide by 0
console.log(calculator(100, 10, "&")); // output: Invalid operator


