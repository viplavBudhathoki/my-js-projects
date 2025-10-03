/* Day 1 of JS Practice  */

// Variables

let userName = "Viplav Budhathoki";
const birthYear = 2002;

console.log("Name: " + userName);
console.log("Date of Birth: " + birthYear);

// Data Types

const Nurse = {name: "Sankalpa Limbu", age: 20}; // objects
const fruits = ["strawberries", "bananas", "blueberries", "mangoes", "avocados"]; // array
let age = 20; // number
let isNurse = true; // boolean
let city = "Dharan"; //string

console.log(Nurse);
console.log(fruits);
console.log(age, isNurse, city);

// Operators

let a = 15;
let b = 5;

console.log("Addition: ", a + b);
console.log("Subtraction: ", a - b);
console.log("Multiplication: ", a * b);
console.log("Division: ", a / b );
console.log("Modulus: ", a % b);

// Arrays

fruits.push("apples"); // adding fruit apples in the fruits array
console.log("After push: ", fruits);

fruits[1] = "grapes"; // changing element
console.log("After change: ", fruits);

fruits.pop(); // pop removes the last element
console.log("After pop: ", fruits);

console.log(fruits.includes("papayas")); // checking if the element exists or not

// Objects

Nurse.name = "Yasodha";
Nurse.age = 21;
console.log("After changing the properties: ", Nurse);

// Changing the multiple properties at once
// Object.assign(target, ...sources)
// target → the object you want to modify.
// sources → one or more objects whose properties you want to copy into the target.
// Returns the modified target.

Object.assign(Nurse, {name: "Sankalpa", age: 20});
console.log("After Object.assign: ", Nurse);

let student = {name: "Viplav Budhathoki", age: 22};
student = {name: "Sangram Budhathoki", age: 23}; // reassigning the variable

// Objects + Arrays Together

const persons = [
    {name: "Viplav Budhathoki", age: 22},
    {name: "Sankalpa Limbu", age: 20}
]

console.log(persons[0].name); // Viplav Budhathoki
persons[1].age = 21; // changing age property of Sankalpa Limbu
console.log(persons[1]); // name: "Sankalpa Limbu", age: 21

// adding a new object (person) into the persons array
persons.push({name: "Yasodha Limbu", age: 21});
console.log("After adding the new person: ", persons);

//Login Form
const form = document.getElementById("login-form");

form.addEventListener("submit", function(e){
    e.preventDefault();

const usernameInput = document.getElementById("username").value;
const passwordInput = document.getElementById("password").value;

if(usernameInput === "" || passwordInput === ""){
    document.getElementById("message").innerText = "Please fill all fields!";
} else {
    document.getElementById("message").innerText = "Login Successful!";
}

});



 