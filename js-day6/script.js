// Day 6 - Objects Deep Dive in JavaScript

// Topics: Properties • Methods • this Keyword • Object.keys() • Object.values() • Object.entries()
// An object in JavaScript is a collection of related data and functionalities — stored as key-value pairs. Each key (called a property name) maps to a value.

const person = {
    name: "Viplav Budhathoki",
    age: 22,
    course: "BIT"
};

// name, age, course are keys (properties).
// "Viplav Budhathoki", 22 and "BIT" are values.
// Objects are used everywhere in JS — even arrays, functions, and dates are types of objects.



// Accessing the Object Properties
// We can access the object data in two ways

// Dot notation 
console.log(person.name); // output: Viplav Budhathoki

// Bracket notation
console.log(person["course"]); // output: BIT

// we use bracket notation when the key is stored in a variable or has spaces/special characters:
const key = "age";
console.log(person[key]);




// Adding, Updating & Deleting Properties

person.country = "Nepal"; // Add a new property
person.age = 23; // Update a property
delete person.course; // Delete a property

console.log(person); // output: {name: 'Viplav Budhathoki', age: 23, country: 'Nepal'}



// Methods (Functions inside Objects)

// A method is a function that belongs to an object.
// It allows the object to perform actions.

const user = {
  name: "Sankalpa",
  age: 20,
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

user.greet(); // Output: Hello, my name is Sankalpa

// greet is a method.
// Inside it, this.name refers to the name property of that object.



// The this Keyword (Very Important!)
// The this keyword refers to the object that is currently executing the code.

const car = {
  brand: "Tesla",
  model: "Model 3",
  start: function() {
    console.log(`${this.brand} ${this.model} is starting...`); //this.brand → refers to the brand property inside the same car object.
  }
};

car.start(); // Output: Tesla Model 3 is starting...



// 6. Nested Objects
// Objects can contain other objects inside them.

const student = {
  name: "Viplav Budhathoki",
  age: 22,
  address: {
    city: "Kathmandu",
    country: "Nepal"
  }
};

console.log(student.address.city); // Output: Kathmandu



// 7. Looping Through Objects
// You can use for...in or Object.keys() to loop through properties.

// Method 1: Using for...in

for (let key in student) {
  console.log(key + ": " + student[key]);
}

// Method 2: Using Object.keys()

Object.keys(student).forEach(key => {
  console.log(key + ": " + student[key]);
});



// 8. Object.keys(), Object.values(), and Object.entries()
// These are built-in functions for working with objects.

const book = {
  title: "Atomic Habits",
  author: "James Clear",
  year: 2018
};

// Object.keys(book)
// Returns an array of property names:

console.log(Object.keys(book));
// Output: ["title", "author", "year"]

// Object.values(book)
// Returns an array of values:

console.log(Object.values(book));
// Output: ["Atomic Habits", "James Clear", 2018]

// Object.entries(book)
// Returns an array of [key, value] pairs:

console.log(Object.entries(book));
// Output: [["title", "Atomic Habits"], ["author", "James Clear"], ["year", 2018]]



// 9. Arrays of Objects (Common in APIs & Databases)
// Often, you’ll have multiple objects inside an array.

const users = [
  { name: "Viplav", age: 22 },
  { name: "Sankalpa", age: 20 },
  { name: "Sangram", age: 18 }
];

users.forEach(user => console.log(user.name));
// Output:
// Viplav
// Sankalpa
// Sangram



// 10. Copying Objects

// Just like arrays, objects can be shallow copied or deep copied.
// Shallow Copy
const o = { x: 1 };
const a = o; // Reference copy (both point to same object)
a.x = 99;
console.log(o.x); // 99 (also changed)

// Proper Copy using Spread Operator
const p = { x: 1 };
const b = { ...p }; // Creates a new independent object
b.x = 99;
console.log(p.x); // 1 (not changed)