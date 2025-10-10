// Day 6 Revision: Objects Deep Dive (Question Set)


// Q1. Basic Object Creation
// Create an object named car with the properties:
// brand: "Tesla", model: "Model 3", and color: "Black".
// Then print each property using both dot and bracket notation.

const car = {brand: "Tesla", model: "Model 3",  color: "Black"}

console.log(car.brand);
console.log(car["brand"]);
console.log(car.model);
console.log(car["model"]);
console.log(car.color);
console.log(car["color"]);

// Use Bracket Notation ([]) when:
// Property name is unknown until runtime (stored in a variable)
// Property name has spaces or special symbols
// Property name starts with a number

// Use Dot Notation (.) when:
// The property name has no spaces
// The property name doesn’t start with a number
// The property name doesn’t contain special characters
// You’re not using a variable as the property name



// Q2. Add / Update / Delete

// Using the same car object:
// Add a new property year: 2025.
// Update the color to "Red".
// Delete the model property.
// Then print the final object.

// Add a new property
car.year = 2025;
// Update existing property
car.color = "Red";
// Delete a property
delete car.model;
// Print the final object
console.log(car);



// Q3. Methods & this Keyword

// Create an object user with properties name and age.
// Add a method introduce() that prints:
// "Hi, I'm [name] and I am [age] years old."
// Use the this keyword inside the method.

const user = {
    name: "Viplav Budhathoki", 
    age: 22,

introduce: function (){
    console.log(`Hi, I'm ${this.name} and I am ${this.age} years old.`);
    }
};

user.introduce();



// Q4. Nested Objects

// Make an object student with name, age, and an address object (with city and country).
// Print the city from the nested object.

const student = {name: "Sankalpa Limbu", age: 20, address: {
    city: "Dharan",
    country: "Nepal",
}};

console.log(student.address.city);
console.log(student.address["city"]);


// Q5. Looping through Objects

// Create an object book with title, author, and year.
// Print all keys and values using a for...in loop.

const book = {title: "Maya", author: "Viplav Budhathoki", year: 2025};

for (let key in book){
    console.log(key);
    console.log(book[key]);
    console.log(`${key}: ${book[key]}`);
}



// Q6. Object.keys() / Object.values() / Object.entries()

// Use the same book object.
// Print:
// All keys using Object.keys()
// All values using Object.values()
// All entries using Object.entries()

const keys = Object.keys(book);
console.log(keys);

const values = Object.values(book);
console.log(book);

const entries = Object.entries(book);
console.log(entries);

// Object in JavaScript is a global built-in object that provides methods for working with objects.

// Methods like:
// Object.keys() → get all property names
// Object.values() → get all property values
// Object.entries() → get all key-value pairs are attached to the global Object, not to your own object.



// Q7. Array of Objects
// Make an array of 3 users, each having name and email.
// Print all names using forEach().

const users = [
    {name: "Viplav Budhathoki", email: "viplav123@gmail.com"},
    {name: "Sankalpa Limbu", email: "sankalpa456@gmail.com"},
    {name: "Sangram Budhathoki", email: "sangram123@gmail.com"},
]

users.forEach(function(user) {
console.log(user.name);
});



// Q8. Copying Objects

// Explain the difference between:
// const a = obj;
// const b = { ...obj };
// and show with a code example.

// const a = obj; → Reference Copy
// What it does: a does not create a new object.
// a and obj point to the same object in memory.
// Changing a affects obj.

const obj = {name: "Viplav", age: 22};
const a = obj; // reference copy

a.name = "Sankalpa"; 

console.log(obj.name); // Sankalpa affected
console.log(a.name);   // Sankalpa

// Both a and obj point to the same object in memory.
// Changing one affects the other.


// const b = {...obj}; → Shallow Copy
// What it does: Creates a new object at the top level.
// Primitive properties are copied by value.
// Nested objects are still shared (reference).

const obje = {name: "Viplav", age: 22, address: {city: "Dharan"}};
const b = {...obje}; // shallow copy

b.name = "Sankalpa";
b.address.city = "Kathmandu";

console.log(obje.name);        // Viplav  primitive unaffected
console.log(obje.address.city); // Kathmandu  nested object affected

// name → primitive → independent
// address → object → shared reference
// This is why it’s called a shallow copy

// Summary (Good Enough for Learning / Coding)
// Primitives (number, string, boolean, null, undefined, symbol)
// Always copied by value
// Independent in both shallow and deep copy
// Objects / Arrays / nested objects
// Shallow copy: shares reference → changes affect original
// Deep copy: fully independent → changes do NOT affect original

// Optional Extra Notes (for advanced cases):
// Deep copy using JSON.stringify() cannot copy functions, Date, Map, Set, undefined, or circular references
// For complex objects, use structuredClone() or a library like Lodash (_.cloneDeep())



// Q9. What does this print?
// const laptop = {
//   brand: "Apple",
//   show: function() {
//     console.log(this.brand);
//   }
// };

// const ref = laptop.show;
// ref(); 

// Explain why it doesn’t print “Apple”.

const laptop = {
  brand: "Apple",
  show: function() {
    console.log(this.brand);
  }
};

// Store a reference to the function, but bind `this` to laptop
const ref = laptop.show.bind(laptop); //.bind(obj) doesn’t call the function, just returns a new bound function

// Call the bound function
ref(); // Apple 


/* laptop.show is a function inside the object.
Inside it, you have console.log(this.brand).

const ref = laptop.show;
Here, you just copy the function into a new variable ref.
Important: ref does NOT remember that it came from laptop.

ref()
You are calling the function standalone, not as a method of laptop.
In a standalone function, this is:
undefined in strict mode
global object (window) in non-strict mode
There is no brand property on the global object → prints undefined instead of "Apple". */



// Q10. Real-Life Example

// Create an object bankAccount with:
// owner
// balance
// Method deposit(amount) to add balance
// Method withdraw(amount) to subtract balance (only if sufficient)
// Then test all methods.

const bankAccount = {
  owner: "Viplav Budhathoki",
  balance: 1000000,

  deposit: function(amount) {
    this.balance += amount;
    console.log(`Deposited ${amount}. New balance: ${this.balance}`);
  },

  withdraw: function(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew ${amount}. Remaining balance: ${this.balance}`);
    } else {
      console.log("Insufficient funds!");
    }
  }
};

// Testing the methods
bankAccount.deposit(50000);   // adds 50,000
bankAccount.withdraw(20000);  // subtracts 20,000
bankAccount.withdraw(2000000); // insufficient


