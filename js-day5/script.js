/* Revision Plan: Day 3 & Day 4
   
Part 1 – Strings & Arrays (Day 3)
Goal: Understand how to work with text and lists of data.

Key Concepts to Review:

String methods – .length, .toUpperCase(), .toLowerCase(), .slice(), .substring(), .replace()
Array basics – indexing, push(), pop(), shift(), unshift()
Array methods – map(), filter(), reduce(), forEach(), includes()
Converting between string and array – .split() and .join()

Practice Tasks:
1. Write a function that capitalizes the first letter of a string.
2. Create an array of fruits and use map() to make them uppercase.
3. Filter numbers greater than 10 from an array.
4. Find the sum of numbers using reduce().
5. Join an array of words into a full sentence. */

// Exercise

// 1. Write a function that capitalizes the first letter of a string.

/* let name = "viplav budhathoki";

function capitalizeName(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalizeName(name)); */

let name = "sankalpa limbu";

function capitalizeEachWord(str){
    return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

console.log(capitalizeEachWord(name)); // output: Sankalpa Limbu

// 2. Create an array of fruits and use map() to make them uppercase.

const fruits = ["apple", "grapes", "orange", "banana"];

function fruitCapitalize(f){
    return f
    .map(falful => falful.charAt(0).toUpperCase() + falful.slice(1))
    .join(" ")
}

console.log(fruitCapitalize(fruits)); // output: Apple Grapes Orange Banana

// 3. Filter numbers greater than 10 from an array.

let num = [2, 10, 55, 8, 100, 9];

function filterNum(n){
    return n
    .filter(nums => nums > 10)
}

console.log(filterNum(num)); // output: [55, 100]

// 4. Find the sum of numbers using reduce().

/* array.reduce((accumulator, currentValue) => {
  return updatedAccumulator;
}, initialValue); */


let numb = [2, 4, 5, 8];

function sumNum(n){
    return n.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(sumNum(numb)); // output: 19

// 5. Join an array of words into a full sentence.

let words = ["My", "name", "is", "Viplav", "Budhathoki"];

function join(word){
    return word
    .join(" ")
}

console.log(join(words));


/* Part 2 – Objects & Nested Objects (Day 4)

Goal: Learn how to store and access structured data.

Key Concepts to Review:

Object creation and property access (.property, ["property"])
Adding, updating, and deleting properties
Nested objects – accessing values inside objects within objects
Looping through objects (for...in, Object.keys(), Object.values())
Array of objects (used in APIs and JSON data)

Practice Tasks:

Create an object student with name, age, and course.
Add a new property grade = "A".
Create a nested object inside student for address (city, country).
Log student.address.city.
Create an array of 3 students and print all their names using a loop. */

// Exercise

// 1. Create an object student with name, age, and course. Add a new property grade = "A".

const student = [
    {name: "Viplav Budhathoki", age: 22, course: "BIT"},
    {name: "Sankalpa Limbu", age: 20, course: "PCL"},
    {name: "Sangram Budhathoki", age: 18, course: "BBA"}
]

// student[0].grade = "A"; // for single student of index 0

student.forEach(s => s.grade = "A");// for each student

console.log(student);

// Create a nested object inside student for address (city, country). Log student.address.city.

const std = 
    {name: "Viplav Budhathoki", age: 22, course: "BIT", address:{
        city: "Pokhara",
        country: "Nepal"
    }};

console.log(std.address.city); // output: Pokhara
console.log(std.address.country); // output: Nepal

// Create an array of 3 students and print all their names using a loop. */

const students = ["Viplav", "Sankalpa", "Sangram", "Yashoda"];

for (let student of students){
    console.log(student); // output: Viplav Sankalpa Sangram Yashoda
}